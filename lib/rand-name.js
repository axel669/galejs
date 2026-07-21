export const randName = () => {
    const rand = Math.floor(Math.random() * 1679615).toString(36)
    return `${Date.now().toString(36)}${rand}`
}
