import React from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './pages';
import { Home, Users, Shop, Param, Blogpage, Post } from './components';
import './styles/global.css';

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/param/:id' element={<Param />} />
        <Route path='/posts' element={<Blogpage />} />
        <Route path='/posts/:id' element={<Post />} />
      </Routes>
    </>
  );
}

export default App;