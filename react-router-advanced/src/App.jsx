import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
         <Route path="/blog/:Id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
