import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    axios.get('http://localhost:5000')
      .then((res) => {
        console.log(res);
      });
  });

  return (
    <div className="app">
      test
    </div>
  );
};

export default App;
