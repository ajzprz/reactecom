import React from 'react'
import {Link } from "react-router-dom";
const Navbar = () => {

  return (
    <div>
          <div class="product-filter">
    <h1> <Link to="/"> Products</Link></h1>
    
    <div class="sort">
      <div class="collection-sort">
        <label>Filter by:</label>
        <select>
          <option value="/">All Jackets</option>
          <option value="/">2016</option>
          <option value="/">jacket</option>
          <option value="/">Jackets</option>
          <option value="/">layers</option>
          <option value="/">Obermeyer</option>
          <option value="/">Roxy</option>
          <option value="/">womens</option>
        </select>
      </div>
      
      <div class="collection-sort">
        <label>Sort by:</label>
        <select>
          <option value="/">Featured</option>
          <option value="/">Best Selling</option>
          <option value="/">Alphabetically, A-Z</option>
          <option value="/">Alphabetically, Z-A</option>
          <option value="/">Price, low to high</option>
          <option value="/">Price, high to low</option>
          <option value="/">Date, new to old</option>
          <option value="/">Date, old to new</option>
        </select>
      </div>
       <div class="collection-sort">
        <div>
          <Link to="/about">About</Link>
          <Link to="public/auth/index.html" class="btn">Login </Link>
          <Link to="public/auth/register.html" class="btn">Register </Link>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Navbar