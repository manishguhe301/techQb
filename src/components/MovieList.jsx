import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=all');
    const data = await res.json();
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className='max-w-6xl mx-auto mt-5'>
      <h1 className='text-center text-2xl font-bold'>Latest Shows</h1>
      <div className='mt-5 grid grid-cols-1 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center'>
        {movies &&
          movies.map((movie) => {
            return (
              <MovieCard
                name={movie.show.name}
                image={movie.show.image?.original}
                status={movie.show.status}
                language={movie.show.language}
                summary={movie.show.summary}
                key={movie.show.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MovieList;
