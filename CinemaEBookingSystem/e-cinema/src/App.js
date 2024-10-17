import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';
import Admin from './components/Admin';
import AdminMovies from './components/AdminMovies';
import AdminPromotions from './components/AdminPromotions';
import ResultsPage from './components/ResultsPage';
import MoviesPage from './components/MoviesPage';

import "./styles.css"
import { Home } from "./pages/home";
import { CreateAccount } from "./pages/createaccount";
import { LogIn } from "./pages/login";
import { RegistrationConfirmation } from "./pages/regcon";
import { EditProf } from "./pages/editprof";
import { Book } from "./pages/book";
import { OrderSummary } from "./pages/ordersummary";
import { Checkout } from "./pages/checkout";
import { OrderConfirmation } from "./pages/ordercon";
import { ForgotPassword } from './pages/forgotpassword';
import { ChangePassword } from './pages/changepassword';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const [moviesNowPlaying, setMoviesNowPlaying] = useState([]);
  const [moviesComingSoon, setMoviesComingSoon] = useState([]);
  const allMovies = [...moviesNowPlaying, ...moviesComingSoon];
  const [error] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const email = sessionStorage.getItem('userEmail'); // Use sessionStorage
    if (email) {
        setIsLoggedIn(true); // User is logged in
    }
    fetch('http://localhost:8080/movies/all') 
        .then(response => response.json())
        .then(data => {
            setMoviesNowPlaying(data.filter(movie => movie.status === 'Now Playing'));
            setMoviesComingSoon(data.filter(movie => movie.status === 'Coming Soon'));
        })
        .catch(error => console.error('Error fetching movies:', error));
  }, []);


  return (
    <div className="App">
            {!isAdminRoute && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  {error ? (
                    <p>Error fetching movies: {error}</p>
                  ) : (
                    <>
                      <MovieList title="Now Playing" movies={moviesNowPlaying} />
                      <MovieList title="Coming Soon" movies={moviesComingSoon} />
                    </>
                  )}
                </>
              } />
                <Route path="/movies" element={<MoviesPage moviesNowPlaying={moviesNowPlaying} />} />
                <Route path="/results/:searchTerm" element={<ResultsPage />} />
                <Route path="/movie/:id" element={<MovieDetail movies={allMovies} />} />
                <Route path="/" element={<Home/>}/>
              <Route path="/createaccount" element={<CreateAccount/>}/>
              <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn} />}/>
              <Route path="/regcon" element={<RegistrationConfirmation/>}/>
              <Route path="/editprof" element={<EditProf/>}/>
              <Route path="/book" element={<Book/>}/>
              <Route path="/ordersummary" element={<OrderSummary/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/ordercon" element={<OrderConfirmation/>}/>
              <Route path="/forgotpassword" element={<ForgotPassword/>}/>
              <Route path="/changepassword" element={<ChangePassword/>}/>
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/movies" element={<AdminMovies allMovies={allMovies} />} />
                <Route path="/admin/users" element={<Admin />} />
                <Route path="/admin/pricing" element={<Admin />} />
                <Route path="/admin/promotions" element={<AdminPromotions />} />
            </Routes>
            {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
