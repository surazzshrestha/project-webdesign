import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import App from './App.jsx'
import './scss/style.scss'
import Contact from './componenet/pages/Contact.jsx';
import About from './componenet/pages/About.jsx';
import Error from './componenet/pages/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/contact",
    element: <Contact/>
  },
    {
    path: "/about",
    element: <About/>
  },
   {
    path: "/*",
    element: <Error/>
  }

  

]);
 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
