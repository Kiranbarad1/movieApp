import React, { Component } from 'react'
import styled from 'styled-components'

export default class TimerOut extends Component {
    state = {
        minutes: 0,
        seconds: 10,
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
                    ? <First>Click On Download</First>
                    : <Sec>creating Link: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</Sec>
                }
            </div>
        )
    }
}

const First=styled.p`
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
`
const Sec=styled.p`
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
`