import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout.jsx';
import Page from './components/Page.jsx';
import SearchResults from './components/SearchResults.jsx';
import NoResults from './components/NoResults.jsx';
import FoodItem from './components/FoodItem.jsx';
import AboutUs from './components/AboutUs.jsx';
import Wishlist from './components/wishlist.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(


  <BrowserRouter basename={import.meta.env.BASE_URL}> 
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Page />} />
      <Route path="/foodItem/:id" element={<FoodItem />} />
      <Route path="/searchResults/:str" element={<SearchResults />} />
      <Route path="/noresults" element={<NoResults />} />
      <Route path="/aboutUs" element={<AboutUs/>} />
      <Route path="/WishList" element={<Wishlist/>} />

      </Route>
  </Routes>
</BrowserRouter>

)

  



