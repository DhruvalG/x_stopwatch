import {Component} from 'react'

class StopWatchFunctions extends Component {
    state = {
        timeInSeconds: 0,
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    showInMinutes = () => {
        const {timeInSeconds} = this.state
        const minutes = Math.floor(timeInSeconds / 60)
        if (minutes < 10) {
        return `${minutes}`
        }
        return minutes
    }

    showInSeconds = () => {
        const {timeInSeconds} = this.state
        const seconds = Math.floor(timeInSeconds % 60)
        if (seconds < 10) {
        return `0${seconds}`
        }
        return seconds
    }

    startButton = () => {
        this.timerId = setInterval(this.clockFunc, 1000)
    }
    
    clockFunc = () => {
        this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
    }

    stopButton = () => {
        clearInterval(this.timerId)
    }

    resetButton = () => {
        this.setState({timeInSeconds: 0})
        clearInterval(this.timerId)
    }

    render() {
        let mainTimer = `${this.showInMinutes()}:${this.showInSeconds()}`
        return (
            <div>
                <h1>Stopwatch</h1>
                <p testid="timer">
                    Time: {mainTimer}
                </p>
                <div>
                    <button
                        className="start-button"
                        type="button"
                        onClick={this.startButton}
                    >
                        Start
                    </button>
                    <button
                        className="stop-button"
                        type="button"
                        onClick={this.stopButton}
                    >
                        Stop
                    </button>
                    <button
                        type="button"
                        onClick={this.resetButton}
                    >
                        Reset
                    </button>
                </div>
            </div>
        )
    }
}
export default StopWatchFunctions;