// import Navbar from "./Navbar";
import Navbar from "./Navbar";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import './index.css';
import { Toaster } from "react-hot-toast";
import Verify from "./Varify";


export default function App()
{
    return <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <Navbar/>
    
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/verification" element={<Verify/>}/>
    </Routes>

    
    </>
}
