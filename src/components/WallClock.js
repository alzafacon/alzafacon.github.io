import { useState } from "react"
import { DigiLogZoom } from "./ZoomClock"
import { useInterval } from 'react-use'
import { DateTime } from "luxon"

export const WallClock = ({ size = 200, timeZone = 'local' }) => {
    const [time, setTime] = useState(DateTime.now().setZone(timeZone))

    useInterval(() => {
        setTime(DateTime.now().setZone(timeZone))
    }, 1000)

    return (<DigiLogZoom size={size} hour={time.hour} minute={time.minute} />)
}
