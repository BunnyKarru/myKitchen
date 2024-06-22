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


ReactDOM.createRoot(document.getElementById("root")).render(


  <BrowserRouter basename={import.meta.env.BASE_URL}> 
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Page />} />
      <Route path="/foodItem" element={<FoodItem />} />
      <Route path="/searchResults" element={<SearchResults />} />
      <Route path="/noresults" element={<NoResults />} />
      <Route path="/aboutUs" element={<AboutUs/>} />
    </Route>
  </Routes>
</BrowserRouter>
)

  



