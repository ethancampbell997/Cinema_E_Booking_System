import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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

import Deadpool from './images/posters/Deadpool.png';
import Transformers from './images/posters/Transformers.png';
import Beetlejuice from './images/posters/Beetlejuice.png';
import SpeakNoEvil from './images/posters/Speak-No-Evil.png';
import Twisters from './images/posters/Twisters.png';

import Wicked from './images/posters/Wicked.png';
import CapAm from './images/posters/Captain-America.png';
import Sonic from './images/posters/Sonic.png';
import Gladiator from './images/posters/Gladiator.png';
import Mickey from './images/posters/Mickey-17.png';

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

const moviesNowPlaying = [
  { id: 'deadpool-and-wolverine', title: 'Deadpool & Wolverine', rating: '4⭐', poster: Deadpool, trailer: 'https://www.youtube.com/embed/73_1biulkYk?si=7NG9AOkrLdypCVbo' },
  { id: 'transformers-one', title: 'Transformers One', rating: '4⭐', poster: Transformers, trailer: 'https://www.youtube.com/watch?v=u2NuUWuwPCM' },
  { id: 'beetlejuice-beetlejuice', title: 'Beetlejuice Beetlejuice', rating: '3.6⭐', poster: Beetlejuice, trailer: 'https://www.youtube.com/watch?v=CoZqL9N6Rx4' },
  { id: 'speak-no-evil', title: 'Speak No Evil', rating: '3.6⭐', poster: SpeakNoEvil, trailer: 'https://www.youtube.com/watch?v=FjzxI6uf8H8' },
  { id: 'twisters', title: 'Twisters', rating: '3.3⭐', poster: Twisters, trailer: 'https://www.youtube.com/watch?v=wdok0rZdmx4' },
];

const moviesComingSoon = [
  { id: 'wicked', title: 'Wicked', poster: Wicked, trailer: 'https://www.youtube.com/watch?v=6COmYeLsz4c' },
  { id: 'captain-america', title: 'Captain America: Brave New World', poster: CapAm, trailer: 'https://www.youtube.com/watch?v=O_A8HdCDaWM' },
  { id: 'sonic-the-hedgehog-3', title: 'Sonic The Hedgehog 3', poster: Sonic, trailer: 'https://www.youtube.com/watch?v=OSOyFiOiNd4' },
  { id: 'gladiator-2', title: 'Gladiator 2', poster: Gladiator, trailer: 'https://www.youtube.com/watch?v=4rgYUipGJNo' },
  { id: 'mickey-17', title: 'Mickey 17', poster: Mickey, trailer: 'https://www.youtube.com/watch?v=osYpGSz_0i4' },
];

const moviesNowPlayingWithStatus = moviesNowPlaying.map(movie => ({
  ...movie,
  status: 'Now Playing'
}));

const moviesComingSoonWithStatus = moviesComingSoon.map(movie => ({
  ...movie,
  status: 'Coming Soon'
}));

export const allMoviesWithStatus = [...moviesNowPlayingWithStatus, ...moviesComingSoonWithStatus];
const allMovies = [...moviesNowPlaying, ...moviesComingSoon];

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="App">
            {!isAdminRoute && <Navbar />}
            <Routes>
                <Route path="/" element={
                  <><HeroSection />
                  <MovieList title="Now Playing" movies={moviesNowPlaying} />
                  <MovieList title="Coming Soon" movies={moviesComingSoon} />
                  </>
                } />
                <Route path="/movies" element={<MoviesPage moviesNowPlaying={moviesNowPlaying} />} />
                <Route path="/results/:searchTerm" element={<ResultsPage />} />
                <Route path="/movie/:id" element={<MovieDetail movies={allMovies} />} />
                <Route path="/" element={<Home/>}/>
              <Route path="/createaccount" element={<CreateAccount/>}/>
              <Route path="/login" element={<LogIn/>}/>
              <Route path="/regcon" element={<RegistrationConfirmation/>}/>
              <Route path="/editprof" element={<EditProf/>}/>
              <Route path="/book" element={<Book/>}/>
              <Route path="/ordersummary" element={<OrderSummary/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/ordercon" element={<OrderConfirmation/>}/>
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/movies" element={<AdminMovies />} />
                <Route path="/admin/users" element={<Admin />} />
                <Route path="/admin/pricing" element={<Admin />} />
                <Route path="/admin/promotions" element={<AdminPromotions />} />
            </Routes>
            {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
