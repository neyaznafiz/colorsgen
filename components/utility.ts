const componentToHex = (c: number): string => {
  let hex = c.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}

const HexFromRgb = (r: number, g: number, b: number): string => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

export default HexFromRgb
