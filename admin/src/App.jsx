import './App.css'
import AddPost from './Components/Add Post/AddPost.jsx'
import Main_Page from './Components/Main_page/Main_Page.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
    <ToastContainer />
      <Navbar />
      <Main_Page />
    </>
  )
}

export default App
