import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default class DownloadButton extends Component {
  state = {
    minutes: 0,
    seconds: 10,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div>
        {minutes === 0 && seconds === 0 ? (
          <Container>
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/downloadglink"
            >
              <First>Download Now</First>
            </a>
          </Container>
        ) : null}
      </div>
    );
  }
}

const First = styled.p`
  font-size: 30px;

  text-decoration: none;
  color: 5px solid white;
  background-color: #9956;
  border: 2px solid black;
  padding: 3px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
