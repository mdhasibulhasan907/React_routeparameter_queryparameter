import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog'
import Navbar from './components/Navbar';

import Teacher from './pages/Teacher';
import User from './pages/User';

import './App.css';


const  App=()=> {
  

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>  
              <Route path='/' element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/blogs' element={<Blogs/>}/>
              <Route path='/blogs/:title' element={<Blog/>}/>
   
              {/* Route parameter */}
              <Route path='/Teacher/:id' element={<Teacher/>}/>

              {/* Query parameter */}
              <Route path='/User' element={<User/>}/>

        </Routes>
    
    </BrowserRouter>
  )
}

export default App
