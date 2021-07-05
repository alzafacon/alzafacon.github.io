export const ZOOM_RESOLUTION = 100

const getK = (alphaRightBound = Math.PI / 6, resolution = ZOOM_RESOLUTION) =>
    (1 / alphaRightBound - 2 / Math.PI) / resolution

const k = getK()

// alpha is half the zoom segment angle
export const getAlpha = (zoom) =>
    1 / (zoom * k + 2 / Math.PI)

export const getScaleFactor = (alpha) =>
    1 / Math.sin(alpha)

// delta x is offset in x direction 
export const getDeltaX = (R, tau, alpha) =>
    R * Math.cos(tau) * Math.cos(alpha) / Math.sin(alpha)

// delta y is offset in y direction
export const getDeltaY = (R, tau, alpha) =>
    R * Math.sin(tau) * Math.cos(alpha) / Math.sin(alpha)

export const deg2rad = (degrees) =>
    degrees * Math.PI / 180;

export const rad2deg = (radians) =>
    radians * 180 / Math.PI

export const clamp = (n, min, max) => Math.min(Math.max(n, min), max)