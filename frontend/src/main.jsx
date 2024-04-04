import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Root, {loader as navbarLoader} from './routes/root.jsx';
import About from './routes/about.jsx';
import ErrorPage from './ui/ErrorPage';
import Cinema , {loader as moviesLoader} from './routes/Cinema.jsx';
import Movie , {loader as movieInfoLoader} from './routes/Movie.jsx';
import AccueilCinema from './routes/AccueilCinema.jsx';
import Genre from './routes/Genre.jsx';
import DesignSystem from './routes/designSystem.jsx';
import SearchContent, {loader as searchLoader} from './routes/SearchContent.jsx';
import LogPage from './routes/LogPage.jsx';

import './index.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: navbarLoader,
    children:[{
        path: 'about',
        element: <About />
      },
      {
        path: 'cinema',
        element: <Cinema />,
        loader: moviesLoader,
        children:[{
          path: 'genre/:categoryId',
          element: <Genre />,
          
        },{
          path: 'accueil',
          element: <AccueilCinema />,
          
        }]
      },
      ,{
        path: 'movie/:idmovie',
        element: <Movie/>,
        loader: movieInfoLoader,
      },
      {
        path: 'design-system',
        element: <DesignSystem />,
        
      },
      {
        path: 'searchContent/:searched',
        element: <SearchContent />,
        loader: searchLoader
      },
      {
        path: 'connected',
        element: <LogPage />,
        
        
      },
      
    ],
    errorElement: <ErrorPage />,

  },
  
]);

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}
