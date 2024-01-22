import { useContext } from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { Movie } from '../context/Context';

const About = () => {
  const { selectedMovie } = useContext(Movie);

  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 '>
      {selectedMovie.map((item, i) => {
        return (
          <div
            key={i}
            className='flex flex-col md:flex-row gap-12 mt-12 items-center bg-white p-6 rounded-lg shadow-lg'
          >
            <img src={item.image} className='w-full md:w-1/2 rounded-lg' />
            <div className='flex flex-col gap-8'>
              <h2 className='text-2xl font-bold text-teal-700'>
                {item.name}
              </h2>
              <p className='text-base text-gray-700'>{parse(item.summary)}</p>
              <Link to='/booking'>
                <button className='py-2 px-4 bg-teal-500 hover:bg-teal-700 text-white font-semibold text-base rounded-full w-full md:w-auto '>
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
