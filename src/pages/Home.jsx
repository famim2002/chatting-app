import React from 'react'
import Navbar from '../componenets/layout/NavBar'
import ChatBox from './ChatBox'


const Home = () => {
  return (
    <div className=''>
      <div className=" flex gap-2">
        <Navbar/>
        <ChatBox />
      
      </div>
    </div>
  );
}

export default Home
