import React from 'react';
// import logo from './logo.1svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { MainRouter } from './Router/MainRouter';

function App() {
  return (
    <div>
      <RouterProvider
      router={MainRouter}
      /> 
    </div>
  );
};

export default App;