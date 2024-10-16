import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PhotoGrid from './components/PhotoGrid';
import PhotoDetail from './components/PhotoDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/photos/:id" element={<PhotoDetail />} />
        <Route path="/photos" element={<PhotoGrid />} />
        <Route path="/" element={<PhotoGrid />} />
      </Routes>
    </Router>
  );
};

export default App;