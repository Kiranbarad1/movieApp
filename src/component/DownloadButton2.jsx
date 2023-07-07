import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'

export default class DownloadButton extends Component {
    state = {
        minutes: 0,
        seconds: 15,
    }
    
    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }
    
    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div>
                { minutes === 0 && seconds === 0
                    ? <><a href="/download/starts">
                    <h1 >Download Now</h1>
                    </a>
                    </>
                    : null
                }
            </div>
        )
    }
}



