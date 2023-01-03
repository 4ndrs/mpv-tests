const deepPink = "9314FF"; // 0xFF1493 in reverse order
const borderColor = `{\\3c&${deepPink}&}`;
const fillColor = "{\\1a&FF&}"; // transparent
const borderWidth = "{\\bord6}";
// const position = "{\\pos(0, 0)}";

const box = `{\\p1}m 250 500 l 250 100 400 100 400 500 {\\p0}`;

export const boxData = `${borderColor}${fillColor}${borderWidth}${box}`;
