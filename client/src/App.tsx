import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { CircularProgress } from 'codefee-kit';
import './App.css';

interface IServerResponse {
  message: string;
  datetime: string;
}

const App = () => {
  const [data, setData] = useState<IServerResponse | null>(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000', {
        headers: {
          'Cache-Control': 'max-age=30'
          // 'Cache-Control': 'max-age=300' -> to demonstrate value more than server response
        }
      })
      .then((res: AxiosResponse<IServerResponse>) => {
        setData(res.data);
      });
  }, []);

  return (
    <div className="app">
      {!data ? <CircularProgress /> :
        <div>
          <h1>Data</h1>
          <span>Message: {data.message}</span>
          <br />
          <span>Datetime: {new Date(data.datetime).toLocaleTimeString()}</span>
        </div>
      }
    </div>
  );
};

export default App;
