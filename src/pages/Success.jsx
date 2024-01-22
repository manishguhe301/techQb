import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <h2 className="text-4xl font-black text-center text-green-500">
        Payment Successful!
      </h2>
      <p className="text-2xl text-center mt-4">
        Your booking has been confirmed.
      </p>
      <Link to="/" className="text-blue-500 cursor-pointer mt-8">
        <button className="py-2 px-4 bg-teal-500 text-white font-semibold text-base rounded-full hover:bg-teal-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          Return to Home Page
        </button>
      </Link>
    </div>
  );
};

export default Success;
