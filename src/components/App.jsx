import { React} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import "./app.css";
import "./ProductDetail/details.css"
import Navbar from "./Navbar";
import Home from "../HomePage/Home";
import ProductPage from "./ProductDetail/ProductPage";

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/products/:productId" element = {<ProductPage/>} />
        <Route path="/about" element = {<h1>About</h1>}/>
        <Route path="*" element = {<h1>Sorry Page Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
