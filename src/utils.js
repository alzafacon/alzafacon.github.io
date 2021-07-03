
// alpha is angle between diameter and zoom projection line
export const getAlpha = (z, viewportRadius) =>
    Math.atan(z/viewportRadius);

// center offset is distance between viewport center and clock face center
export const getCenterOffset = (z, viewportRadius) =>
    Math.sin(getAlpha(z, viewportRadius)) * viewportRadius;

// half length of clock face chord placed on viewport diameter
export const getHalfChord = (z, viewportRadius) =>
    Math.cos(getAlpha(z, viewportRadius)) * viewportRadius;

// delta x is offset in x direction 
export const getDeltaX = (t, z, viewportRadius) =>
    Math.cos(t) * getCenterOffset(z, viewportRadius);

// delta y is offset in y direction
export const getDeltaY = (t, z, viewportRadius) =>
    Math.sin(t) * getCenterOffset(z, viewportRadius);

// dilation is scaling multiplier
export const getDilation = (z, viewportRadius) => 
    viewportRadius/getHalfChord(z, viewportRadius);

export const deg2rad = (degrees) =>
    degrees * Math.PI / 180;

export const rad2deg = (radians) =>
    radians * 180 / Math.PI