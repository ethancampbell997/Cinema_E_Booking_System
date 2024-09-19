import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MovieList from './components/MovieList';
import Footer from './components/Footer';

import Deadpool from './images/Deadpool.png';
import Transformers from './images/Transformers.png';
import Beetlejuice from './images/Beetlejuice.png';

import Wicked from './images/Wicked.png';
import CapAm from './images/Captain-America.png';
import Sonic from './images/Sonic.png';

const moviesNowPlaying = [
  { title: 'Deadpool & Wolverine', rating: '4⭐', poster: Deadpool, trailer: 'https://www.youtube.com/watch?v=73_1biulkYk' },
  { title: 'Transformers One', rating: '4⭐', poster: Transformers, trailer: 'https://www.youtube.com/watch?v=u2NuUWuwPCM' },
  { title: 'Beetlejuice Beetlejuice', rating: '3.6⭐', poster: Beetlejuice, trailer: 'https://www.youtube.com/watch?v=CoZqL9N6Rx4' },
];

const moviesComingSoon = [
  { title: 'Wicked', poster: Wicked, trailer: 'https://www.youtube.com/watch?v=6COmYeLsz4c' },
  { title: 'Captain America: Brave New World', poster: CapAm, trailer: 'https://www.youtube.com/watch?v=O_A8HdCDaWM' },
  { title: 'Sonic The Hedgehog 3', poster: Sonic, trailer: 'https://www.youtube.com/watch?v=OSOyFiOiNd4' },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <MovieList title="Now Playing" movies={moviesNowPlaying} />
      <MovieList title="Coming Soon" movies={moviesComingSoon} />
      <Footer />
    </div>
  );
}

export default App;
