import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import LearnText from './LearnText';
import WordOfTheDay from './WordOfTheDay';
import LearnedWords from './LearnedWords';
import Layout from './Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/learn-text" element={<Layout><LearnText /></Layout>} />
        <Route path="/word-of-the-day" element={<Layout><WordOfTheDay /></Layout>} />
        <Route path="/learned-words" element={<Layout><LearnedWords /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
