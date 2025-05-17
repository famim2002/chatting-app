import React from 'react'
import Navbar from '../componenets/layout/NavBar'
import ChatBox from './ChatBox'
import ChatPage from './ChatPage'


const Home = () => {
  return (
    <div className="w-full">
      <div
        className="flex flex-col
                    lg:flex-row"
      >
        <Navbar />
        <div
          className="w-full flex flex-col
                     md:flex-row"
        >
          <ChatBox />
          <ChatPage />
        </div>
      </div>
    </div>
  );
}

export default Home
