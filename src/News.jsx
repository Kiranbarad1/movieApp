import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
function News({ title, image, description, onClick }) {
  return (

    <Container onClick={onClick}>
      <Helmet>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    
    <meta name="description" content="free movies are available hare" />
    
    </Helmet>

      <Images src={image} alt={title}  />
      <Title>{title}</Title>
      {/* <p>{description}</p> */}
    </Container>
  );
}

export default News;

const Container = styled.div`
  /* display: flex; */

  // dektop
  @media (min-width: 1441px) {
  }
  //laptop and dektop small
  @media (min-width: 1025px) and (max-width: 1440px) {
  }
  //small laptop
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  //tablets and ipads
  @media (min-width: 481px) and (max-width: 768px) {
  }
  //mobile
  @media (min-width: 320px) and (max-width: 480px) {
    border: 1px solid black;
    margin: 4px ;
    width: 100%;
  }
`;
const Title = styled.h1`
  // dektop
  @media (min-width: 1441px) {
  }
  //laptop and dektop small
  @media (min-width: 1025px) and (max-width: 1440px) {
    display: flex;
    width: 95%;
    font-size: 15px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
  }
  //small laptop
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  //tablets and ipads
  @media (min-width: 481px) and (max-width: 768px) {
  }
  //mobile
  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    width: 43%;
    font-size: 10px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
  }
`;

const Images = styled.img`
  /* display: flex; */
  // dektop
  @media (min-width: 1441px) {
  }
  //laptop and dektop small
  @media (min-width: 1025px) and (max-width: 1440px) {
    height: 300px;
    width: 200px;
  }
  //small laptop
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  //tablets and ipads
  @media (min-width: 481px) and (max-width: 768px) {
  }
  //mobile
  @media (min-width: 320px) and (max-width: 480px) {
    height: 100px;
    width: 200px;
  }
`;