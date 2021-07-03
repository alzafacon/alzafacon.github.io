import './App.css'
import { FreestyleClock } from './components/FreestyleClock'
import { WallClock } from './components/WallClock'

function App() {

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <WallClock style={{ flex: 1 }} />
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <FreestyleClock style={{ flex: 1 }} />
            </div>
        </div>
    )
}

export default App;
