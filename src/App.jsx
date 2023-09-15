import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'

function App() {

  // Declaring State for handling Carts
  const [carts, setCarts] = useState([]);

  const handleCart = id => {
    console.log('Bookmark adding soon', id);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Courses handleCart={handleCart}></Courses>
      </div>
    </>
  )
}

export default App
