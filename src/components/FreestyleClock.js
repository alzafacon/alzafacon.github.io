import { useState } from "react"
import { BigSlider } from "./BigSlider"
import { DigiLogZoom } from "./ZoomClock"
import Grid from '@material-ui/core/Grid'
import SpeedIcon from '@material-ui/icons/Speed'
import { DateTime } from "luxon"

export const FreestyleClock = ({ size = 200 }) => {
    const [totalMinutes, setTotalMinutes] = useState(0)

    return (
        <div style={{ width: size }}>
            <DigiLogZoom size={size} hour={Math.floor(totalMinutes / 60)} minute={totalMinutes % 60} />
            <Grid container spacing={2}>
                <Grid item>
                    <SpeedIcon onClick={() => {
                        const now = DateTime.now()
                        setTotalMinutes((now.hour * 60 + now.minute) % (60 * 12))
                    }} />
                </Grid>
                <Grid item xs>
                    <BigSlider
                        value={totalMinutes}
                        onChange={(_, newTime) => setTotalMinutes(newTime)}
                        max={60 * 12}
                        aria-labelledby="continuous-time-slider"
                    />
                </Grid>
            </Grid>
        </div>
    )
}
