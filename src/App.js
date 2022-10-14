import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.jokes.one/jod').then(response => {
      setData(response.data);
      console.log(response.data)
    });
  }, [])

  if(!data)
    return <h1>Loading...</h1>

  return (
    <div className="App">
      <h1>Joke of the day with Axios</h1>
      <h2>
        {data.contents.jokes[0].joke.title}
      </h2>
      <p>
        {data.contents.jokes[0].joke.text}
      </p>
    </div>
  );
}

export default App;
