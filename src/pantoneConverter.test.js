import PantoneConverter from './pantoneConverter'
import {distFrom} from './pantoneConverter'

test('distFrom zero distance', () => {
    let dist = distFrom(0,0,0);
    let c = {
      R: 0,
      G: 0,
      B: 0
    };
    expect(dist(c)).toBe(0);
});

test('distFrom distance with integers', () => {
    let dist = distFrom(1,2,3);
    let c = {
      R: 4,
      G: 5,
      B: 6
    };
    // squared distance should be
    // (4-1)^2 + (5-2)^2 + (6-3)^2
    // = 9 + 9 + 9
    // = 27
    expect(dist(c)).toBe(27);
});

test('distFrom distance with floats', () => {
    let dist = distFrom(1,2,3);
    let c = {
      R: 1.5,
      G: 1.5,
      B: 1.5
    };
    // squared distance should be
    // (1.5-1)^2 + (1.5-2)^2 + (1.5-3)^2
    // = 0.25 + 0.25 + 2.25
    // = 2.75
    expect(dist(c)).toBeCloseTo(2.75);
});

test('if passed an existing Pantone Color it returns it', () => {
  let existingPantone = {
    "PANTONE Coated": "4975 C",
    "HEX": "3F2021",
    "R": 63,
    "G": 32,
    "B": 33
  }
  let {R,G,B} = existingPantone;
  expect(PantoneConverter.fromRgb(R, G, B)).toEqual(existingPantone);
});

test('returns an existing Pantone Color with Hex as well', () => {
  let existingPantone = {
    "PANTONE Coated": "4975 C",
    "HEX": "3F2021",
    "R": 63,
    "G": 32,
    "B": 33
  }
  expect(PantoneConverter.fromHex("3F2021")).toEqual(existingPantone);
});

test('returns the closest Pantone Color', () => {
  let existingPantone = {
    "PANTONE Coated": "4975 C",
    "HEX": "3F2021",
    "R": 63,
    "G": 32,
    "B": 33
  }
  expect(PantoneConverter.fromRgb(64, 32, 33)).toEqual(existingPantone);
});
