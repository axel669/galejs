var n$1,l$2,u$2,i$2,r$2,o$2,e$2,f$2,c$2,a$2,s$2,h$2,p$2,v$1,d$2={},w$1=[],_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,g$2=Array.isArray;function m$2(n,l){for(var u in l)n[u]=l[u];return n}function b$1(n){n&&n.parentNode&&n.parentNode.removeChild(n);}function k$2(l,u,t){var i,r,o,e={};for(o in u)"key"==o?i=u[o]:"ref"==o?r=u[o]:e[o]=u[o];if(arguments.length>2&&(e.children=arguments.length>3?n$1.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps) void 0===e[o]&&(e[o]=l.defaultProps[o]);return x$1(l,e,i,r,null)}function x$1(n,t,i,r,o){var e={type:n,props:t,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++u$2:o,__i:-1,__u:0};return null==o&&null!=l$2.vnode&&l$2.vnode(e),e}function S$1(n){return n.children}function C$2(n,l){this.props=n,this.context=l;}function $$1(n,l){if(null==l)return n.__?$$1(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?$$1(n):null}function I$1(n){if(n.__P&&n.__d){var u=n.__v,t=u.__e,i=[],r=[],o=m$2({},u);o.__v=u.__v+1,l$2.vnode&&l$2.vnode(o),q$2(n.__P,o,u,n.__n,n.__P.namespaceURI,32&u.__u?[t]:null,i,null==t?$$1(u):t,!!(32&u.__u),r),o.__v=u.__v,o.__.__k[o.__i]=o,D$1(i,o,r),u.__e=u.__=null,o.__e!=t&&P$2(o);}}function P$2(n){if(null!=(n=n.__)&&null!=n.__c)return n.__e=n.__c.base=null,n.__k.some(function(l){if(null!=l&&null!=l.__e)return n.__e=n.__c.base=l.__e}),P$2(n)}function A$1(n){(!n.__d&&(n.__d=true)&&i$2.push(n)&&!H$1.__r++||r$2!=l$2.debounceRendering)&&((r$2=l$2.debounceRendering)||o$2)(H$1);}function H$1(){try{for(var n,l=1;i$2.length;)i$2.length>l&&i$2.sort(e$2),n=i$2.shift(),l=i$2.length,I$1(n);}finally{i$2.length=H$1.__r=0;}}function L$1(n,l,u,t,i,r,o,e,f,c,a){var s,h,p,v,y,_,g,m=t&&t.__k||w$1,b=l.length;for(f=T$3(u,l,m,f,b),s=0;s<b;s++)null!=(p=u.__k[s])&&(h=-1!=p.__i&&m[p.__i]||d$2,p.__i=s,_=q$2(n,p,h,i,r,o,e,f,c,a),v=p.__e,p.ref&&h.ref!=p.ref&&(h.ref&&J$1(h.ref,null,p),a.push(p.ref,p.__c||v,p)),null==y&&null!=v&&(y=v),(g=!!(4&p.__u))||h.__k===p.__k?(f=j$3(p,f,n,g),g&&h.__e&&(h.__e=null)):"function"==typeof p.type&&void 0!==_?f=_:v&&(f=v.nextSibling),p.__u&=-7);return u.__e=y,f}function T$3(n,l,u,t,i){var r,o,e,f,c,a=u.length,s=a,h=0;for(n.__k=new Array(i),r=0;r<i;r++)null!=(o=l[r])&&"boolean"!=typeof o&&"function"!=typeof o?("string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?o=n.__k[r]=x$1(null,o,null,null,null):g$2(o)?o=n.__k[r]=x$1(S$1,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?o=n.__k[r]=x$1(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):n.__k[r]=o,f=r+h,o.__=n,o.__b=n.__b+1,e=null,-1!=(c=o.__i=O$1(o,u,f,s))&&(s--,(e=u[c])&&(e.__u|=2)),null==e||null==e.__v?(-1==c&&(i>a?h--:i<a&&h++),"function"!=typeof o.type&&(o.__u|=4)):c!=f&&(c==f-1?h--:c==f+1?h++:(c>f?h--:h++,o.__u|=4))):n.__k[r]=null;if(s)for(r=0;r<a;r++)null!=(e=u[r])&&0==(2&e.__u)&&(e.__e==t&&(t=$$1(e)),K$1(e,e));return t}function j$3(n,l,u,t){var i,r;if("function"==typeof n.type){for(i=n.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=n,l=j$3(i[r],l,u,t));return l}n.__e!=l&&(t&&(l&&n.type&&!l.parentNode&&(l=$$1(n)),u.insertBefore(n.__e,l||null)),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8==l.nodeType);return l}function F(n,l){return l=l||[],null==n||"boolean"==typeof n||(g$2(n)?n.some(function(n){F(n,l);}):l.push(n)),l}function O$1(n,l,u,t){var i,r,o,e=n.key,f=n.type,c=l[u],a=null!=c&&0==(2&c.__u);if(null===c&&null==e||a&&e==c.key&&f==c.type)return u;if(t>(a?1:0))for(i=u-1,r=u+1;i>=0||r<l.length;)if(null!=(c=l[o=i>=0?i--:r++])&&0==(2&c.__u)&&e==c.key&&f==c.type)return o;return  -1}function z$2(n,l,u){"-"==l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||_.test(l)?u:u+"px";}function N$1(n,l,u,t,i){var r,o;n:if("style"==l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||z$2(n.style,l,"");if(u)for(l in u)t&&u[l]==t[l]||z$2(n.style,l,u[l]);}else if("o"==l[0]&&"n"==l[1])r=l!=(l=l.replace(s$2,"$1")),o=l.toLowerCase(),l=o in n||"onFocusOut"==l||"onFocusIn"==l?o.slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?t?u[a$2]=t[a$2]:(u[a$2]=h$2,n.addEventListener(l,r?v$1:p$2,r)):n.removeEventListener(l,r?v$1:p$2,r);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||false===u&&"-"!=l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u));}}function V$2(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u[c$2])u[c$2]=h$2++;else if(u[c$2]<t[a$2])return;return t(l$2.event?l$2.event(u):u)}}}function q$2(n,u,t,i,r,o,e,f,c,a){var s,h,p,v,y,d,_,k,x,M,$,I,P,A,H,T,j=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),o=[f=u.__e=t.__e]),(s=l$2.__b)&&s(u);n:if("function"==typeof j){h=e.length;try{if(x=u.props,M=j.prototype&&j.prototype.render,$=(s=j.contextType)&&i[s.__c],I=s?$?$.props.value:s.__:i,t.__c?k=(p=u.__c=t.__c).__=p.__E:(M?u.__c=p=new j(x,I):(u.__c=p=new C$2(x,I),p.constructor=j,p.render=Q$1),$&&$.sub(p),p.state||(p.state={}),p.__n=i,v=p.__d=!0,p.__h=[],p._sb=[]),M&&null==p.__s&&(p.__s=p.state),M&&null!=j.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=m$2({},p.__s)),m$2(p.__s,j.getDerivedStateFromProps(x,p.__s))),y=p.props,d=p.state,p.__v=u,v)M&&null==j.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),M&&null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else {if(M&&null==j.getDerivedStateFromProps&&x!==y&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(x,I),u.__v==t.__v||!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(x,p.__s,I)){u.__v!=t.__v&&(p.props=x,p.state=p.__s,p.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u);}),w$1.push.apply(p.__h,p._sb),p._sb=[],p.__h.length&&e.push(p);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(x,p.__s,I),M&&null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(y,d,_);});}if(p.context=I,p.props=x,p.__P=n,p.__e=!1,P=l$2.__r,A=0,M)p.state=p.__s,p.__d=!1,P&&P(u),s=p.render(p.props,p.state,p.context),w$1.push.apply(p.__h,p._sb),p._sb=[];else do{p.__d=!1,P&&P(u),s=p.render(p.props,p.state,p.context),p.state=p.__s;}while(p.__d&&++A<25);p.state=p.__s,null!=p.getChildContext&&(i=m$2(m$2({},i),p.getChildContext())),M&&!v&&null!=p.getSnapshotBeforeUpdate&&(_=p.getSnapshotBeforeUpdate(y,d)),H=null!=s&&s.type===S$1&&null==s.key?E$2(s.props.children):s,f=L$1(n,g$2(H)?H:[H],u,t,i,r,o,e,f,c,a),p.base=u.__e,u.__u&=-161,p.__h.length&&e.push(p),k&&(p.__E=p.__=null);}catch(n){if(e.length=h,u.__v=null,c||null!=o)if(n.then){for(u.__u|=c?160:128;f&&8==f.nodeType&&f.nextSibling;)f=f.nextSibling;null!=o&&(o[o.indexOf(f)]=null),u.__e=f;}else {if(null!=o)for(T=o.length;T--;)b$1(o[T]);B$2(u);}else u.__e=t.__e,!u.__k&&t.__k&&(u.__k=t.__k),n.then||B$2(u);l$2.__e(n,u,t);}}else null==o&&u.__v==t.__v?(u.__k=t.__k,u.__e=t.__e):f=u.__e=G$1(t.__e,u,t,i,r,o,e,c,a);return (s=l$2.diffed)&&s(u),128&u.__u?void 0:f}function B$2(n){n&&(n.__c&&(n.__c.__e=true),n.__k&&n.__k.some(B$2));}function D$1(n,u,t){for(var i=0;i<t.length;i++)J$1(t[i],t[++i],t[++i]);l$2.__c&&l$2.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$2.__e(n,u.__v);}});}function E$2(n){return "object"!=typeof n||null==n||n.__b>0?n:g$2(n)?n.map(E$2):void 0!==n.constructor?null:m$2({},n)}function G$1(u,t,i,r,o,e,f,c,a){var s,h,p,v,y,w,_,m=i.props||d$2,k=t.props,x=t.type;if("svg"==x?o="http://www.w3.org/2000/svg":"math"==x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=e)for(s=0;s<e.length;s++)if((y=e[s])&&"setAttribute"in y==!!x&&(x?y.localName==x:3==y.nodeType)){u=y,e[s]=null;break}if(null==u){if(null==x)return document.createTextNode(k);u=document.createElementNS(o,x,k.is&&k),c&&(l$2.__m&&l$2.__m(t,e),c=false),e=null;}if(null==x)m===k||c&&u.data==k||(u.data=k);else {if(e="textarea"==x&&null!=k.defaultValue?null:e&&n$1.call(u.childNodes),!c&&null!=e)for(m={},s=0;s<u.attributes.length;s++)m[(y=u.attributes[s]).name]=y.value;for(s in m)y=m[s],"dangerouslySetInnerHTML"==s?p=y:"children"==s||s in k||"value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k||N$1(u,s,null,y,o);for(s in k)y=k[s],"children"==s?v=y:"dangerouslySetInnerHTML"==s?h=y:"value"==s?w=y:"checked"==s?_=y:c&&"function"!=typeof y||m[s]===y||N$1(u,s,y,m[s],o);if(h)c||p&&(h.__html==p.__html||h.__html==u.innerHTML)||(u.innerHTML=h.__html),t.__k=[];else if(p&&(u.innerHTML=""),L$1("template"==t.type?u.content:u,g$2(v)?v:[v],t,i,r,"foreignObject"==x?"http://www.w3.org/1999/xhtml":o,e,f,e?e[0]:i.__k&&$$1(i,0),c,a),null!=e)for(s=e.length;s--;)b$1(e[s]);c&&"textarea"!=x||(s="value","progress"==x&&null==w?u.removeAttribute("value"):null!=w&&(w!==u[s]||"progress"==x&&!w||"option"==x&&w!=m[s])&&N$1(u,s,w,m[s],o),s="checked",null!=_&&_!=u[s]&&N$1(u,s,_,m[s],o));}return u}function J$1(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u));}else n.current=u;}catch(n){l$2.__e(n,t);}}function K$1(n,u,t){var i,r;if(l$2.unmount&&l$2.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||J$1(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$2.__e(n,u);}i.base=i.__P=i.__n=null;}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&K$1(i[r],u,t||"function"!=typeof n.type);t||b$1(n.__e),n.__c=n.__=n.__e=void 0;}function Q$1(n,l,u){return this.constructor(n,u)}function R(u,t,i){var r,o,e,f;t==document&&(t=document.documentElement),l$2.__&&l$2.__(u,t),o=(r="function"=="undefined")?null:t.__k,e=[],f=[],q$2(t,u=(t).__k=k$2(S$1,null,[u]),o||d$2,d$2,t.namespaceURI,o?null:t.firstChild?n$1.call(t.childNodes):null,e,o?o.__e:t.firstChild,r,f),D$1(e,u,f),u.props.children=null;}n$1=w$1.slice,l$2={__e:function(n,l,u,t){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),o=i.__d),o)return i.__E=i}catch(l){n=l;}throw n}},u$2=0,C$2.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=m$2({},this.state),"function"==typeof n&&(n=n(m$2({},u),this.props)),n&&m$2(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),A$1(this));},C$2.prototype.forceUpdate=function(n){this.__v&&(this.__e=true,n&&this.__h.push(n),A$1(this));},C$2.prototype.render=S$1,i$2=[],o$2="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e$2=function(n,l){return n.__v.__b-l.__v.__b},H$1.__r=0,f$2=Math.random().toString(8),c$2="__d"+f$2,a$2="__a"+f$2,s$2=/(PointerCapture)$|Capture$/i,h$2=0,p$2=V$2(false),v$1=V$2(true);

var t$1,r$1,u$1,i$1,o$1=0,f$1=[],c$1=l$2,e$1=c$1.__b,a$1=c$1.__r,v=c$1.diffed,l$1=c$1.__c,m$1=c$1.unmount,p$1=c$1.__;function s$1(n,t){c$1.__h&&c$1.__h(r$1,n,o$1||t),o$1=0;var u=r$1.__H||(r$1.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function d$1(n){return o$1=1,y(D,n)}function y(n,u,i){var o=s$1(t$1++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r$1,!r$1.__f)){var f=function(n,t,r){if(!o.__c.__H)return  true;var u=false,i=o.__c.props!==n;if(o.__c.__H.__.some(function(n){if(n.__N){u=true;var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=true);}}),c){var f=c.call(this,n,t,r);return u?f||i:f}return !u||i};r$1.__f=true;var c=r$1.shouldComponentUpdate,e=r$1.componentWillUpdate;r$1.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r$1.shouldComponentUpdate=f;}return o.__N||o.__}function h$1(n,u){var i=s$1(t$1++,3);!c$1.__s&&C$1(i.__H,u)&&(i.__=n,i.u=u,r$1.__H.__h.push(i));}function T$2(n,r){var u=s$1(t$1++,7);return C$1(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function j$2(){for(var n;n=f$1.shift();){var t=n.__H;if(n.__P&&t)try{t.__h.some(z$1),t.__h.some(B$1),t.__h=[];}catch(r){t.__h=[],c$1.__e(r,n.__v);}}}c$1.__b=function(n){r$1=null,e$1&&e$1(n);},c$1.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),p$1&&p$1(n,t);},c$1.__r=function(n){a$1&&a$1(n),t$1=0;var i=(r$1=n.__c).__H;i&&(u$1===r$1?(i.__h=[],r$1.__h=[],i.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(i.__h.length&&j$2(),t$1=0)),u$1=r$1;},c$1.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f$1.push(t)&&i$1===c$1.requestAnimationFrame||((i$1=c$1.requestAnimationFrame)||w)(j$2)),t.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0);})),u$1=r$1=null;},c$1.__c=function(n,t){t.some(function(n){try{n.__h.some(z$1),n.__h=n.__h.filter(function(n){return !n.__||B$1(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c$1.__e(r,n.__v);}}),l$1&&l$1(n,t);},c$1.unmount=function(n){m$1&&m$1(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.some(function(n){try{z$1(n);}catch(n){t=n;}}),r.__H=void 0,t&&c$1.__e(t,r.__v));};var k$1="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k$1&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,35);k$1&&(t=requestAnimationFrame(r));}function z$1(n){var t=r$1,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r$1=t;}function B$1(n){var t=r$1;n.__c=n.__(),r$1=t;}function C$1(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}

function g$1(n,t){for(var e in t)n[e]=t[e];return n}function E$1(n,t){for(var e in n)if("__source"!==e&&!(e in t))return  true;for(var r in t)if("__source"!==r&&n[r]!==t[r])return  true;return  false}function M$1(n,t){this.props=n,this.context=t;}function N(n,e){function r(n){var t=this.props.ref;return t!=n.ref&&t&&("function"==typeof t?t(null):t.current=null),e?!e(this.props,n)||t!=n.ref:E$1(this.props,n)}function u(e){return this.shouldComponentUpdate=r,k$2(n,e)}return u.displayName="Memo("+(n.displayName||n.name)+")",u.__f=u.prototype.isReactComponent=true,u.type=n,u}(M$1.prototype=new C$2).isPureReactComponent=true,M$1.prototype.shouldComponentUpdate=function(n,t){return E$1(this.props,n)||E$1(this.state,t)};var T$1=l$2.__b;l$2.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),T$1&&T$1(n);};var O=l$2.__e;l$2.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);O(n,t,e,r);};var U=l$2.unmount;function V$1(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),null!=(n=g$1({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c.__e=true,n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return V$1(n,t,e)})),n}function W(n,t,e){return n&&e&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return W(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.appendChild(n.__e),n.__c.__e=true,n.__c.__P=e)),n}function P$1(){this.__u=0,this.o=null,this.__b=null;}function j$1(n){var t=n.__&&n.__.__c;return t&&t.__a&&t.__a(n)}function B(){this.i=null,this.l=null;}l$2.unmount=function(n){var t=n.__c;t&&(t.__z=true),t&&t.__R&&t.__R(),t&&32&n.__u&&(n.type=null),U&&U(n);},(P$1.prototype=new C$2).__c=function(n,t){var e=t.__c,r=this;null==r.o&&(r.o=[]),r.o.push(e);var u=j$1(r.__v),o=false,i=function(){o||r.__z||(o=true,e.__R=null,u?u(f):f());};e.__R=i;var l=e.__P;e.__P=null;var f=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=W(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.o.pop();)t.__P=l,t.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},P$1.prototype.componentWillUnmount=function(){this.o=[];},P$1.prototype.render=function(n,e){var r=this.__v;if(!r.__m){for(var o=r;o.__;)o=o.__;o=o.__m||(o.__m=[0,0]),r.__m=[o[1]++,0];}if(this.__b){if(r.__k){var i=document.createElement("div"),l=r.__k[0].__c;r.__k[0]=V$1(this.__b,i,l.__O=l.__P);}this.__b=null;}var f=e.__a&&k$2(S$1,null,n.fallback);return f&&(f.__u&=-33),[k$2(S$1,null,e.__a?null:n.children),f]};var H=function(n,t,e){if(++e[1]===e[0]&&n.l.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.l.size))for(e=n.i;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.i=e=e[2];}};(B.prototype=new C$2).__a=function(n){var t=this,e=j$1(t.__v),r=t.l.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),H(t,n,r)):u();};e?e(o):o();}},B.prototype.render=function(n){this.i=null,this.l=new Map;var t=F(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.l.set(t[e],this.i=[1,0,this.i]);return n.children},B.prototype.componentDidUpdate=B.prototype.componentDidMount=function(){var n=this;this.l.forEach(function(t,e){H(n,e,t);});};var q$1="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,G=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,J=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,K=/[A-Z0-9]/g,Q="undefined"!=typeof document,X=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};C$2.prototype.isReactComponent=true,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(C$2.prototype,t,{configurable:true,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:true,writable:true,value:n});}});});var en=l$2.event;l$2.event=function(n){return en&&(n=en(n)),n.persist=function(){},n.isPropagationStopped=function(){return this.cancelBubble},n.isDefaultPrevented=function(){return this.defaultPrevented},n.nativeEvent=n};var un={configurable:true,get:function(){return this.class}},on=l$2.vnode;l$2.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={},o=-1==e.indexOf("-");for(var i in t){var l=t[i];if(!("value"===i&&"defaultValue"in t&&null==l||Q&&"children"===i&&"noscript"===e||"class"===i||"className"===i)){var f=i.toLowerCase();"defaultValue"===i&&"value"in t&&null==t.value?i="value":"download"===i&&true===l?l="":"translate"===f&&"no"===l?l=false:"o"===f[0]&&"n"===f[1]?"ondoubleclick"===f?i="ondblclick":"onchange"!==f||"input"!==e&&"textarea"!==e||X(t.type)?"onfocus"===f?i="onfocusin":"onblur"===f?i="onfocusout":J.test(i)&&(i=f):f=i="oninput":o&&G.test(i)?i=i.replace(K,"-$&").toLowerCase():null===l&&(l=void 0),"oninput"===f&&u[i=f]&&(i="oninputCapture"),u[i]=l;}}"select"==e&&(u.multiple&&Array.isArray(u.value)&&(u.value=F(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value);})),null!=u.defaultValue&&(u.value=F(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value;}))),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",un)):t.className&&(u.class=u.className=t.className),n.props=u;}(n),n.$$typeof=q$1,on&&on(n);};var ln=l$2.__r;l$2.__r=function(n){ln&&ln(n),n.__c;};var fn=l$2.diffed;l$2.diffed=function(n){fn&&fn(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value);};

