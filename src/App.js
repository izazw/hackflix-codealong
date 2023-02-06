import './App.css';
import { useEffect, useState } from 'react';
import Catalogue from './Catalogue';
import MovieDetails from './MovieDetails';
import { Route, Routes } from 'react-router-dom';


const App = () => {


  return (
    <div className="wrapper">
      <header>
        <h1>Hackflix</h1>
      </header>
       {/* create path allowing us to render different things depending on the URL */}
       <Routes>
          <Route path="/" element={ <Catalogue /> } />
          <Route path="movie/:movieID" element={ <MovieDetails /> } />
       </Routes>
      <Catalogue />
    </div>
  );
}

export default App;
