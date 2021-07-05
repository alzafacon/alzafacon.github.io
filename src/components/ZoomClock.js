import { useState } from "react"
import { DigiLog } from "./DigiLogClock"
import Grid from '@material-ui/core/Grid'
import ZoomOutIcon from '@material-ui/icons/ZoomOut'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import { BigSlider } from "./BigSlider"
import { ZOOM_RESOLUTION } from "../utils"

export const DigiLogZoom = ({ size = 200, hour, minute }) => {
    const [zoom, setZoom] = useState(0)

    return (
        <div style={{ width: size }}>
            <DigiLog size={size} zoom={zoom} hour={hour} minute={minute} />
            <Grid container spacing={2}>
                <Grid item>
                    <ZoomOutIcon onClick={() => setZoom((z) => Math.max(0, z - 10))} />
                </Grid>
                <Grid item xs>
                    <BigSlider
                        value={zoom}
                        onChange={(_, newZoom) => setZoom(newZoom)}
                        max={ZOOM_RESOLUTION}
                        aria-labelledby="continuous-zoom-slider"
                    />
                </Grid>
                <Grid item>
                    <ZoomInIcon onClick={() => setZoom((z) => Math.min(ZOOM_RESOLUTION, z + 10))} />
                </Grid>
            </Grid>
        </div>
    )
}