/* eslint @typescript-eslint/no-explicit-any: off */
// symbols
const GET_ORIGINAL_SYMBOL = Symbol();
// get object prototype
const getProto = Object.getPrototypeOf;
const objectsToTrack = new WeakMap();
// check if obj is a plain object or an array
const isObjectToTrack = (obj) => obj &&
    (objectsToTrack.has(obj)
        ? objectsToTrack.get(obj)
        : getProto(obj) === Object.prototype || getProto(obj) === Array.prototype);
/**
 * Unwrap proxy to get the original object.
 *
 * Used to retrieve the original object used to create the proxy instance with `createProxy`.
 *
 * @param {Proxy<object>} obj -  The proxy wrapper of the originial object.
 * @returns {object | null} - Return either the unwrapped object if exists.
 *
 * @example
 * import { createProxy, getUntracked } from 'proxy-compare';
 *
 * const original = { a: "1", c: "2", d: { e: "3" } };
 * const affected = new WeakMap();
 *
 * const proxy = createProxy(original, affected);
 * const originalFromProxy = getUntracked(proxy)
 *
 * Object.is(original, originalFromProxy) // true
 * isChanged(original, originalFromProxy, affected) // false
 */
const getUntracked = (obj) => {
    if (isObjectToTrack(obj)) {
        return obj[GET_ORIGINAL_SYMBOL] || null;
    }
    return null;
};
/**
 * Mark object to be tracked.
 *
 * This function marks an object that will be passed into `createProxy`
 * as marked to track or not. By default only Array and Object are marked to track,
 * so this is useful for example to mark a class instance to track or to mark a object
 * to be untracked when creating your proxy.
 *
 * @param obj - Object to mark as tracked or not.
 * @param mark - Boolean indicating whether you want to track this object or not.
 * @returns - No return.
 *
 * @example
 * import { createProxy, markToTrack, isChanged } from 'proxy-compare';
 *
 * const nested = { e: "3" }
 *
 * markToTrack(nested, false)
 *
 * const original = { a: "1", c: "2", d: nested };
 * const affected = new WeakMap();
 *
 * const proxy = createProxy(original, affected);
 *
 * proxy.d.e
 *
 * isChanged(original, { d: { e: "3" } }, affected) // true
 */
