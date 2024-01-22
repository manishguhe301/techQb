import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import About from './pages/About';
import Booking from './pages/Booking';
import Success from './pages/Success';
import Context from './context/Context';

function App() {
  return (
    <Context>
      <Header />
      <Routes>
        <Route path='/' element={<MovieList />} />
        <Route path='/about' element={<About />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </Context>
  );
}

export default App;
