import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Catalogue = () => {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
     // After the component has been added to the DOM make our API call...
     axios({
       url: 'https://api.themoviedb.org/3/discover/movie',
       params: {
         api_key: 'f012df5d63927931e82fe659a8aaa3ac',
         language: 'en-US',
         sort_by: 'popularity.desc',
         include_adult: 'false',
         include_video: 'false',
         page: 1,
         primary_release_year: 2021,
       },
     }).then( (res) => {
       const movieResults = res.data.results;
       // Store the API results to the "movies" state value...
       setMovies(movieResults);
     })
   }, []);
 
   return (
     <ul className="catalogue">
       {movies.map((movie) => (
           <li key={movie.id}>
             <Link to={`/movie/${movie.id}`}>
             <img 
               src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
               alt={`Poster for ${movie.original_title}`} />
             </Link>
           </li>
         )
       )}
     </ul>
   );
}

export default Catalogue;