const markToTrack = (obj, mark = true) => {
    objectsToTrack.set(obj, mark);
};

const isObject = (x) => typeof x === "object" && x !== null;
const canProxyDefault = (x) => isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer) && !(x instanceof Promise);
const createSnapshotDefault = (target, version) => {
  const cache = snapCache.get(target);
  if ((cache == null ? void 0 : cache[0]) === version) {
    return cache[1];
  }
  const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
  markToTrack(snap, true);
  snapCache.set(target, [version, snap]);
  Reflect.ownKeys(target).forEach((key) => {
    if (Object.getOwnPropertyDescriptor(snap, key)) {
      return;
    }
    const value = Reflect.get(target, key);
    const { enumerable } = Reflect.getOwnPropertyDescriptor(
      target,
      key
    );
    const desc = {
      value,
      enumerable,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: true
    };
    if (refSet.has(value)) {
      markToTrack(value, false);
    } else if (proxyStateMap.has(value)) {
      const [target2, ensureVersion] = proxyStateMap.get(
        value
      );
      desc.value = createSnapshotDefault(target2, ensureVersion());
    }
    Object.defineProperty(snap, key, desc);
  });
  return snap;
};
const createHandlerDefault = (isInitializing, addPropListener, removePropListener, notifyUpdate) => ({
  deleteProperty(target, prop) {
    Reflect.get(target, prop);
    removePropListener(prop);
    const deleted = Reflect.deleteProperty(target, prop);
    if (deleted) {
      notifyUpdate(void 0 );
    }
    return deleted;
  },
  set(target, prop, value, receiver) {
    const hasPrevValue = !isInitializing() && Reflect.has(target, prop);
    const prevValue = Reflect.get(target, prop, receiver);
    if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
      return true;
    }
    removePropListener(prop);
    if (isObject(value)) {
      value = getUntracked(value) || value;
    }
    const nextValue = !proxyStateMap.has(value) && canProxy(value) ? proxy(value) : value;
    addPropListener(prop, nextValue);
    Reflect.set(target, prop, nextValue, receiver);
    notifyUpdate(void 0 );
    return true;
  }
});
const proxyStateMap = /* @__PURE__ */ new WeakMap();
const refSet = /* @__PURE__ */ new WeakSet();
const snapCache = /* @__PURE__ */ new WeakMap();
const versionHolder = [1];
const proxyCache = /* @__PURE__ */ new WeakMap();
let objectIs = Object.is;
let newProxy = (target, handler) => new Proxy(target, handler);
let canProxy = canProxyDefault;
let createSnapshot = createSnapshotDefault;
let createHandler = createHandlerDefault;
function proxy(baseObject = {}) {
  if (!isObject(baseObject)) {
    throw new Error("object required");
  }
  const found = proxyCache.get(baseObject);
  if (found) {
    return found;
  }
  let version = versionHolder[0];
  const listeners = /* @__PURE__ */ new Set();
  const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
    if (version !== nextVersion) {
      checkVersion = version = nextVersion;
      listeners.forEach((listener) => listener(op, nextVersion));
    }
  };
  let checkVersion = version;
  const ensureVersion = (nextCheckVersion = versionHolder[0]) => {
    if (checkVersion !== nextCheckVersion) {
      checkVersion = nextCheckVersion;
      propProxyStates.forEach(([propProxyState]) => {
        const propVersion = propProxyState[1](nextCheckVersion);
        if (propVersion > version) {
          version = propVersion;
        }
      });
    }
    return version;
  };
  const createPropListener = (prop) => (op, nextVersion) => {
    let newOp;
    if (op) {
      newOp = [...op];
      newOp[1] = [prop, ...newOp[1]];
    }
    notifyUpdate(newOp, nextVersion);
  };
  const propProxyStates = /* @__PURE__ */ new Map();
  const addPropListener = (prop, propValue) => {
    const propProxyState = !refSet.has(propValue) && proxyStateMap.get(propValue);
    if (propProxyState) {
      if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && propProxyStates.has(prop)) {
        throw new Error("prop listener already exists");
      }
      if (listeners.size) {
        const remove = propProxyState[2](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      } else {
        propProxyStates.set(prop, [propProxyState]);
      }
    }
  };
  const removePropListener = (prop) => {
    var _a;
    const entry = propProxyStates.get(prop);
    if (entry) {
      propProxyStates.delete(prop);
      (_a = entry[1]) == null ? void 0 : _a.call(entry);
    }
  };
  const addListener = (listener) => {
    listeners.add(listener);
    if (listeners.size === 1) {
      propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
        if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && prevRemove) {
          throw new Error("remove already exists");
        }
        const remove = propProxyState[2](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      });
    }
    const removeListener = () => {
      listeners.delete(listener);
      if (listeners.size === 0) {
        propProxyStates.forEach(([propProxyState, remove], prop) => {
          if (remove) {
            remove();
            propProxyStates.set(prop, [propProxyState]);
          }
        });
      }
    };
    return removeListener;
  };
  let initializing = true;
  const handler = createHandler(
    () => initializing,
    addPropListener,
    removePropListener,
    notifyUpdate
  );
  const proxyObject = newProxy(baseObject, handler);
  proxyCache.set(baseObject, proxyObject);
  const proxyState = [baseObject, ensureVersion, addListener];
  proxyStateMap.set(proxyObject, proxyState);
  Reflect.ownKeys(baseObject).forEach((key) => {
    const desc = Object.getOwnPropertyDescriptor(
      baseObject,
      key
    );
    if ("value" in desc && desc.writable) {
      proxyObject[key] = baseObject[key];
    }
  });
  initializing = false;
  return proxyObject;
}
function getVersion(proxyObject) {
  const proxyState = proxyStateMap.get(proxyObject);
  return proxyState == null ? void 0 : proxyState[1]();
}
function subscribe(proxyObject, callback, notifyInSync) {
  const proxyState = proxyStateMap.get(proxyObject);
  if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !proxyState) {
    console.warn("Please use proxy object");
  }
  let promise;
  const ops = [];
  const addListener = proxyState[2];
  let isListenerActive = false;
  const listener = (op) => {
    if (op) {
      ops.push(op);
    }
    if (!promise) {
      promise = Promise.resolve().then(() => {
        promise = void 0;
        if (isListenerActive) {
          callback(ops.splice(0));
        }
      });
    }
  };
  const removeListener = addListener(listener);
  isListenerActive = true;
  return () => {
    isListenerActive = false;
    removeListener();
  };
}
function snapshot(proxyObject) {
  const proxyState = proxyStateMap.get(proxyObject);
  if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !proxyState) {
    console.warn("Please use proxy object");
  }
  const [target, ensureVersion] = proxyState;
  return createSnapshot(target, ensureVersion());
}
function ref$1(obj) {
  refSet.add(obj);
  return obj;
}

const ref = (obj) => {
    if (obj === null || obj === undefined) {
        return null
    }
    return ref$1(obj)
};

const boolProps = ["checked"];
const propMods = [
    (comp, props) => {
        if (typeof comp !== "string") {
            return props
        }
        const filtered = {};
        Object.keys(props).forEach(
            key => {
                if (key.startsWith("$") === true) {
                    return
                }
                const value = props[key];
                if (value === false || value === null) {
                    return
                }
                if (boolProps.includes(key) === true) {
                    filtered[key] = value === true;
                    return
                }
                filtered[key] = (value === true) ? "" : value;
            }
        );
        return filtered
    },
    // allow ws prop across entire codebase, convert at last minute
    (component, props) => {
        if (typeof component !== "string") {
            return props
        }
        if (props.ws === undefined) {
            return props
        }
        const { ws, ...rest } = props;
        return { "data-ws": ws, ...rest }
    },
];
const modProps = (comp, props) => {
    let modifiedProps = props;
    for (const mod of propMods) {
        modifiedProps = mod(comp, modifiedProps);
    }
    return modifiedProps
};

const versionCache = new WeakMap();
const valtimemo = (prev, next) => {
    const prevVersion = versionCache.get(prev);
    const nextVersion = Math.max(
        ...Object.values(next).map(
            value => getVersion(value) ?? 0
        )
    );
    versionCache.set(next, nextVersion);
    if (prevVersion !== nextVersion) {
        return false
    }

    const keys = [...Object.keys(prev), ...Object.keys(next)];
    for (const key of keys) {
        if (prev[key] !== next[key]) {
            return false
        }
    }
    return true
};

const cache = new WeakMap();
const memod = (component) => {
    if (typeof component === "string") {
        return component
    }
    if (component.noMemo === true) {
        return component
    }
    if (cache.has(component) === true) {
        return cache.get(component)
    }
    cache.set(
        component,
        N(component, valtimemo)
    );
    return cache.get(component)
};
const Element = (comp, props, ...children) => {
    if (comp === undefined || comp === null) {
        return null
    }

    return k$2(
        memod(comp),
        modProps(comp, props),
        ...children
    )
};

// import { updateFuncs } from "./merge-tools.js"

const useShared = (proxy) => {
    const [value, set] = d$1(
        Date.now()
    );
    h$1(
        () => subscribe(
            proxy,
            () => set(
                Date.now()
            )
        ),
        []
    );
    return proxy
};

const useLocal = (baseValue) => {
    const [localProxy, cleanup] = T$2(
        () => {
            const state =
                (typeof baseValue === "function")
                    ? proxy(
                        baseValue()
                    )
                    : proxy(baseValue);
            // updateFuncs(state)
            const cleanup = subscribe(
                state,
                () => set(
                    Date.now()
                )
            );
            return [state, cleanup]
        },
        []
    );
    const [value, set] = d$1(
        Date.now()
    );
    h$1(
        () => {
            return () => cleanup()
        },
        []
    );
    return localProxy
};

const render = (item, ...args) => {
    if (typeof item === "function") {
        return item(...args)
    }
    return item
};

