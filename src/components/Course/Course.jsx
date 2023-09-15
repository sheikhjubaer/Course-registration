import { useState } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { toast } from 'react-toastify'; // Import the toast function
import 'react-toastify/dist/ReactToastify.css'; // Import the toast CSS

var temp = 0;
const Course = ({ course }) => {
  const { cover, title, description, price, credit } = course;

  return (
    <div className='mb-2 p-2 bg-white rounded-xl'>
      <img className='w-full mb-2' src={cover} alt={`Cover picture of the title ${title}`} />
      <div className='flex justify-between mb-3'>
        <div>
          <h3 className='text-xl font-bold mb-2'>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <p className='mb-6 font-semibold inline-block'>
        <span className='mr-4 text-2xl inline-flex items-center'>$</span>Price: {price}
      </p>
      <p className='mb-6 font-semibold inline-block ml-14'>
        <span className='inline-block mr-4'>
          <FaBookOpen className='text-2xl inline-flex items-center'></FaBookOpen>
        </span>{' '}
        Credit: {credit}hr
      </p>
      <button
        className='bg-sky-600 text-white font-bold w-full text-center rounded-xl py-2 text-xl'>
        Select
      </button>
    </div>
  );
};

export default Course;
