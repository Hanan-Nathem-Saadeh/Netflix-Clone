// import "./App.css";
import Navbar from "./components /Navbar/Navbar";
import Home from "./components /Home/Home";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FavList from "./components /FavList/FavList"
export default function App() {
    return (
    <div className="App">
      <Navbar/>
     <Routes>
     <Route path='/' exact element={<Home/>} /> 
     <Route path="/favlist" element={<FavList />} />   
    </Routes>
    </div>
  );
}
