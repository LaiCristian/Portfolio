/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './Start';
import Main from './Main';
import Final from './Final';
import FinalMil from './FinalMil';
import Page404 from './404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/final" element={<Final />} />
        <Route path="/finalmil" element={<FinalMil />} />
        <Route path="/main/:stage" element={<Main />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;