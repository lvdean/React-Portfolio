// import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App.jsx'
import HomePage from '.pages/HomePage.jsx'
import About from '.pages/AboutMe.jsx'
import Contact from '.pages/Contact.jsx'
import Portfolio from '.pages/Portfolio.jsx'
import Resume from '.pages/Resume.jsx'
import Error from '.pages/Error.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Defining the accesible routes and which component to render when the route is accessed
const router = createBrowserRouter ([
  {
    path:'/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index:true,
        element: <HomePage />,
  },
  { 
    path: 'AboutMe',
    element: <About />,
  },
  {
    path: 'Contact',
    element: <Contact />,
  },
  {
    path: 'Portfolio',
    element: <Portfolio />,
  },
  {
    path: 'Resume',
    element: <Resume />,
  },
],
}]);

// Rendering the router component to the root element

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

