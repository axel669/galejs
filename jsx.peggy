File
    = parts:Inter* {
        return parts.filter(part => part !== null)
    }

Inter
    = Comment
    / String
    / Regex
    / Tag
    / Effect
    / Component
    / $([^"<'`\/#]+)
    / "<"
    / "/"
    / "#"

Effect
    = "#effect" __ react:$([^\{]+) _ code:Block {
        return { react, code: code[1] }
    }
Component
    = "#component =>" __ code:$(Block) {
        return { component: code }
    }

Comment
    = "//" [^\n]* "\n" { return null }
    / "/*" ([^\*] / "*" [^\/])* "*/" { return null }
String
    = $('"' ([^\\"] / "\\" .)* '"')
    / $("'" ([^\\'] / "\\" .)* "'")
    / $("`" ([^\\`] / "\\" .)* "`")
Regex
	= $("/" ("\\/" / [^\/\n\r])+ "/" [a-z]*)
TagName = $([\$a-zA-Z0-9_\.\[\]"'`\(\),\-]+)
Tag
    = "<#frag" props:Props _ ">" children:Children* "</>" {
        return {
            tag: "preact.Fragment",
            props,
            children: children.filter(child => child !== null),
        }
    }
    / "<" tag:TagName props:Props _ "/>" {
        return { tag, props, children: [] }
    }
    / "<" tag:TagName props:Props _ ">" children:(Slot / If / Each / Children)* close:TagClose {
        return {
            tag,
            props,
            children: children.filter(child => child !== null),
        }
    }
TagClose
    = "<//>" { return "/" }
    / "</" tag:TagName ">" { return tag }
Text
    = $([^<]+)
Children
    = Tag
    / text:$([^<{]+) {
        const txt = text.trim().replace(/\s+/g, " ")
        if (txt === "") {
            return null
        }
        return txt
    }
    / "{/*" ([^\*] / "*" [^/])* "*/}" { return null }
    / js:JSValue { return { js } }
    / "\\{"
Slot
    = "{#slot" __ slot:VarName propName:(":" VarName)? _ "}" content:(Children / If)* "{#/}" {
        return {
            slot,
            propName: propName?.[1] ?? null,
            content: content.filter(item => item !== null)
        }
    }
VarName
    = $([a-zA-Z_$] [a-zA-Z_$0-9]*)
If
    = "{#if" __ condition:JS _ "}" content:Children* els:("{#else}" Children*)? "{#/}" {
        return {
            condition,
            content: content.filter(item => item !== null),
            alt: (els?.[1] ?? []).filter(item => item !== null),
        }
    }
Each
    = "{#each" __ each:$((!"->" .)+) _ "->" __ expand:JS _ "}" content:Children* "{#/}" {
    	return {
        	each: each.trim(),
            expand: expand.trim(),
            content: content.filter(item => item !== null),
        }
    }

Props
    = items:(__ PropItem)* {
        return items.map(item => item[1])
    }
PropItem
    = "{" name:PropName "}" { return [name, name] }
    / name:PropName "=" "{" value:JS "}" { return [name, value] }
    / name:PropName "=" '"' str:PropString* '"' {
        return [name, `"${str.join("")}"`]
    }
    / name:PropName "=" "`" str:PropInterString* "`" {
        return [name, `\`${str.join("")}\``]
    }
    / name:PropName { return [name, "true"] }
    / "{..." js:JS "}" { return `...${js}` }
PropName = $([$a-zA-Z_] [$a-zA-Z_0-9\-:]*)
PropString
    = $("\\" .)
    / [^"]
PropInterString
    = "{" code:JS "}" { return `\${${code}}` }
    / $("\\" .)
    / [^{`]
    / "{"
JSValue = !("{#" / "{@") "{" js:JS "}" { return js }
JS = $(([^{}"] / String / Block)*)
Block = "{" JS "}"

_ "whitespace"
    = $([ \t\n\r]*)
__ = $([ \t\n\r]+)
