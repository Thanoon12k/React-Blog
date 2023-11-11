import React from 'react'
import Post from './post'


const Home = ({ posts }) => {
    console.log(posts); // Debug statement

    return (
        <div>
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))
            }
        </div>
    );
}
export default Home