const customLog = (message, cssSelector) =>
console.log(
`%c${message}`,
Object.entries(getcomputedStyle(document.querySelector(cssSelector)))
.map(([k, v]) => `${k}:${v}`)
.join(";")
);

customLog("Hello", "strong");
customLog("Hello", "a");
