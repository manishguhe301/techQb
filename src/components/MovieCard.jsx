import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../context/Context';

const MovieCard = ({ name, image, language, status, summary }) => {
  const { setSelectedMovie } = useContext(Movie);

  const handleClick = () => {
    setSelectedMovie([{ name: name, image: image, summary: summary }]);
  };

  return (
    <div className='p-4 bg-white rounded-lg shadow-md relative w-64 h-auto'>
      <span className='absolute top-2 left-2 p-1 bg-teal-600 text-white rounded text-xs'>{status}</span>
      {image ? (
        <img src={image} alt='movie' className='w-full h-80 rounded-lg object-cover' />
      ) : (
        <img
          src='https://resizing.flixster.com/UNHdUzvufH-sG2Zz5b3Go7GD_pg=/206x305/v2/https://flxt.tmsimg.com/assets/p9635334_p_v13_ak.jpg'
          alt='movie'
          className='w-full h-80 object-cover rounded-lg'
        />
      )}

      <div className='mt-4'>
        <p className='text-lg font-semibold'>{name}</p>
        <p className='text-gray-700'>{language}</p>
        <Link to='/about'>
          <button onClick={handleClick} className='mt-2 py-1 px-2 w-full bg-teal-500 text-white rounded hover:bg-teal-700'>View</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
