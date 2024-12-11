import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './component/auth/login'
import SignUp from './component/auth/signup';
import Bloglist from './component/blog/bloglist';
import BlogPost from './component/blog/blogpost';
import Editblog from './component/blog/Editblog';

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/bloglist" element={<Bloglist />}></Route>
        <Route path="/blogpost" element={<BlogPost />}></Route>
        <Route path='/editblog/:id/:userId' element={<Editblog/>}></Route>
        
      </Routes>
    </div>
  );
}

export default Allroutes
