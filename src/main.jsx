import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Page from './components/Page.jsx'
import SearchResults from './components/SearchResults.jsx'
import NoResults from './components/NoResults.jsx'
import FoodItem from './components/FoodItem.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<Page/>
        },
        {
          path:"/foodItem",
          element:<FoodItem/>
        },
        {
          path:'/searchResults',
          element:<SearchResults/>
        },
        {
          path:'/noresults',
          element:<NoResults/>
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
