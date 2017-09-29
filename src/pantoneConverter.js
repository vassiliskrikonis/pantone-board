import pantones from './pantones.json'
import hexRgb from 'hex-rgb'

const distFrom = (r,g,b) =>
  // squared distance HO function
  (c) => Math.pow(c.R - r, 2) + Math.pow(c.G - g, 2) + Math.pow(c.B - b, 2);

const PantoneConverter = {
  fromHex(hex) {
    const [r,g,b] = hexRgb(hex);
    return this.fromRgb(r,g,b);
  },
  fromRgb(r,g,b) {
    const dist = distFrom(r,g,b);
    pantones.sort( (a,b) => dist(a) - dist(b) );
    return pantones[0];
  }
}

export default PantoneConverter
export {distFrom}
