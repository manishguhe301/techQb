import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/')}
      className='bg-gradient-to-r from-teal-500 via-green-500 to-green-400 cursor-pointer text-white h-16 flex items-center justify-center text-3xl font-bold shadow-md md:h-20'
    >
      QuadB Shows
    </div>
  );
};

export default Header;
