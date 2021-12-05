import React, { useState } from 'react'
import { ZoomClock } from './ZoomClock'
import { useInterval } from 'react-use'
import { DateTime } from 'luxon'

export const WallClock = ({ size = 200, timeZone = 'local', label = '' }) => {
    const [time, setTime] = useState(DateTime.now().setZone(timeZone))

    useInterval(() => {
        setTime(DateTime.now().setZone(timeZone))
    }, 1000)

    return (<ZoomClock size={size} hour={time.hour} minute={time.minute} label={label} />)
}
