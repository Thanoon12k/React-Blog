import {  Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Post from "./post";
import Footer from "./footer";
import About from "./about";

function App() {
  return (
    <div>
      <Navbar />
      
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/post" element={<Post/>} />
          <Route path="/about" element={<About/>} />
         
        </Routes>
   
      < Footer  />
    </div>
  );
}

export default App;
