import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import './css/banner.css'
const Banner = ()=> {
  const [movies, UpdateMovies] = useState({});

  const baseUrl = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
     const fetchData = async ()=> {

      const request = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&with_networks=213/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&with_networks=213`
      );

      const Random = Math.floor(Math.random() * 20);
      UpdateMovies(request.data.results[Random]);
      return request;
    }
    fetchData();
  }, []);

  return (
    <>
    <div
      className="Banner flex"
      style={{
        backgroundImage:`url(${baseUrl}${movies.backdrop_path})`
      }}
    >
      <div className="banner_content">
        <div className="title">{movies.original_name}</div>

        <div className="overview">{movies.overview}</div>
        <div className="btn">
          <Button variant="contained" color="secondary">
            Play
          </Button>
          &nbsp;
          <Button variant="contained" color="primary">
            My List
          </Button>
        </div>
      </div>
    </div>
</>
  );
}

export default Banner;
