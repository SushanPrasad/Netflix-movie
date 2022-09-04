import React from 'react';
import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';
import Row from './Row';
import requests from './requests';

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path ="/netflix" element= {<> <Navbar />  <Banner /> 
                                             
    <Row 
      title="NETFLIX_ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow ={true}
    />
    
    <Row title ="Trending Now" fetchUrl={requests.fetchTrending} />
    <Row title ="Top Rated" fetchUrl={requests.fetchTopRated} />
    <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Row title ="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <Row title ="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <Row title ="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <Row title ="Documentaries" fetchUrl={requests.fetchDocumentaries} />
   </>} />


      </Routes>
    </Router>
    </div>  
  );
}
export default App;
   