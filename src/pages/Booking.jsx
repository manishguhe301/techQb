import { useContext, useState } from 'react';
import { Movie } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const navigate = useNavigate();

  const getName = (e) => {
    setInputName(e.target.value);
  };

  const getEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName && inputEmail) {
      localStorage.setItem('name', JSON.stringify(inputName));
      localStorage.setItem('email', JSON.stringify(inputEmail));
      navigate('/success');
    }
  };

  const { selectedMovie } = useContext(Movie);

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center bg-white w-full md:w-1/2 mx-auto mt-12 p-8 rounded-lg shadow-lg space-y-8'
    >
      <h2 className='text-2xl font-bold text-teal-500'>
        {selectedMovie[0].name}
      </h2>
      <div className='flex flex-col items-center justify-center space-y-5'>
        <div className='flex flex-col space-y-2 w-full'>
          <input
            type='text'
            required
            value={inputName}
            placeholder='Enter name'
            onChange={getName}
            className='p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500'
          />

          <input
            type='email'
            value={inputEmail}
            required
            placeholder='Enter email'
            onChange={getEmail}
            className='p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500'
          />
        </div>
        <p>Select Payment Method</p>
        <div className='flex space-x-2 items-center'>
          <input
            type='radio'
            id='upi'
            name='payment'
            className='text-teal-500'
          />
          <label htmlFor='upi' className='text-gray-700'>
            UPI
          </label>
          <input
            type='radio'
            id='card'
            name='payment'
            className='text-teal-500'
          />
          <label htmlFor='card' className='text-gray-700'>
            CARD
          </label>
        </div>
        <button
          type='submit'
          disabled={!inputName || !inputEmail}
          className={`py-2 px-4 text-white font-semibold text-base rounded-full w-full md:w-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${(!inputName || !inputEmail) ? 'bg-gray-500 cursor-not-allowed' : 'bg-teal-500 hover:bg-teal-700 cursor-pointer'}`}
        >
          Book
        </button>
      </div>
    </form>
  );
};

export default Booking;
