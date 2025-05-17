import React from 'react'
import Navbar from '../componenets/layout/NavBar'
import ChatBox from './ChatBox'
import ChatPage from './ChatPage'


const Home = () => {
  return (
    <div className=''>
      <div className=" flex gap-2">
        <Navbar/>
        <ChatBox />
        <ChatPage/>
      
      </div>
    </div>
  );
}

export default Home
