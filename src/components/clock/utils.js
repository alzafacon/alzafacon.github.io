export const ZOOM_RESOLUTION = 100
const p = 0.93 // max chord offset as percent of view port radius

// f: [0,1] -> [0,p]
const f = (z) => {
    // the docs explain where this comes from
    return p*z / (p*z + 1 - p)
}

// distance between viewport center and chord midpoint
export const getChordOffset = (zoom, radius) => {
    // x: [0, 1]
    const z = zoom / ZOOM_RESOLUTION;
    return radius * f(z)
}

const getChordHalfLength = (chordOffset, radius) =>
    Math.sqrt(radius*radius - chordOffset*chordOffset)

export const getScaleFactor = (chordOffset, radius) =>
    radius / getChordHalfLength(chordOffset, radius)

export const getDeltaX = (chordOffset, tau) =>
    chordOffset * Math.cos(tau)

export const getDeltaY = (chordOffset, tau) =>
    chordOffset * Math.sin(tau)

export const deg2rad = (degrees) =>
    degrees * Math.PI / 180;

export const rad2deg = (radians) =>
    radians * 180 / Math.PI

export const clamp = (n, min, max) =>
    Math.min(Math.max(n, min), max)
