import React, { useState, useEffect } from "react";
import NewsList from "./NewsList";
import DescriptionPage from "./DescriptionPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Hadderr from "./component/Hadderr";
import { Movieposts } from "./database";
import Routess from "./component/Routess";
// import posts from '../db.json'
import { Helmet } from "react-helmet";

function App() {
  <Helmet>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="Download The Movies Free" content="The MovieWorld Website gives the free to download the Movies from our website" />
    <meta name="keywords" content="movies new movies newmovies Movie NewMovie Bollywood bollywood Hollywood hollywood soutIndian Indian webseries  Webseries EnglishWebseries R-rated r-rated movies englsih Hindi hindi kannada  " />
    <meta name="keywords" content="movies new movies newmovies Movie NewMovie Bollywood bollywood Hollywood hollywood soutIndian Indian webseries  Webseries EnglishWebseries R-rated r-rated movies englsih Hindi hindi kannada  " />
    <meta name="movies new movies newmovies Movie NewMovie Bollywood bollywood Hollywood hollywood soutIndian Indian webseries  Webseries EnglishWebseries R-rated r-rated movies" content="movies new movies newmovies Movie NewMovie Bollywood bollywood Hollywood hollywood soutIndian Indian webseries  Webseries EnglishWebseries R-rated r-rated movies englsih Hindi hindi kannada  " />
  </Helmet>;
  const nav = useNavigate();
  const [newsList, setNewsList] = useState([]);
  // const [images, setImages] = useState([]);
  const [selectedNewsIndex, setSelectedNewsIndex] = useState(null);

  const handleNewsClick = (index) => {
    setSelectedNewsIndex(index);
    nav("/discription");
  };

  useEffect(() => {
    setNewsList(Movieposts)
    // fetch("http://localhost:3030/posts")
    //   .then((response) => response.json())
    //   .then((data) => setImages(data)
    //   );
    // fetch("http://localhost:3030/posts")
    //   .then((response) => response.json())
    //   .then((data) => setImages(data)
    //   );

    // fetch("http://localhost:5000/api/posts")
    //   .then((response) => response.json())
    //   .then((data) => setNewsList(data));

    // handleNewsClick()
  }, []);

  return (
    <>
      <Hadderr />

      <Routess newsItem={newsList[selectedNewsIndex]} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <NewsList newsList={newsList} onNewsClick={handleNewsClick} />
          }
        />
      </Routes>
      {selectedNewsIndex !== null ? (
        <Routes>
          <Route
            path="/discription"
            element={<DescriptionPage newsItem={newsList[selectedNewsIndex]} />}
          />
        </Routes>
      ) : null}
    </>
  );
}

export default App;
