import React from 'react'
import Post from './post'

const Home = () => {
    const now = new Date();
    const date = now.toDateString(); // e.g., "Fri Nov 11 2023"

  return (
    <div>
    < Post title="Home post 11" date={date} content="we are contents " />
    <Post title="Home post 22" date={date} content="we are contents " />
    
    
    </div>
  )
}

export default Home