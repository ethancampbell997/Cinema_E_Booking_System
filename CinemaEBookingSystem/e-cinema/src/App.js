import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';

import Deadpool from './images/Deadpool.png';
import Transformers from './images/Transformers.png';
import Beetlejuice from './images/Beetlejuice.png';
import SpeakNoEvil from './images/Speak-No-Evil.png';
import Twisters from './images/Twisters.png';

import Wicked from './images/Wicked.png';
import CapAm from './images/Captain-America.png';
import Sonic from './images/Sonic.png';
import Gladiator from './images/Gladiator.png';
import Mickey from './images/Mickey-17.png';

const moviesNowPlaying = [
  { id: 'deadpool-and-wolverine', title: 'Deadpool & Wolverine', rating: '4⭐', poster: Deadpool, trailer: 'https://www.youtube.com/watch?v=73_1biulkYk' },
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

const allMovies = [...moviesNowPlaying, ...moviesComingSoon];

function App() {
  return (
    <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={
                  <><HeroSection />
                  <MovieList title="Now Playing" movies={moviesNowPlaying} />
                  <MovieList title="Coming Soon" movies={moviesComingSoon} />
                  </>
                } />
                <Route path="/movie/:id" element={<MovieDetail movies={allMovies} />} />
            </Routes>
            <Footer />
    </div>
  );
}

export default App;
