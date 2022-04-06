import React from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './pages';
import { Home, Users, Shop } from './components';
import './styles/global.css';

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
