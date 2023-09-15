import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Carts from './components/Carts/Carts';

function App() {

  // Declaring State for handling Carts
  const [carts, setCarts] = useState([]);

  const handleCart = id => {
    // console.log('Bookmark adding soon', id);
    const newCarts = [...carts, id];
    setCarts(newCarts);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Courses handleCart={handleCart}></Courses>
        <Carts carts={carts}></Carts>
      </div>
    </>
  )
}

export default App
