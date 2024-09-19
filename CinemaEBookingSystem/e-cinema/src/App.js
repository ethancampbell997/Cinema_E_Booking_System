import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MovieList from './components/MovieList';
import Footer from './components/Footer';

import Deadpool from './images/165188.png'

const moviesNowPlaying = [
  { title: 'Deadpool & Wolverine', rating: '4.8', poster: Deadpool, trailer: 'https://www.youtube.com/watch?v=73_1biulkYk' },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <MovieList title="Now Playing" movies={moviesNowPlaying} />
      <Footer />
    </div>
  );
}

export default App;
