import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import Home from './pages/Home';
import BookList from './pages/BookList';
import BookDetails from './pages/ShowBook';
import BookListPage from "./pages/BookListPage"
import Navbar from './components/NavBar';
import AuthPage from './components/AuthPage';

function App() {
  return (
    <BookProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/books/:id" element={<BookDetails />} />
        </Routes>
      </Router>
    </BookProvider>
  );
}

export default App;




