import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import News from './Pages/News/News.jsx';
import Projects from './Pages/Projects/Projects.jsx';
import About from './Pages/About/About.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Donations from './Components/Donations/Donations.jsx';
import Acc_Detail from './Pages/Acc_Detail/Acc_Detail.jsx';
import Contact from './Pages/Contact/Contact.jsx';

const url = 'http://localhost:4000'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path : '',
        element: <Home />
      },
      {
        path:'news',
        element : <News url={url}/>
      },
      {
        path :'projects',
        element : <Projects />
      },
      {
        path: 'about',
        element :<About />
      },
      {
        path : 'contact',
        element : <Contact />
      },
      {
        path : 'donation',
        element : <Acc_Detail />
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
