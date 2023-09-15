import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Courses></Courses>
      </div>
    </>
  )
}

export default App