const e=Symbol("no match"),t=(t,r)=>{const o=r=>{const o=r.length;return ()=>r===t.substr(N,o)?(N+=o,r):e},a=r=>()=>{const o=t.charAt(N);return  false!==r.test(o)?(N+=1,o):e};let n=null;const s=o("@"),i=o(":"),l=a(/[^;]/),c=o(";"),d=o("*"),p=a(/[a-z0-9_\-]/i),h=o("!"),u=a(/[^{]/),g=o("{"),f=o("}"),b=a(/[a-zA-Z0-9\.\-_#\^\$\/]/),m=o("#"),x=a(/[^;#]/),v=a(/[\s]/m),w=()=>{const t=N;let r=null,o=null;return (r=P())===e||(o=z())===e?(N=t,e):[r,o]},y=()=>{const r=N;let o=null,a=null;return (o=m())===e||(a=(()=>{const r=N,o=N;for(;x()!==e;);return N-o==0?e:t.slice(r,N)})())===e?(N=r,e):[o,a]},k=()=>{n="rules";let t=N,r=null;const o=[];let a=null;for(;(a=w())!==e;)o.push(a);if(r=o,P()===e)return N=t,e;return r.map((e=>e[1]))},z=()=>{let t=null;return (t=$())!==e||(t=A())!==e||(t=L())!==e||(t=E())!==e?t:e},$=()=>{n="rule$0";let t=N,r=null;if((r=S())===e)return N=t,e;return r},A=()=>{n="rule$1";let t=N,r=null;if((r=q())===e)return N=t,e;return r},L=()=>{n="rule$2";let t=N,r=null;if((r=C())===e)return N=t,e;return r},E=()=>{n="rule$3";let t=N,r=null;if((r=T())===e)return N=t,e;return r},S=()=>{n="variable";let r=N,o=null,a=null;if(s()===e)return N=r,e;if((o=M())===e)return N=r,e;if(i()===e)return N=r,e;if(P()===e)return N=r,e;if((a=(()=>{const r=N,o=N;for(;l()!==e;);return N-o==0?e:t.slice(r,N)})())===e)return N=r,e;if(c()===e)return N=r,e;return ((e,t)=>({type:"var",name:e,value:t}))(o,a)},q=()=>{n="css";let r=N,o=null,a=null;if(d()===e)return N=r,e;if((o=M())===e)return N=r,e;if(i()===e)return N=r,e;if(P()===e)return N=r,e;if((a=(()=>{const r=N,o=N;for(;l()!==e;);return N-o==0?e:t.slice(r,N)})())===e)return N=r,e;if(c()===e)return N=r,e;return ((e,t)=>({type:"css",name:e,value:t}))(o,a)},M=()=>{n="cssName";let r=N,o=null;if((o=(()=>{const r=N,o=N;for(;p()!==e;);return N-o==0?e:t.slice(r,N)})())===e)return N=r,e;return o},C=()=>{n="subrule";let r=N,o=null,a=null;if(h()===e)return N=r,e;if(P()===e)return N=r,e;if((o=(()=>{const r=N,o=N;for(;u()!==e;);return N-o==0?e:t.slice(r,N)})())===e)return N=r,e;if(g()===e)return N=r,e;if((a=k())===e)return N=r,e;if(f()===e)return N=r,e;var s;return s=a,{type:"alt",selector:o.trim(),rules:s}},T=()=>{n="macro";let r=N,o=null,a=null;if((o=(()=>{const r=N,o=N;for(;b()!==e;);return N-o==0?e:t.slice(r,N)})())===e)return N=r,e;const s=(()=>{const t=N;let r=null,o=null,a=null;return (r=i())===e||(o=P())===e||(a=I())===e?(N=t,e):[r,o,a]})();if(a=s===e?null:s,c()===e)return N=r,e;return ((e,t)=>({type:"macro",name:e,value:t?.[2]}))(o,a)},I=()=>{let t=null;return (t=V())!==e||(t=j())!==e?t:e},V=()=>{n="macroValue$0";let t=null;const r=[];let o=null;for(;(o=y())!==e;)r.push(o);if(0===r.length)return e;t=r;return (e=>{const t=e.map((e=>e[1].trim()));return t.arg=t.join(" "),t})(t)},j=()=>{n="macroValue$1";let r=N,o=null;if((o=(()=>{const r=N,o=N;for(;l()!==e;);return N-o==0?e:t.slice(r,N)})())===e)return N=r,e;return (e=>{const t=[e.trim()];return t.arg=e,t})(o)},P=()=>{for(n="_";v()!==e;);};let N=0;const H=(()=>{n="$";let t=N,r=null;if((r=k())===e)return N=t,e;return r})();return N!==t.length?(console.log("last",n),console.log("@",N),console.log(t.slice(N-10,N+10)),new Error("End of input not found")):H},r=document.createElement("style");r.setAttribute("data-name","windstorm-generated"),r.innerHTML="@layer ws.custom ws.macro ws.user;",document.head.append(r);const o=(e,...r)=>{const o=String.raw(e,...r);return a(t(o),{"&":[]},"&")},a=(e,t,r)=>{for(const o of e)s(o,t,r);return t},n=e=>e.replace(/@([a-zA-Z0-9\-_]+)/g,((e,t)=>`var(--${t})`)),s=(e,t,r)=>{if("var"===e.type)return void t[r].push(`--${e.name}: ${n(e.value)};`);if("css"===e.type)return void t[r].push(`${e.name}: ${n(e.value)};`);if("macro"===e.type){const o=i[e.name];if(void 0===o)return void console.warn(`no macro for "${e.name}"`);for(const[a,s]of Object.entries(o)){const o=a.replace("&",r);t[o]=t[o]??[],t[o].push(...s.map((t=>n(t.replace(/%(arg|\d+)/g,((t,r)=>e.value?.[r]??""))))));}return}const o=e.selector.replaceAll("&",r);t[o]=[...t[o]??[]],a(e.rules,t,o);},i={},l=e=>(t,...r)=>i[e]=o(t,...r),c=e=>Object.entries(e).reduce(((e,[t,r])=>{if(true===t.startsWith("|")){const o=t.lastIndexOf("|"),a=[`@media (${t.slice(1,o)}) {`,`${`&${t.slice(o+1)}`} {`,...r,"}","}"].join("\n");return e.push(a),e}return e.push(`${t} {\n${r.join("\n")}\n}`),e}),[]),d=(e,t="ws.custom")=>(a,...n)=>{const s=o(a,...n),i=c(s).map((t=>t.replaceAll("&",e))),l=`@layer ${t} { ${i.join("\n")} }`;r.sheet.insertRule(l);};const p={origin:"https://wind-cdn.axel669.net",...window.wsConfig,version:"1.0.0-beta.1",iconVersion:"3.34.0"},h={},u=async(e,t)=>{const r=h[t],o=`ws-icon-${t}`;if(void 0!==r){if(await r.loaded,"loaded"!==r.status||null===e)return;return void e.style.setProperty("--icon-font",o)}const a=new FontFace(o,`url(${p.origin}/icon/${t}.woff?v${p.iconVersion})`);h[t]=a;try{await a.load();}catch(e){console.error(e);}document.fonts.add(a),u(e,t);},g=e=>{if(void 0===e.tagName)return;const t=e.dataset.icon??null;null!==t&&u(e,t);},f={childList(e){0!==e.addedNodes.length&&e.addedNodes.forEach((e=>{if(void 0===e.tagName)return;[e,...e.querySelectorAll("*")].forEach(g);}));},attributes(e){g(e.target);}};new MutationObserver((e=>e.forEach((e=>f[e.type](e))))).observe(document.body,{subtree:true,attributes:true,childList:true,attributeFilter:["data-icon"]});const b=(...e)=>{for(const t of e)u(null,t);};l("appr")`*apperance: %arg; *-webkit-appearance: %arg;`,l("area")`*grid-area: %arg;`,l("b")`*border: %arg;`,l("b.b")`*border-bottom: %arg;`,l("b.b.c")`*border-bottom-color: %arg;`,l("b.b.s")`*border-bottom-style: %arg;`,l("b.b.w")`*border-bottom-width: %arg;`,l("b.c")`*border-color: %arg;`,l("b.l")`*border-left: %arg;`,l("b.l.c")`*border-left-color: %arg;`,l("b.l.s")`*border-left-style: %arg;`,l("b.l.w")`*border-left-width: %arg;`,l("b.r")`*border-right: %arg;`,l("b.r.c")`*border-right-color: %arg;`,l("b.r.s")`*border-right-style: %arg;`,l("b.r.w")`*border-right-width: %arg;`,l("b.s")`*border-style: %arg;`,l("b.t")`*border-top: %arg;`,l("b.t.c")`*border-top-color: %arg;`,l("b.t.s")`*border-top-style: %arg;`,l("b.t.w")`*border-top-width: %arg;`,l("b.w")`*border-width: %arg;`,l("b.x")`*border-left: %arg; *border-right: %arg;`,l("b.x.c")`*border-left-color: %arg; *border-right-color: %arg;`,l("b.x.s")`*border-left-style: %arg; *border-right-style: %arg;`,l("b.x.w")`*border-left-width: %arg; *border-right-width: %arg;`,l("b.y")`*border-top: %arg; *border-bottom: %arg;`,l("b.y.c")`*border-top-color: %arg; *border-bottom-color: %arg;`,l("b.y.s")`*border-top-style: %arg; *border-bottom-style: %arg;`,l("b.y.w")`*border-top-width: %arg; *border-bottom-width: %arg;`,l("bg")`*background: %arg;`,l("bg.att")`*background-attachment: %arg;`,l("bg.c")`*background-color: %arg;`,l("bg.img")`*background-image: %arg;`,l("bg.pos")`*background-position: %arg;`,l("bg.rep")`*background-repeat: %arg;`,l("bg.sz")`*background-size: %arg;`,l("c")`*color: %arg;`,l("col")`*grid-column: %arg;`,l("cur")`*cursor: %arg;`,l("disp")`*display: %arg;`,l("fl.basis")`*flex-basis: %arg;`,l("fl.cross")`*align-items: %arg;`,l("fl.dir")`*flex-direction: %arg;`,l("fl.flow")`*flex-flow: %arg;`,l("fl.grow")`*flex-grow: %arg;`,l("fl.main")`*justify-content: %arg;`,l("fl.shrink")`*flex-shrink: %arg;`,l("fl.size")`*flex: %arg;`,l("fl.wr")`*flex-wrap: %arg;`,l("font")`*font-family: %arg;`,l("gap")`*gap: %arg;`,l("gap.col")`*column-gap: %arg;`,l("gap.row")`*row-gap: %arg;`,l("gr.areas")`*grid-template-areas: %arg;`,l("gr.cols")`*grid-template-columns: %arg;`,l("gr.cols.a")`*grid-auto-columns: %arg;`,l("gr.flow")`*grid-auto-flow: %arg;`,l("gr.rows")`*grid-template-rows: %arg;`,l("gr.rows.a")`*grid-auto-rows: %arg;`,l("h")`*height: %arg;`,l("h.max")`*max-height: %arg;`,l("h.min")`*min-height: %arg;`,l("inset")`*top: %arg; *left: %arg; *bottom: %arg; *right: %arg;`,l("inset.x")`*left: %arg; *right: %arg;`,l("inset.y")`*top: %arg; *bottom: %arg;`,l("m")`*margin: %arg;`,l("m.b")`*margin-bottom: %arg;`,l("m.l")`*margin-left: %arg;`,l("m.r")`*margin-right: %arg;`,l("m.t")`*margin-top: %arg;`,l("m.x")`*margin-left: %arg; *margin-right: %arg;`,l("m.y")`*margin-bottom: %arg; *margin-top: %arg;`,l("o")`*opacity: %arg;`,l("outln")`*outline: %arg;`,l("over")`*overflow: %arg;`,l("over.x")`*overflow-x: %arg;`,l("over.y")`*overflow-y: %arg;`,l("p")`*padding: %arg;`,l("p.b")`*padding-bottom: %arg;`,l("p.l")`*padding-left: %arg;`,l("p.r")`*padding-right: %arg;`,l("p.t")`*padding-top: %arg;`,l("p.x")`*padding-left: %arg; *padding-right: %arg;`,l("p.y")`*padding-top: %arg; *padding-bottom: %arg;`,l("pos")`*position: %arg;`,l("pos.abs")`*position: absolute;`,l("pos.fix")`*position: fixed;`,l("pos.rel")`*position: relative;`,l("pos.stick")`*position: sticky;`,l("r")`*border-radius: %arg;`,l("r.b")`*border-bottom-left-radius: %arg; *border-bottom-right-radius: %arg;`,l("r.bl")`*border-bottom-left-radius: %arg;`,l("r.br")`*border-bottom-right-radius: %arg;`,l("r.l")`*border-top-left-radius: %arg; *border-bottom-left-radius: %arg;`,l("r.r")`*border-top-right-radius: %arg; *border-bottom-right-radius: %arg;`,l("r.t")`*border-top-left-radius: %arg; *border-top-right-radius: %arg;`,l("r.tl")`*border-top-left-radius: %arg;`,l("r.tr")`*border-top-right-radius: %arg;`,l("row")`*grid-row: %arg;`,l("sel")`*user-select: %arg;`,l("self.cross")`*align-self: %arg;`,l("self.main")`*justify-self: %arg;`,l("sh.box")`*box-shadow: %arg;`,l("sh.text")`*text-shadow: %arg;`,l("t.a")`*text-align: %arg;`,l("t.br")`*word-break: %arg;`,l("t.c")`*color: %arg;`,l("t.deco")`*text-decoration: %arg;`,l("t.lh")`*line-height: %arg;`,l("t.over")`*text-overflow: %arg;`,l("t.st")`*font-style: %arg;`,l("t.sz")`*font-size: %arg;`,l("t.tf")`*text-transform: %arg;`,l("t.var")`*font-variant: %arg;`,l("t.wrap")`*word-wrap: %arg;`,l("t.ws")`*white-space: %arg;`,l("t.wt")`*font-weight: %arg;`,l("tf")`*transform: %arg;`,l("tf.o")`*transform-origin: %arg;`,l("tf.p")`*perspective: %arg;`,l("tr")`*transition: %arg;`,l("v.a")`*vertical-align: %arg;`,l("vis")`*visibility: %arg;`,l("w")`*width: %arg;`,l("w.max")`*max-width: %arg;`,l("w.min")`*min-width: %arg;`,l("x")`*left: %arg;`,l("-x")`*right: %arg;`,l("y")`*top: %arg;`,l("-y")`*bottom: %arg;`,l("z")`*z-index: %arg;`,l("fl.cn")`fl.cross: center; fl.main: center;`,l("fl.cn.cross")`fl.cross: center;`,l("fl.cn.main")`fl.main: center;`,l("flex")`disp: flex; fl.dir: %arg;`,l("grid")`disp: grid; gr.flow: %arg;`,l("hide")`disp: none;`,l("invis")`vis: hidden;`,l("sticky")`pos: sticky; y: 0px; z: +1;`,l("adorn")`disp: flex; fl.cn; p: 4px;`,l("pad.compact")`p: 0px 4px;`,l("variant.outline")`b.w: 1px;`,l("variant.fill")`@text-color: @alt-color; @fill-color: @core-color; @active: @alt-color;`,l("variant.lined")`b.w: 0px; b.b.w: @border-size; r.b: 0px;`,l("gr.cols-fit")`*grid-template-columns: repeat(auto-fit, minmax(%arg));`,l("gr.cols-fill")`*grid-template-columns: repeat(auto-fill, minmax(%arg));`,l("text.subtitle")`t.sz: @text-size-subtitle; flex; fl.main: center; p: 0px 8px;`,l("text.title")`t.sz: @text-size-title; flex; fl.main: center; p: 4px 8px;`,l("elevate")`sh.box: 0px 2px 3px @shadow-color;`,l("#animate")`
    @modal-transition: visibility @anim-time linear;
    ! & ws-dialog {
        o: 0;
        tr: opacity @anim-time ease;
    }
    ! & ws-modal[open] > ws-dialog {
        o: 1;
    }

    ! & ws-drawer {
        tf: translateX(-100%);
        tr: transform @anim-time ease;
    }
    ! & ws-modal[open] > ws-drawer {
        tf: translateX(0%);
    }
`;const m=e=>{let t=5381;for(let r=0;r<e.length;r+=1)t=33*t^e.charCodeAt(r);return t.toString(36)},x={},k=Math.ceil(screen.height*devicePixelRatio*10)%10>=5;l("#theme.base")`
    font: @font;

    @sub-pixel-offset: ${k?1:0}px;
    @z-info: 5;
    @z-cover: 25;
    @z-notif: 50;
    @z-layer: 100;

    @base-radius: 4px;
    @anim-time: 250ms;
    @short-anim-time: 150ms;

    @text-size-normal: 15px;
    @text-size-title: calc(@text-size-normal * 2);
    @text-size-header: calc(@text-size-normal * 1.5);
    @text-size-subtitle: calc(@text-size-normal * 0.9);
    @text-size-info: calc(@text-size-normal * 0.75);

    @color: @mono;

    @page-text-color: hsl(@color, @layer-text);
    bg.c: hsl(@color, @layer-bg);
    t.c: @page-text-color;
    t.sz: @text-size-normal;
`,l("#theme.tron")`
    #theme.base;

    @font: Tektur;

    @mono: 0, 0%;
    @primary: 184, 80%;
    @accent: 160, 80%;
    @info: 208, 80%;
    @success: 130, 80%;
    @warning: 58, 80%;
    @error: 4, 80%;

    @layer-bg: 10%;
    @layer-surface: 5%;
    @layer-element: 65%;
    @layer-container: 10%;
    @layer-border: 25%;
    @layer-text: 95%;
    @layer-fill: 5%;

    @shadow-color: hsla(0, 0%, 100%, 0.25);
    @modal-color: hsla(0, 0%, 0%, 0.25);

    *color-scheme: dark;
`,l("#theme.dark")`
    #theme.base;
    @font: Roboto;

    @mono: 0, 0%;
    @primary: 184, 80%;
    @accent: 160, 80%;
    @info: 208, 80%;
    @success: 130, 80%;
    @warning: 58, 80%;
    @error: 4, 80%;

    @layer-bg: 20%;
    @layer-surface: 10%;
    @layer-element: 50%;
    @layer-container: 15%;
    @layer-border: 30%;
    @layer-text: 90%;
    @layer-fill: 10%;

    @shadow-color: hsla(0, 0%, 100%, 0.25);
    @modal-color: hsla(0, 0%, 0%, 0.25);

    *color-scheme: dark;
`,l("#theme.light")`
    #theme.base;
    @font: Roboto;

    @mono: 0, 0%;
    @primary: 184, 70%;
    @accent: 160, 85%;
    @info: 208, 85%;
    @success: 130, 90%;
    @warning: 58, 85%;
    @error: 4, 80%;

    @layer-bg: 85%;
    @layer-surface: 95%;
    @layer-element: 37.5%;
    @layer-container: 90%;
    @layer-border: 80%;
    @layer-text: 10%;
    @layer-fill: 95%;

    @shadow-color: hsla(0, 0%, 20%, 0.25);
    @modal-color: hsla(0, 0%, 0%, 0.25);
`;var z=(e,...t)=>{const r=String.raw(e,...t),o=document.createElement("template");return o.innerHTML=r,()=>o.content.cloneNode(true)};d("ws-circle-spinner, ws-hexagon-spinner")`
    @size: 100px;

    w: @size;
    h: @size;
    disp: inline-block;
`;const $=z`
<style>
    :host {
        --color: var(--primary);
        --core-color: hsl(var(--color), var(--layer-element));
        --alt-color: hsl(var(--color), var(--layer-border));
        --size: 200px;
    }
    svg {
        width: var(--size);
        height: var(--size);
    }
    @keyframes turn {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    circle {
        animation-name: turn;
        animation-duration: calc(1000ms * var(--n));
        animation-iteration-count: infinite;
        animation-timing-function: ease;
        stroke: var(--c);
        stroke-width: 6;
        fill: none;
        animation-direction: var(--anim);
    }
</style>
<svg viewbox="-50 -50 100 100">
    <circle style="--c: var(--core-color);--o: 1; --anim: forward; --n: 2.5;" cx=0 cy=0 r=45 stroke-dasharray="45 45"></circle>
    <circle style="--c: var(--alt-color);--o: 0.5; --anim: reverse; --n: 2;" cx=0 cy=0 r=35 stroke-dasharray="35 35"></circle>
    <circle style="--c: var(--core-color);--o: 0.75; --anim: forward; --n: 3.5;" cx=0 cy=0 r=25 stroke-dasharray="25 25"></circle>
</svg>
`;customElements.define("ws-circle-spinner",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"closed"}).appendChild($());}});const A=z`
<style>
    :host {
        --color: var(--primary);
        --core-color: hsl(var(--color), var(--layer-element));
        --alt-color: hsl(var(--color), var(--layer-border));
        --size: 200px;
    }
    svg {
        width: var(--size);
        height: var(--size);
    }
    circle {
        stroke-width: 0;
        fill: var(--c);
        offset-path: path("M 0 -45 L 39 -22.5 L 39 22.5 L 0 45 L -39 22.5 L -39 -22.5 L 0 -45");
        animation-name: mover;
        animation-duration: 3000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    @keyframes mover {
        0% {
            offset-distance: 0%;
        }
        100% {
            offset-distance: 100%;
        }
    }
    @keyframes trail {
        0% {
            stroke-dashoffset: 0;
        }
        100% {
            stroke-dashoffset: var(--len);
        }
    }
    path {
        animation-name: trail;
        animation-duration: 3000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        stroke: var(--c);
        stroke-width: 6;
        fill: none;
        animation-direction: var(--anim);
    }
</style>
<svg viewbox="-50 -50 100 100">
    <path
        d="M 0 -36 L 31 -18 L 31 18 L 0 36 L -31 18 L -31 -18 L 0 -36 Z"
        style="--c: var(--alt-color); --len: 216;"
        stroke-dasharray="36 36"
    />
    <path
        d="M 0 -22.5 L 19.5 -11.25 L 19.5 11.25 L 0 22.5 L -19.5 11.25 L -19.5 -11.25 L 0 -22.5 Z"
        style="--c: var(--core-color); --anim: reverse; --len: 135;"
        stroke-dasharray="22.5 22.5"
    />
    <circle r="3" style="--c: var(--core-color); animation-delay: -250ms;"/>
    <circle r="3" style="--c: var(--core-color); animation-delay: -1250ms;" />
    <circle r="3" style="--c: var(--core-color); animation-delay: -2250ms;" />
</svg>
`;customElements.define("ws-hexagon-spinner",class extends HTMLElement{constructor(){super();this.attachShadow({mode:"closed"}).appendChild(A());}});var L=(e,t)=>`\n    @core: ${e};\n    @alt: ${t};\n    @core-color: hsl(@color, @core);\n    @alt-color: hsl(@color, @alt);\n\n    @fill: var(--fill-color, transparent);\n    @text: var(--text-color, @core-color);\n    @active: @text;\n`;d("ws-avatar")`
    @color: @mono;
    @size: 36px;

    ${L("@layer-element","@layer-fill")}

    disp: inline-flex;
    over: hidden;
    r: 500px;
    fl.cross: center;
    fl.main: center;
    w: @size;
    h: @size;
    bg.c: @fill;
    t.c: @text;
    v.a: text-bottom;

    ! & > img {
        w: 100%;
    }
    ! & > object {
        w: 100%;
        h: 100%;
        disp: flex;
        fl.cross: center;
        fl.main: center;
    }
`,d("ws-badge")`
    @color: @primary;

    ${L("@layer-element","@layer-fill")}

    pos: relative;
    disp: inline-grid;
    over: visible;

    ! &::after {
        pos: absolute;
        *content: attr(ws-text);
        -x: -10px;
        y: 0px;
        tf: translateY(-50%);
        bg.c: @core-color;
        *pointer-events: none;
        r: 20px;
        p: 4px;
        w.min: 20px;
        h: 20px;
        *box-sizing: border-box;
        t.a: center;
        t.sz: @text-size-subtitle;
        t.c: @alt-color;
        t.lh: 14px;
        z: @z-info;
        t.wt: 600;
    }
`;var E='\n    over: hidden;\n    pos: relative;\n    cur: pointer;\n\n    ! &::after {\n        *content: "";\n        pos: absolute;\n        y: 0px;\n        x: 0px;\n        -y: 0px;\n        -x: 0px;\n        *pointer-events: none;\n        o: 0;\n        bg.c: @active;\n        tr: opacity @anim-time linear;\n    }\n    ! &:where(:not(:disabled)):active::after {\n        tr: none;\n        o: 0.3;\n    }\n',S='\n    over: hidden;\n    pos: relative;\n\n    ! |pointer: fine| {\n        ! &::before {\n            *content: "";\n            pos: absolute;\n            y: 0px;\n            x: 0px;\n            -y: 0px;\n            -x: 0px;\n            *pointer-events: none;\n            o: 0;\n            bg.c: @active;\n        }\n        ! &:where(:not(:disabled)):hover::before {\n            tr: none;\n            o: 0.1;\n        }\n    }\n';d(":where(button[data-ws], a[data-ws][button], label[data-ws][button])")`
    @color: @primary;

    ${L("@layer-element","@layer-fill")}

    pos: relative;

    b: 0px solid @core-color;
    font: @font;

    t.c: @text;
    bg.c: @fill;
    r: @base-radius;
    cur: pointer;
    p: 8px 16px;
    over: hidden;
    *user-select: none;
    disp: inline-flex;
    fl.cross: center;
    fl.main: center;
    t.deco: none;
    t.wt: 500;

    ! &:disabled {
        cur: default;
        *filter: saturate(30%) brightness(0.7);
    }

    ${S}
    ${E}
`,d("ws-chip")`
    @color: @mono;

    ${L("@layer-element","@layer-fill")}

    disp: inline-flex;
    fl.cross: center;
    fl.main: center;
    r: 100px;
    p: 4px 12px;
    *user-select: none;
    v.a: text-bottom;
    t.c: @text-color;
    bg: @fill-color;
    b: 1px solid @core-color;

    ! &[clickable] {
        cur: pointer;
        ${E}
    }
`,d("label[control][data-ws]")`
    @color: @primary;
    @active: @mono;

    pos: relative;
    disp: inline-grid;
    gr.areas: "label label label" "start control end" "extra extra extra";
    gr.rows: minmax(0px, min-content) auto minmax(0px, min-content);
    gr.cols: minmax(0px, min-content) auto minmax(0px, min-content);
    *user-select: none;
    over: hidden;
    b: 0px solid hsl(@color, @layer-border);
    bg.c: hsl(@active, @layer-container);
    r: @base-radius;

    ! &:focus-within {
        @active: @color;
    }

    ! &:has(:not(button):disabled) {
        *filter: saturate(50%) brightness(0.7);
    }

    ! & > :is(input, select, ws-select, textarea) {
        area: control;
        b.w: 0px;
        @color: inherit;
        ! &:focus {
            outln: none;
        }
    }

    ! & > :where(input, textarea) {
        t.c: hsl(@mono, @layer-text);
        font: @font;
        h.min: 28px;
        w: 100%;
        h: 100%;
        p: 4px;
        bg.c: transparent;
        w.min: 16px;
    }

    ! & > :where(input[type="file"]) {
        pos: relative;
        p: 0px;

        ! &::file-selector-button {
            font: @font;
            h: 100%;
            m: 0px;
            m.r: 4px;
            p: 4px;
            t.c: hsl(@color, @layer-element);
            bg.c: transparent;
            b.w: 0px;
            t.deco: underline;
        }
    }

    ! & > [label-text] {
        area: label;
        p: 4px;
        disp: flex;
        fl.dir: column;
        fl.cross: start;
        t.c: hsl(@color, @layer-element);
        t.ws: nowrap;
        t.sz: @text-size-normal;
    }
`,b("caret-right-filled"),d(":where(details[data-ws])")`
    @color: @primary;
    @padding: 8px;

    ${L("@layer-element","@layer-fill")}

    b: 0px solid @core-color;
    p: 0px @padding;
    r: 4px;
    over: hidden;

    ! &:open {
        p.b: @padding;
    }

    ! & > summary {
        t.c: @core-color;
        pos: relative;
        p: 4px;
        p.l: 24px;
        m.x: calc(-1 * @padding);
        cur: pointer;
        *user-select: none;

        ! &::before {
            pos: absolute;
            x: 0px;
            y: 50%;
            -y: 0px;
            w: 1em;
            disp: flex;
            fl.cross: center;
            fl.main: center;
            font: ws-icon-caret-right-filled;
            *speak: none;
            t.st: normal;
            t.wt: 400;
            t.var: normal;
            t.tf: none;
            *content: "caret-right-filled";
            tf: translateY(-50%);
            tr: transform 100ms linear;
            w: 24px;
            h: 24px;
            t.lh: 24px;
            t.sz: 18px;
        }

        ! &::marker, &::-webkit-details-marker {
            *content: "";
            disp: none;
        }
    }
    ! &:open > summary::before {
        tf: translateY(-50%) rotate(90deg);
    }
`,d("ws-dialog")`
    pos: absolute;
    x: 50%;
    y: 50%;
    tf: translate(-50%, -50%);
`,d("ws-drawer")`
    pos: absolute;
    x: 0px;
    y: 0px;
    -y: 0px;
    disp: grid;
`,d("ws-flex")`
    flex: column;
    gap: 8px;
    p: 4px;
    over: hidden;

    ! & > * {
        fl.shrink: 0;
    }
`,d("ws-grid")`
    disp: grid;
    over: hidden;
    gap: 8px;
    p: 4px;
    gr.rows.a: min-content;
`,d("ws-icon")`
    disp: var(--icon-font, none);
    t.lh: 1;
    ! &::before {
        disp: inline-block;
        font: @icon-font;
        *-webkit-font-smoothing: antialiased;
        *-moz-osx-font-smoothing: grayscale;
        *content: attr(data-icon);
        m.t: 2px;
    }
`,d("a[data-ws]:not([button])")`
    @color: @primary;

    t.c: hsl(@color, @layer-element);

    ! &:visited, &:hover {
        t.c: hsl(@color, @layer-element);
    }

    ! &[disabled] {
        *pointer-events: none;
        *filter: saturation(30%) brightness(0.7);
    }
`;const q=z`
<style>
    :host {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        background-color: var(--modal-color);
        z-index: var(--z-cover);
        transition: var(--modal-transition, none);
    }
    ws-modal-overlay {
        position: absolute;
        inset: 0px;
    }
    ws-modal-overlay:focus {
        outline: none;
    }
    :host(:not([open])) {
        visibility: hidden;
    }
    :host([clear]) {
        background-color: transparent;
    }
</style>

<ws-modal-overlay>
</ws-modal-overlay>
<slot></slot>
`;customElements.define("ws-modal",class extends HTMLElement{#e=null;constructor(){super(),this.#e=this.attachShadow({mode:"closed",delegatesFocus:true}),this.#e.append(q());}connectedCallback(){window.addEventListener("keydown",(e=>{ true!==(false===this.open||"Escape"!==e.key||true===this.persistent)&&(this.hide(),this.dispatchEvent(new Event("close")));}));this.#e.querySelector("ws-modal-overlay").addEventListener("click",(e=>{ true!==this.persistent&&(this.hide(),this.dispatchEvent(new Event("close")));}));}get open(){return this.hasAttribute("open")}set open(e){ false!==e?this.setAttribute("open",""):this.removeAttribute("open");}get persistent(){return this.hasAttribute("persistent")}set persistent(e){ false!==e?this.setAttribute("persistent",""):this.removeAttribute("persistent");}show(){this.open=true;}hide(){this.open=false;}}),d("ws-paper")`
    @color: @mono;

    ${L("@layer-surface","@layer-border")}

    disp: grid;
    r: @base-radius;
    over: hidden;
    gr.cols: 1fr;
    gr.rows: min-content auto min-content;
    gr.areas: "header" "content" "footer";
    bg.c: @core-color;
    b.c: @alt-color;

    ! & > :where(*) {
        area: content;
    }

    ! &::before {
        *content: "";
        area: header;
    }
    ! &::after {
        *content: "";
        area: footer;
    }
`;const M=z`
<slot></slot>

<ws-modal>
    <ws-popover-position>
        <slot name="popover"></slot>
    </ws-popover-position>
</ws-modal>
`;customElements.define("ws-popover",class extends HTMLElement{static observedAttributes=["open","persistent"];#e=null;#t=null;constructor(){super(),this.#e=this.attachShadow({mode:"closed",delegatesFocus:true}),this.#e.append(M()),this.#t=this.#e.querySelector("ws-modal");}connectedCallback(){this.#t.addEventListener("close",(()=>{this.hide(),this.dispatchEvent(new Event("close"));})),false!==this.open&&(this.#t.open=this.open,this.setVars());}attributeChangedCallback(e,t,r){null!==r?(this.#t[e]=true,"open"===e&&this.setVars()):this.#t[e]=false;}setVars(){const e=(this.sizeTarget??this).getBoundingClientRect();this.style.setProperty("--x",`${e.x}px`),this.style.setProperty("--y",`${e.y}px`),this.style.setProperty("--w",`${e.width}px`),this.style.setProperty("--h",`${e.height}px`);}get open(){return this.hasAttribute("open")}set open(e){this.#t.open=e,false!==e?this.setAttribute("open",""):this.removeAttribute("open");}get persistent(){return this.hasAttribute("persistent")}set persistent(e){this.#t.persistent=e,false!==e?this.setAttribute("persistent",""):this.removeAttribute("persistent");}show(){this.open=true,this.focus();}hide(){this.open=false;}});const C=z`
<style>
@keyframes busy-load {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(400%);
    }
}
:host {
    display: block;
    height: 8px;
    border-radius: var(--base-radius);
    background-color: hsl(var(--mono), var(--layer-border));
    position: relative;
    overflow: hidden;
    --color: var(--mono);
}
div::before, div::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    --range: calc(var(--max, 1) - var(--min, 0));
    --bar-width: calc(100% * var(--value, 0) / var(--range));
    --buffer-width: calc(100% * var(--buffer, 0) / var(--range));
}
div::before {
    background-color: hsl(var(--color), var(--layer-element));
}
div::after {
    opacity: 0.3;
    background-color: hsl(var(--color), var(--layer-element));
}
:host(:not([busy])) div::before {
    width: var(--bar-width);
}
:host(:not([busy])) div::after {
    width: var(--buffer-width);
}
:host([busy]) div::before {
    width: 25%;
    animation-name: busy-load;
    animation-iteration-count: infinite;
    animation-duration: 2s;
}
</style>

<div></div>
`;customElements.define("ws-progress",class extends HTMLElement{static observedAttributes=["min","max","value","buffer"];#r=null;constructor(){super();const e=this.attachShadow({mode:"closed"});e.append(C()),this.#r=e.querySelector("div");}get value(){return parseFloat(this.getAttribute("value")??"0")}get buffer(){return parseFloat(this.getAttribute("buffer")??"0")}get min(){return parseFloat(this.getAttribute("min")??"0")}get max(){return parseFloat(this.getAttribute("max")??"1")}get busy(){return this.hasAttribute("busy")}set value(e){ false===e&&this.removeAttribute("value"),this.setAttribute("value",e?.toString()??"");}set buffer(e){ false===e&&this.removeAttribute("buffer"),this.setAttribute("buffer",e?.toString()??"");}set min(e){ false===e&&this.removeAttribute("min"),this.setAttribute("min",e?.toString()??"");}set max(e){ false===e&&this.removeAttribute("max"),this.setAttribute("max",e?.toString()??"");}set busy(e){ false===e&&this.removeAttribute("busy"),this.setAttribute("busy",e);}#o(e,t){this.#r.style.setProperty(`--${e}`,this.getAttribute(e)||t);}connectedCallback(){this.#o("value","0"),this.#o("buffer","0"),this.#o("min","0"),this.#o("max","1");}attributeChangedCallback(e,t,r){this.#o(e,r);}}),d("ws-screen")`
    @screen-width: min(720px, 100%);
    @pad-x: auto;
    @pad-y: auto;
    @pad-left: var(--pad-x, auto);
    @pad-right: var(--pad-x, auto);
    @pad-top: var(--pad-y, auto);
    @pad-bottom: var(--pad-y, auto);

    disp: grid;
    h: round(down, calc(100% - @sub-pixel-offset), 1px);
    w: calc(100%);
    over: hidden;
    pos: absolute;
    y: 0px;
    x: 0px;
    gr.cols: @pad-left @screen-width @pad-right;
    gr.rows: @pad-top 1fr @pad-bottom;
    gr.areas:
        "tl t tr"
        "l content r"
        "bl b br"
    ;

    ! & > :where(*) {
        area: content;
    }
`;const T="caret-down-filled";b(T),d("ws-option")`
    ${L("@layer-element","@layer-fill")}

    disp: block;
    p: 8px;
    *pointer-events: auto;
    t.c: @text-color-normal;
    w.min: fit-content;

    ! &[selected] {
        bg.c: @core-color;
        t.c: @alt-color;
    }

    ! & * {
        *pointer-events: none;
    }

    ${S}
    ${E}
`,d("ws-optgroup")`
    grid;
    gr.cols: 16px 1fr;
    *pointer-events: none;

    ! &::before {
        *content: attr(label);
        disp: block;
        p: 8px;
        col: 1 / -1;
        bg.c: hsl(@color, @layer-container);
    }

    ! & > * {
        col: 2;
    }
`;const I=z`
<style>
    :host {
        --color: var(--mono);
        --modal-color: transparent;
        --max-height: 250px;
        --core-color: hsl(var(--color), var(--layer-border));
        --alt-color: hsl(var(--color), var(--layer-surface));
        display: inline-grid;
        grid-template-rows: 1fr 0px;
        user-select: none;
        cursor: default;
        position: relative;
        border: 1px solid var(--core-color);
        border-radius: var(--base-radius);
        padding: 4px;
    }

    slot[name=options] {
        display: block;
        overflow: visible;
    }
    ws-options {
        box-sizing: border-box;
        border: 1px solid var(--core-color);
        border-radius: var(--base-radius);
        color: hsl(var(--mono), var(--layer-text));
        display: grid;
        position: absolute;
        max-height: var(--max-height);
        overflow: auto;
        background-color: var(--alt-color);
        grid-template-columns: 1fr;
        border-radius: var(--base-radius);
        box-shadow: 0px 2px 4px var(--shadow-color);
        opacity: 0;
        transform: translateY(10px);
        visibility: none;
        transition:
            opacity var(--anim-time) ease-out,
            transform var(--anim-time) ease-out,
            visibility var(--anim-time) ease-out
        ;

        --sign: sign(var(--y) - 100vh + var(--opt-h));
        --pos: calc(
            var(--y)
            - calc(
                max(var(--sign), 0)* (var(--opt-h) - var(--h))
            )
        );
        top: var(--pos);
        left: var(--x);
        width: var(--w);
        transform-origin: top center;
    }
    :host([open]) ws-options {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }

    value-display {
        display: grid;
        user-select: none;
        grid-template-columns: 1fr min-content;
        height: 100%;
    }
    value-display:focus {
        outline: none;
    }
    ws-sel-caret {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
        padding-right: 0px;
        width: 24px;
    }
    ws-sel-caret::before {
        display: block;
        font-family: ws-icon-${T};
        content: attr(data-icon);
    }
    slot[name="selected"] {
        display: none;
    }
    slot[name="display"] {
        display: flex;
        align-items: center;
    }
    :host(:focus:not(:disabled)) {
        outline-style: auto;
        outline-width: 1px;
    }

    ws-popover {
        --anim-time: unset;
    }

    :host(:disabled) {
        filter: saturate(50%) brightness(0.8);
    }
</style>

<value-display tabindex="0">
    <slot name="selected">
        <ws-selected>No Selection</ws-selected>
    </slot>
    <slot name="display"></slot>
    <ws-sel-caret data-icon="${T}"></ws-sel-caret>
</value-display>
<ws-popover>
    <slot slot="popover" name="options">
        <ws-options>
            <slot></slot>
        </ws-options>
    </slot>
</ws-popover>
`,V="ws-option";customElements.define("ws-select",class extends HTMLElement{static formAssociated=true;#a=null;#n=-1;#s=null;#i=null;#l=null;#c=null;#e=null;#d=null;#p(){return [...this.querySelectorAll(V)]}#h(e){const t=Array.from(e,(e=>[...e.addedNodes])).flat();if(false===t.some((e=>e.tagName?.toLowerCase()===V)))return;const r=t.findLast((e=>e.tagName?.toLowerCase()===V&&true===e.hasAttribute("selected")))??this.#s,o=this.#p();for(const e of o)e.removeAttribute("selected");this.selectedIndex=o.indexOf(r),this.updatePreview();}constructor(){super(),this.#e=this.attachShadow({mode:"closed",delegatesFocus:true}),this.#e.append(I()),this.#c=this.#e.querySelector("slot[name=selected]"),this.#l=this.#e.querySelector("ws-popover"),this.#d=this.#e.querySelector("value-display"),this.#l.sizeTarget=this,this.removeAttribute("open"),this.display=document.createElement("ws-display"),this.display.slot="display";}connectedCallback(){this.insertBefore(this.display,this.firstChild),this.updatePreview(),this.tabIndex=this.getAttribute("tabindex")??"0";const e=new MutationObserver(this.#h.bind(this));e.observe(this,{childList:true,subtree:true}),this.#i=e,this.role="combobox",this.addEventListener("click",(()=>{this.open(),this.#d.focus();}),{passive:true}),this.#l.addEventListener("close",(()=>this.close())),this.#l.addEventListener("pointerdown",(e=>e.preventDefault())),this.#l.addEventListener("click",(e=>{e.stopPropagation(),e.preventDefault();})),this.#e.querySelector("slot[name='options']").addEventListener("pointerdown",(e=>e.preventDefault())),this.#e.querySelector("slot[name='options']").addEventListener("click",(e=>{e.stopPropagation(),e.preventDefault();const t=e.target.tagName?.toLowerCase();"ws-option"===t&&(this.selectedIndex=this.#p().indexOf(e.target),this.close(),this.dispatchEvent(new Event("change",{bubbles:true})),this.dispatchEvent(new Event("input",{bubbles:true})));}));}disconnectedCallback(){this.#i.disconnect();}get value(){return this.#a}set value(e){if(this.#a=e,null===e)return void(this.selectedIndex=-1);const t=this.#p(),r=t.find((t=>t.value===e||t.getAttribute("value")===e));this.selectedIndex=t.indexOf(r);}get selectedIndex(){return this.#n}set selectedIndex(e){this.#s?.removeAttribute("selected");const t=this.#p(),r=Math.min(e,t.length);this.#s=t[r]??null,this.#n=r,this.#s?.setAttribute("selected",""),this.#a=this.#s?.value??this.#s?.getAttribute("value")??this.#a,this.updatePreview();}updatePreview(){const e=this.querySelector("[slot=selected]")??this.#c;this.display.innerHTML=e.innerHTML,this.display.querySelector("ws-selected").innerHTML=this.#s?.getAttribute("preview")??this.#s?.innerHTML??this.getAttribute("blank")??"No Selection";}toggle(){null!==this.getAttribute("open")?this.close():this.open();}open(){this.setAttribute("open","");const e=this.querySelector("ws-options")??this.#e.querySelector("ws-options"),t=e.getBoundingClientRect();e.style.setProperty("--opt-h",`${t.height}px`),e.style.setProperty("--opt-w",`${t.width}px`),this.#l.show(),e.scrollTop=0,this.#s?.scrollIntoView();}close(){this.removeAttribute("open"),this.#l.hide();}__childValueMatch(e){const t=this.#p().indexOf(e);this.selectedIndex=t;}}),d("table[data-ws]")`
    @color: @primary;

    *border-collapse: separate;
    *border-spacing: 0px;

    b.s: solid;
    b.c: hsl(@color, @layer-border);
    b.b.w: 1px;

    ! & th {
        bg.c: hsl(@color, @layer-container);
    }
    ! & :is(th, td:not(:empty)) {
        b.s: solid;
        b.c: hsl(@color, @layer-border);
        b.b.w: 1px;
        p: 4px;
    }
    ! & tbody tr:last-child :is(td, th) {
        b.b.w: 0px;
    }
    ! &[sticky-header] thead {
        pos.stick;
        y: 0px;
        z: +2;
    }
    ! &[sticky-header] th:first-child {
        pos.stick;
        z: +1;
        x: 0px;
        -x: 0px;
    }
`,d("ws-text")`
    ! &[title] {
        t.sz: @text-size-title;
        disp: flex;
        fl.dir: column;
        p: 0px 8px;
        fl.cross: start;
        fl.main: center;
    }
    ! &[header] {
        t.sz: @text-size-header;
        disp: flex;
        fl.dir: column;
        p: 0px 8px;
        fl.cross: start;
        fl.main: center;
    }
    ! &[subtitle] {
        disp: inline-block;
        t.sz: @text-size-subtitle;
        p: 0px 8px;
    }
    ! &[info] {
        disp: inline-block;
        t.sz: @text-size-info;
    }
`,d("ws-tabs")`
    @color: @primary;

    ${L("@layer-element","@layer-fill")}

    disp: grid;
    gr.cols.a: 1fr;
    gr.rows.a: 1fr;
    gr.flow: column;
    *user-select: none;
    gap: 4px;
`,d("label[tab]")`
    @fill: transparent;
    @text: @core-color;
    @active: @core-color;

    bg.c: @fill;
    t.c: @text;

    grid;
    gr.cols: 1fr;
    gr.rows: min-content 2px;
    gr.areas: "content" "border";
    pos: relative;

    ! & > input[type="radio"] {
        hide;
    }

    ! & > :where(*) {
        area: content;
        flex;
        fl.cn;
        p: 8px;
    }

    ! &::before {
        *content: "";
        pos: absolute;
        -y: 0px;
        x: 0px;
        w: 100%;
        h: 2px;
        area: border;
    }

    ! &:has(input[type="radio"]:checked) {
        @fill: var(--fill-color, transparent);
        @text: var(--text-color, @core-color);
        @active: unset;
        ! &::before {
            bg.c: @core-color;
        }
    }

    ${E}
`,d("ws-titlebar")`
    @border-size: 2px;
    @color: @primary;

    ${L("@layer-element","@layer-fill")}

    disp: grid;
    h.min: 52px;
    gr.cols: auto 1fr auto;
    gr.areas: "menu title action";
    *user-select: none;
    pos: relative;
    p: 0px 2px;

    t.c: @text;
    bg.c: @fill;

    b.y: @border-size solid @core-color;

    ! & > :where(*) {
        area: title;
    }
`,d("ws-toast")`
    @color: @primary;

    t.c: @page-text-color;
    bg.c: hsl(@color, @layer-surface);

    pos: relative;
    disp: inline-grid;
    gr.cols: auto 1fr auto;
    gr.areas: "start content end";
    r: @base-radius;
    *user-select: none;
    b: 2px solid hsl(@color, @layer-element);
    h.min: 32px;
    z: +0;

    ! & > :where(*) {
        area: content;
    }
    ! &::before, &::after {
        *content: "";
        w.min: 20px;
        bg.c: hsl(@color, @layer-element);
        z: -1;
    }
    ! &::before {
        area: start;
    }
    ! &::after {
        area: end;
    }

    ! & > [notif-text] {
        disp: flex;
        fl.dir: column;
        fl.main: center;
        p: 4px;
    }

    ! & > :not([notif-text]) {
        t.c: hsl(@mono, @layer-fill);
        @color: inherit;
        variant.fill;
    }
`,d("ws-toaster")`
    pos: fixed;
    z: var(--z-notif);
    disp: grid;
    gr.cols: fr;
    p: 0px;
    gap: 8px;
    h: min-content;
    w: 280px;

    ! &[pos^="top-"] {
        y: 20px;
    }
    ! &[pos^="center-"] {
        y: 50%;
        tf: translateY(-50%);
    }
    ! &[pos^="bottom-"] {
        -y: 20px;
    }

    ! &[pos$="-left"] {
        x: 20px;
    }
    ! &[pos$="-center"] {
        x: 50%;
        tf: translateX(-50%);
    }
    ! &[pos$="-right"] {
        -x: 20px;
    }
`,b("square-dashed","square-check-filled","circle","circle-check-filled","circle-filled");const j='\n    @color: var(--toggle-color, @primary);\n    @size: 20px;\n\n    @core-color: hsl(@color, @layer-element);\n\n    pos: relative;\n    w: @size;\n    h: @size;\n    appr: none;\n    m: 0px;\n    t.c: @core-color;\n    v.a: middle;\n\n    ! &::after {\n        *content: "";\n        pos: absolute;\n        t.sz: calc(@size - 2px);\n        *speak: none;\n        t.st: normal;\n        t.wt: 400;\n        t.var: normal;\n        t.tf: none;\n        y: 50%;\n        x: 50%;\n        w: @size;\n        h: @size;\n        tf: translate(-50%, -50%);\n        disp: flex;\n        fl.cross: center;\n        fl.main: center;\n        over: hidden;\n    }\n';d(":where(input[data-ws][type=checkbox]:not([switch]))")`
    ${j}

    ! &::after {
        font: ws-icon-square-dashed;
        *content: "square-dashed";
    }
    ! &:checked::after {
        font: ws-icon-square-check-filled;
        *content: "square-check-filled";
    }
`,d(":where(input[data-ws][type=radio])")`
    ${j}

    ! &::after {
        font: ws-icon-circle;
        *content: "circle";
    }
    ! &:checked::after {
        font: ws-icon-circle-check-filled;
        *content: "circle-check-filled";
    }
`,d(":where(input[data-ws][type=checkbox][switch])")`
    @color: @primary;
    @size: 20px;
    @anim-time: 100ms;

    appr: none;
    m: 0px;
    pos: relative;
    w: calc(@size * 2);
    h: @size;
    v.a: middle;

    ! &::before {
        *content: "";
        pos: absolute;
        inset: calc(@size / 4);
        b: 1px solid @color;
        r: calc(@size / 2);
        bg.c: hsl(@color, @layer-border);
        o: 0.5;
        tr: background-color @anim-time linear;
    }
    ! &:checked::before {
        bg.c: hsl(@color, @layer-border);
    }

    ! &::after {
        *content: "";
        pos: absolute;
        w: @size;
        h: @size;
        y: 0px;
        x: 0px;
        tr: left @anim-time linear, background-color @anim-time linear;
        bg.c: hsl(@mono, @layer-text);
        r: @size;
    }
    ! &:checked::after {
        x: @size;
        bg.c: hsl(@color, @layer-element);
    }
`,d("label[data-ws][toggle]")`
    @color: @primary;
    @active: @mono;

    pos: relative;
    *user-select: none;
    over: hidden;
    b: 0px solid hsl(@color, @layer-border);
    bg.c: hsl(@active, @layer-container);
    r: @base-radius;
    p: 4px;

    disp: flex;
    fl.main: space-between;

    ! &:focus-within {
        @active: @color;
    }

    ! & > input {
        @color: inherit;
        ! &:focus {
            outln: none;
        }
    }

    ! &:has(:not(button):disabled) {
        *filter: saturate(50%) brightness(0.7);
    }
`,d("ws-tooltip")`
    @color: @mono;

    pos.rel;
    disp: inline-grid;

    ! &[pos]:hover::before {
        *content: attr(text);
        pos.abs;
        p: 4px;
        bg.c: hsl(@color, @layer-container);
        b: 1px solid hsl(@color, @layer-border);
        t.ws: nowrap;
        r: 4px;
        z: +1;
    }

    ! &[pos="top"]:hover::before {
        -y: calc(100% + 8px);
        x: 50%;
        tf: translateX(-50%);
    }
    ! &[pos="bottom"]:hover::before {
        y: calc(100% + 8px);
        x: 50%;
        tf: translateX(-50%);
    }
    ! &[pos="left"]:hover::before {
        -x: calc(100% + 8px);
        y: 50%;
        tf: translateY(-50%);
    }
    ! &[pos="right"]:hover::before {
        x: calc(100% + 8px);
        y: 50%;
        tf: translateY(-50%);
    }
`,d("*")`
    *box-sizing: border-box;
    *-webkit-tap-highlight-color: transparent;
    *border-width: 0px;
    *border-style: solid;
    *outline-color: hsl(@mono, @layer-text);
`,d("html, body")`
    *padding: 0px;
    *margin: 0px;
    *width: 100%;
    *height: 100%;
    *-webkit-tap-highlight-color: transparent;
    *-webkit-font-smoothing: antialiased;
`,d("@font-face",null)`
    *font-family: Tektur;
    *font-display: swap;
    *src:
        url(${p.origin}/font/tektur.woff2?v${p.version})
        format("woff2")
    ;
`,d("@font-face",null)`
    *font-family: Roboto;
    *font-display: swap;
    *src:
        url(${p.origin}/font/roboto.woff2?v${p.version})
        format("woff2")
    ;
`;const P=e=>{const t=(e=>{if(""===e||null===e||"true"===e)return;const t=c(o({raw:[e]})),a=m(t.join("\n"));if(x[a]=(x[a]??0)+1,x[a]>1)return a;const n=t.map((e=>e.replaceAll("&",`[data-wsid="${a}"]`)));return r.sheet.insertRule(`@layer ws.macro { ${n.join("\n")} }`,r.sheet.cssRules.length),a})(e.dataset?.ws?.trim()??"");void 0!==t?e.dataset.wsid=t:delete e.dataset?.wsid;};new MutationObserver((e=>{const t=new Set(Array.from(e,(e=>[e.target,...Array.from(e.addedNodes,(e=>[e,...e.querySelectorAll?.("*")||[]]))])).flat(3));for(const e of t)P(e);})).observe(document.body,{subtree:true,attributes:true,childList:true,attributeFilter:["data-ws"]});for(const e of document.querySelectorAll("*"))P(e);

const nameRand = () =>
    Math.floor(Math.random() * 1679615).toString(36);
const styled = (Base) =>
    (parts, ...values) => {
        const name = `${Date.now().toString(36)}${nameRand()}`;
        l(name)(parts, ...values);
        return (props) => {
            const { ws, ...rest } = props;
            const newWS = `${name}; ${ws ?? ""}`.trim();
            return Element(
                Base,
                { ws: newWS, ...rest }
            )
            // return <Base ws={newWS} {...rest} />
        }
    };

const initial = JSON.stringify({
    list: [],
});
const chars = proxy(
    JSON.parse(
        localStorage.dndHP ?? initial
    )
);

subscribe(
    chars,
    () => localStorage.dndHP = JSON.stringify(
        snapshot(chars)
    )
);

const Button = (props) => {
    const { ws = "", ...rest } = props;
    return Element("button", { ws, ...rest })
};

const ControlLabel = (props) => {
    const {
        ws = "",
        labelWS,
        label,
        children,
        start,
        end,
        extra,
        ...rest
    } = props;

    return Element(
        "label",
        { control: true, ws, ...rest },
        label
            ? [
                  Element(
                      "ws-text",
                      { "label-text": true, ws: labelWS },
                      render(label),
                  ),
              ]
            : [],
        children,
        start
            ? [
                  Element(
                      "ze-input-start",
                      { ws: "area: start; grid;" },
                      render(start),
                  ),
              ]
            : [],
        end
            ? [
                  Element(
                      "ze-input-end",
                      { ws: "area: end; grid;" },
                      render(end),
                  ),
              ]
            : [],
        extra
            ? [
                  Element(
                      "ze-input-extra",
                      { ws: "area: extra; grid;" },
                      render(extra),
                  ),
              ]
            : [],
    )
};

const Grid = (props) =>
    Element("ws-grid", { ...props });

const Paper = (props) => {
    const { children, layoutWS, content, header, footer, ...base } =
        props;

    return Element(
        "ws-paper",
        { ...base },
        header !== undefined
            ? [
                  Element(
                      "div",
                      { ws: "area: header;" },
                      render(header),
                  ),
              ]
            : [],
        content !== undefined
            ? [render(content)]
            : [
                  Element(
                      "ws-flex",
                      { ws: layoutWS },
                      children,
                  ),
              ],
        footer !== undefined
            ? [
                  Element(
                      "div",
                      { ws: "area: footer;" },
                      render(footer),
                  ),
              ]
            : [],
    )
};

const Popover = (props) => {
    const { content, overlay, ws = "", ...rest } = props;

    const local = useLocal({
        popover: null,
    });
    const setref = (node) => (local.popover = ref(node));
    const show = () => local.popover.show();
    const hide = () => local.popover.hide();

    return Element(
        "ws-popover",
        { ws, ...rest, ref: setref },
        render(content, show),
        Element(
            "ze-popover-overlay",
            { slot: "popover" },
            render(overlay, hide),
        ),
    )
};

const Screen = (props) => {
    const {
        paperWS,
        layoutWS,
        children,
        header,
        content,
        footer,
        ...base
    } = props;

    const paperProps = {
        ws: paperWS,
        children,
        layoutWS,
        header,
        content,
        footer,
    };
    return Element(
        "ws-screen",
        { ...base },
        Element(Paper, { ...paperProps }),
    )
};

const Titlebar = (props) => {
    const { ws, children, menu, action, ...rest } = props;

    return Element(
        "ws-titlebar",
        { ws, ...rest },
        menu !== undefined
            ? [
                  Element(
                      "ze-menu",
                      { ws: "grid; p: 0px; area: menu;" },
                      render(menu),
                  ),
              ]
            : [],
        children,
        action !== undefined
            ? [
                  Element(
                      "ze-action",
                      { ws: "grid; p: 0px; area: action;" },
                      render(action),
                  ),
              ]
            : [],
    )
};

const Surface = styled(Paper)`
    #animate;
    variant.outline;
    pos.abs;
    y: calc(@y + 24px);
    inset.x: 24px;
    t.c: @page-text-color;
    elevate;
`;

const NewChar = (props) => {
    useShared(chars.list);

    const local = useLocal({
        name: "",
    });
    const boundName = {
        value: local.name,
        update: (e) => (local.name = e.target.value),
    };
    const add = (hide) => () => {
        chars.list.push({
            id: Date.now().toString(32),
            name: local.name,
            max: 0,
            current: 0,
            success: 0,
            fail: 0,
        });
        close(hide)();
    };
    const close = (hide) => () => {
        local.name = "";
        hide();
    };

    return Element(Popover, {
        ws: "grid;",
        persistent: true,
        content: (show) =>
            Element(
                S$1,
                {},
                Element(
                    Button,
                    { onClick: show },
                    "New",
                ),
            ),
        overlay: (hide) =>
            Element(
                S$1,
                {},
                Element(
                    Surface,
                    {},
                    Element(
                        ControlLabel,
                        { label: "Charcter Name" },
                        Element("input", {
                            type: "text",
                            value: boundName.value,
                            onInput: boundName.update,
                        }),
                    ),
                    Element(
                        Grid,
                        { ws: "gr.cols: 1fr 1fr;" },
                        Element(
                            Button,
                            {
                                onClick: close(hide),
                                ws: "variant.fill; @color: @error;",
                            },
                            "Cancel",
                        ),
                        Element(
                            Button,
                            {
                                onClick: add(hide),
                                ws: "variant.fill; @color: @success;",
                            },
                            "Test",
                        ),
                    ),
                ),
            ),
    })
};

const App = () => {
    const list = useShared(chars.list);
    console.log(JSON.stringify(snapshot(list), null, 2));

    return Element(
        Screen,
        {
            paperWS: "w: 100%; elevate; r: 0px;",
            header: () =>
                Element(
                    S$1,
                    {},
                    Element(
                        Titlebar,
                        {
                            ws: "@color: @primary; variant.fill;",
                            action: () =>
                                Element(
                                    S$1,
                                    {},
                                    Element(NewChar, {}),
                                ),
                        },
                        Element(
                            "ws-text",
                            { title: true, "title-text": true },
                            "D&D HP Tracker",
                        ),
                    ),
                ),
        },
        list.map((char) => Element("div", {}, char.name)),
    )
};

R(Element(App, {}), document.body);
