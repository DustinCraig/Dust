/* TODO: replace this with a rust implementation? */

export interface mat extends Iterable<number> {
  [index: number]: number
}

export interface mat3 extends Iterable<number> {
  [index: number]: number
  0: number
  3: number
  6: number
  1: number
  4: number
  7: number
  2: number
  5: number
  8: number
}

export interface mat4 extends Iterable<number> {
  [index: number]: number
  0: number
  3: number
  6: number
  1: number
  4: number
  7: number
  2: number
  5: number
  8: number
  9: number
  10: number
  11: number
  12: number
  13: number
  14: number
  15: number
}

/* Multiply two mat3 and return the result */
export function mat3Multiply(a: mat3, b: mat3): mat3 {
  const a00: number = a[0 * 3 + 0]
  const a01: number = a[0 * 3 + 1]
  const a02: number = a[0 * 3 + 2]
  const a10: number = a[1 * 3 + 0]
  const a11: number = a[1 * 3 + 1]
  const a12: number = a[1 * 3 + 2]
  const a20: number = a[2 * 3 + 0]
  const a21: number = a[2 * 3 + 1]
  const a22: number = a[2 * 3 + 2]
  const b00: number = b[0 * 3 + 0]
  const b01: number = b[0 * 3 + 1]
  const b02: number = b[0 * 3 + 2]
  const b10: number = b[1 * 3 + 0]
  const b11: number = b[1 * 3 + 1]
  const b12: number = b[1 * 3 + 2]
  const b20: number = b[2 * 3 + 0]
  const b21: number = b[2 * 3 + 1]
  const b22: number = b[2 * 3 + 2]
  const c: mat3 = [
    b00 * a00 + b01 * a10 + b02 * a20,
    b00 * a01 + b01 * a11 + b02 * a21,
    b00 * a02 + b01 * a12 + b02 * a22,
    b10 * a00 + b11 * a10 + b12 * a20,
    b10 * a01 + b11 * a11 + b12 * a21,
    b10 * a02 + b11 * a12 + b12 * a22,
    b20 * a00 + b21 * a10 + b22 * a20,
    b20 * a01 + b21 * a11 + b22 * a21,
    b20 * a02 + b21 * a12 + b22 * a22,
  ]
  return c
}

export function mat4Multiply(a: mat4, b: mat4): mat4 {
  const a00: number = a[0 * 4 + 0]
  const a01: number = a[0 * 4 + 1]
  const a02: number = a[0 * 4 + 2]
  const a03: number = a[0 * 4 + 3]

  const a10: number = a[1 * 4 + 0]
  const a11: number = a[1 * 4 + 1]
  const a12: number = a[1 * 4 + 2]
  const a13: number = a[1 * 4 + 3]

  const a20: number = a[2 * 4 + 0]
  const a21: number = a[2 * 4 + 1]
  const a22: number = a[2 * 4 + 2]
  const a23: number = a[2 * 4 + 3]

  const a30: number = a[3 * 4 + 0]
  const a31: number = a[3 * 4 + 1]
  const a32: number = a[3 * 4 + 2]
  const a33: number = a[3 * 4 + 3]

  const b00: number = b[0 * 4 + 0]
  const b01: number = b[0 * 4 + 1]
  const b02: number = b[0 * 4 + 2]
  const b03: number = b[0 * 4 + 3]

  const b10: number = b[1 * 4 + 0]
  const b11: number = b[1 * 4 + 1]
  const b12: number = b[1 * 4 + 2]
  const b13: number = b[1 * 4 + 3]

  const b20: number = b[2 * 4 + 0]
  const b21: number = b[2 * 4 + 1]
  const b22: number = b[2 * 4 + 2]
  const b23: number = b[2 * 4 + 3]

  const b30: number = b[3 * 4 + 0]
  const b31: number = b[3 * 4 + 1]
  const b32: number = b[3 * 4 + 2]
  const b33: number = b[3 * 4 + 3]

  const c: mat4 = [
    b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
    b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
    b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
    b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,

    b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
    b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
    b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
    b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,

    b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
    b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
    b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
    b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,

    b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
    b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
    b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
    b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
  ]

  return c
}
