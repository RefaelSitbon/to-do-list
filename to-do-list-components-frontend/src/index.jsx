import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SecoundPage from './secoundPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Routing from './routing';


function Main() {
  return (
      <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Routing />}
        />
        {/* The next line is very important for the Navigate component to work */}
        <Route
          path="/secoundPage"
          element={<SecoundPage />}
        />
                {/* <Link to="secoundPage">secoundPage</Link> */}
                </Routes>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);

