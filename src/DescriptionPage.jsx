import React from "react";
import { useNavigate } from "react-router-dom";
import Movie480p from "./component/Movie480p";
import Movie720p from "./component/Movie720p";
import Movie1080p from "./component/Movie1080p";
import Movie2kHDR from "./component/Movie2kHDR";
import MovieG_Drive2kHDR from "./component/MovieG_Drive2kHDR";
import MovieG_Drive480p from "./component/MovieG_Drive480p";
import MovieG_Drive720p from "./component/MovieG_Drive720p";
import MovieG_Drive1080p from "./component/MovieG_Drive1080p";

import styled from "styled-components";

function DescriptionPage({ newsItem }) {
  console.log(newsItem);
  const nav = useNavigate();
  return (
    <OuterContainer>
      <Semi>{newsItem.title}</Semi>
      <div>
        <h2>{newsItem.title}</h2>
        <p>{newsItem.MoviesWorld}</p>
        <img src={newsItem.image} alt="" />
        <h2>{newsItem.title}</h2>
        <img src={newsItem.image2} alt="" />
        <br />
        <p>Movie Info :</p>
        <ul>
          <li>{newsItem.Full_Name}</li>
          <li>{newsItem.Language}</li>
          <li>{newsItem.Release_Year}</li>
          <li>{newsItem.Quality}</li>
          <li>{newsItem.Size}</li>
          <li>{newsItem.Stars}</li>
          <li>{newsItem.Director}</li>
        </ul>

        <h2>{newsItem.Storyline}</h2>

        <p>Movie Images :</p>
        <img src={newsItem.image2} alt="" />
        <img src={newsItem.image3} alt="" />
        <img src={newsItem.image} alt="" />
        <img src={newsItem.image4} alt="" />
      </div>
      <br />
      <br />
      <div>
        <p>
          Download Zara Hatke Zara Bachke (2023) Hindi Full Movie HQ PreDvDRip ~
          2k HDR [3.5GB]
        </p>
        <MovieG_Drive2kHDR />
        <br />
        <Movie2kHDR />
        <br />
        <br />
        <p>
          Download Zara Hatke Zara Bachke (2023) Hindi Full Movie HQ PreDvDRip ~
          1080p [2.4GB]
        </p>
        <MovieG_Drive1080p />
        <br />
        <br />
        <Movie1080p />
        <br />
        <br />
        <p>
          Download Zara Hatke Zara Bachke (2023) Hindi Full Movie HQ PreDvDRip ~
          720p [1.3GB]
        </p>
        <MovieG_Drive720p />
        <br />
        <Movie720p />
        <br />
        <br />
        <p>
          Download Zara Hatke Zara Bachke (2023) Hindi Full Movie HQ PreDvDRip ~
          480p [450MB]
        </p>
        <MovieG_Drive480p />
        <br />
        <Movie480p />
        <br />
        <br />
      </div>
    </OuterContainer>
  );
}

export default DescriptionPage;
const OuterContainer = styled.div`
  // dektop
  @media (min-width: 1441px) {
  }
  //laptop and dektop small
  @media (min-width: 1025px) and (max-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  //small laptop
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  //tablets and ipads
  @media (min-width: 481px) and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  //mobile
  @media (min-width: 320px) and (max-width: 480px) {
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    padding: 10px;
  }
`;
const Semi = styled.h2`
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
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    padding: 10px;
    font-size: 10px;

  }
`;
