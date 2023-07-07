import React from "react";
import News from "./News";
import styled from "styled-components";

function NewsList({ newsList, onNewsClick }) {
  return (
    <>
      <h6>For old movies scroll below</h6>
      <OuterContainer>
        {newsList?.map((news, index) => (
          <News
            key={index}
            title={news.title}
            description={news.description}
            image={news.image}
            onClick={() => onNewsClick(index)}
          />
        ))}
      </OuterContainer>
    </>
  );
}

export default NewsList;
const OuterContainer = styled.div`
  /* padding: 10px; */
  // dektop
  @media (min-width: 1441px) {
  }
  //laptop and dektop small
  @media (min-width: 1025px) and (max-width: 1440px) {
    display: flex;
    border: 2px solid black;
    flex-wrap: wrap;
    /* flex-direction: row; */
    justify-content: space-around;
    height: 100%;
    width: 100%;
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
    flex-wrap: wrap;  
    padding: 10px;
    /* width: 40%; */
  }
`;
