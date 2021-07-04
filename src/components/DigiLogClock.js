import clockFace from '../clockFace.svg'
import hourHand from '../hourHand.svg'
import clockMask from '../clockMask.svg'
import * as utils from '../utils'

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

    const time = calcTimeRadians(hour, minute)

    const radius = size / 2

    // adjustments
    // use zoom to dilate svg
    const scaleFactor = utils.getDilation(zoom, radius)

    // use time and zoom to translate face
    const dx = utils.getDeltaX(time, zoom, radius) * utils.getDilation(zoom, radius)
    const dy = utils.getDeltaY(time, zoom, radius) * utils.getDilation(zoom, radius)

    return (
        <div style={{ position: 'relative', width: `${size}px`, height: `${size}px`, overflow: 'hidden', borderRadius: "50%", zIndex: 1 }}>
            <div id="clockFaceContainer" className="floatCenter" style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(${-dx}px, ${dy}px)`,
                transition: 'all 0.5s linear',
            }}>
                {/* img will float in center of container for scaling on the center point */}
                <img
                    id="clockFace"
                    src={clockFace}
                    alt="clock face"
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        transform: `scale(${scaleFactor})`,
                        transition: 'all 0.5s linear',
                    }}
                />
            </div>

            <div id="hourHandContainer" className="floatCenter" style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(${-dx}px, ${dy}px)`,
                transition: 'all 0.5s linear',
            }}>
                {/* img will float in center of container for scaling on the center point */}
                <img
                    id="hourHand"
                    src={hourHand}
                    alt="hour hand"
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        transform: `scale(${scaleFactor}) rotate(${90 - utils.rad2deg(time).toFixed(1)}deg)`,
                        transition: 'all 0.5s linear',
                    }}
                />
            </div>
            <div className="floatCenter" style={{
                width: `${size}px`,
                height: `${size}px`,
                zIndex: 0,
            }}>
                <img
                    id="mask"
                    src={clockMask}
                    alt="mask"
                    style={{
                        width: `${size * 3}px`,
                        height: `${size * 3}px`,
                    }}
                />
            </div>
        </div>
    )
}