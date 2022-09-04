import movieTrailer from 'movie-trailer';
import React, {useState, useEffect} from 'react'
import YouTube from 'react-youtube';
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/"; //this baseurl used to image fetchurl


function Row({ title, fetchUrl, isLargeRow }) {
    
  const [movies, setMovies] = useState([]);
   
//youtube
const [trailerUrl, setTrailerUrl] =useState("") ;

   useEffect(() => {
      async function fetchData() {

      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;   
      }
      fetchData();
     },[fetchUrl] );

     const opts={
       height: "390",
       width: "100%",
       playerVars:{
         autoplay:3,
       },
     };

     const handleClick = (movie) => {
        if (trailerUrl) {
          setTrailerUrl("");
        }  else {

          movieTrailer(movie?.name || "")
          .then((url) => {
            const urlParams = new URLSearchParams( new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
          }
             )
.catch((error) => console.log(error));
        }
     }; 
   console.table (movies);
   
    return (
 <div className='row'> 
<h2>{title}</h2>
      <div className='row_posters'>
      {/* row_posters several */}

           {movies.map(movie => (
       <img   
         key={movie.id}
         className={`row_poster $ {isLargeRow && "row_posterLarge"}`} //two classname in same src
         onClick={() => handleClick(movie)}      
          src ={` ${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path }`} alt={movie.name} />  
      ))}      
      </div>

 {trailerUrl &&      
  <YouTube videoId={trailerUrl} opts={opts} >

  </YouTube>}
      
      </div>

      )
    }
export default Row;