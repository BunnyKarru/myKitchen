import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Page from './components/Page.jsx';
import SearchResults from './components/SearchResults.jsx';
import NoResults from './components/NoResults.jsx';
import FoodItem from './components/FoodItem.jsx';

const router = createBrowserRouter({
  basename: '/vite-react-deploy/',  // Adjust this with your actual base name
  routes: [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Page />
        },
        {
          path: "/foodItem",
          element: <FoodItem />
        },
        {
          path: '/searchResults',
          element: <SearchResults />
        },
        {
          path: '/noresults',
          element: <NoResults />
        }
      ]
    }
  ]
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <router.RouterProvider router={router}>
      <router.RouterView />
    </router.RouterProvider>
  </React.StrictMode>
);
