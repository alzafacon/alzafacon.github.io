import React from 'react'
import styles from './DigiLog.module.css';
import ClockFace from '@site/static/img/clock/clockFace.svg'
import HourHand from '@site/static/img/clock/hourHand.svg'
import ClockMask from '@site/static/img/clock/clockMask.svg'
import * as utils from './utils'

function calcTimeRadians(hour, minute) {
    // let pole lay on positive y-axis to start angle calculation
    let time = Math.PI / 2
    // advance hour
    time = time - (hour * Math.PI / 6)
    // advance minute
    time = time - (minute * Math.PI / 360)

    return time
}

// DigiLog = Digital + Analog
export const DigiLog = ({ size = 200, zoom = 0, hour = 0, minute = 0 }) => {
    const radius = size / 2

    const time = calcTimeRadians(hour, minute)

    const clampedZoom = utils.clamp(zoom, 0, utils.ZOOM_RESOLUTION)
    const chordOffset = utils.getChordOffset(clampedZoom, radius)

    // adjustments
    // use zoom to dilate svg
    const scaleFactor = utils.getScaleFactor(chordOffset, radius)

    // use time and zoom to translate face
    const dx = utils.getDeltaX(scaleFactor * chordOffset, time) 
    const dy = utils.getDeltaY(scaleFactor * chordOffset, time) 

    return (
        <div style={{ position: 'relative', width: `${size}px`, height: `${size}px`, overflow: 'hidden', borderRadius: "50%", zIndex: 1, backgroundColor: "white" }}>
            <div id="clockFaceContainer" className={styles.floatCenter} style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(${-dx}px, ${dy}px)`,
                // transition: 'all 0.1s linear',
            }}>
                {/* img will float in center of container for scaling on the center point */}
                <ClockFace
                    id="clockFace"
                    alt="clock face"
                    draggable={false}
                    onDragStart={() => false}
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        transform: `scale(${scaleFactor})`,
                        // transition: 'all 0.1s linear',
                        userSelect: 'none',
                        pointerEvents: 'none',
                    }}
                />
            </div>

            <div id="hourHandContainer" className={styles.floatCenter} style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(${-dx}px, ${dy}px)`,
                // transition: 'all 0.1s linear',
            }}>
                {/* img will float in center of container for scaling on the center point */}
                <HourHand
                    id="hourHand"
                    alt="hour hand"
                    draggable={false}
                    onDragStart={() => false}
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        transform: `scale(${scaleFactor}) rotate(${90 - utils.rad2deg(time).toFixed(1)}deg)`,
                        // transition: 'all 0.1s linear',
                        userSelect: 'none',
                        pointerEvents: 'none',
                    }}
                />
            </div>

            <div className={styles.floatCenter} style={{
                width: `${size}px`,
                height: `${size}px`,
                zIndex: 0,
            }}>
                <ClockMask
                    id="mask"
                    alt="mask"
                    draggable={false}
                    onDragStart={() => false}
                    style={{
                        transform: `scale(3)`,
                        userSelect: 'none',
                        pointerEvents: 'none',
                    }}
                />
            </div>
        </div>
    )
}