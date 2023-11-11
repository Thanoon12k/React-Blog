import {  Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Post from "./post";
import Footer from "./footer";
import About from "./about";
const posts = [
  {id:1, title: "Home post 11", content: "we are contents " },
  {id:2,  title: "Home post 22", content: "we are contents " },
  {id:3,  title: "Home post 33", content: "we are contents " },
];
function App() {
  
  return (
    <div>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home posts={posts}  />} />
          <Route path="/post" element={<Post post={posts[2]} />} />
          <Route path="/about" element={<About/>} />
         
        </Routes>
   
      < Footer  />
    </div>
  );
}

export default App;
