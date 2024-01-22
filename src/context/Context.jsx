import { createContext, useState } from 'react';

export const Movie = createContext();

const Context = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState([
    { name: '', summary: '', image: '' },
  ]);
  return (
    <Movie.Provider value={{ selectedMovie, setSelectedMovie }}>
      {children}
    </Movie.Provider>
  );
};

export default Context;
