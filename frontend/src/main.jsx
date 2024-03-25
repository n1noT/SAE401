import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Root, {loader as navbarLoader} from './routes/root.jsx';
import About from './routes/about.jsx';
import ErrorPage from './ui/ErrorPage';
import Cinema, {loader as moviesLoader} from './routes/Cinema.jsx';
import DesignSystem from './routes/designSystem.jsx';



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
        loader: moviesLoader
        
      },
      {
        path: 'design-system',
        element: <DesignSystem />,
        
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
