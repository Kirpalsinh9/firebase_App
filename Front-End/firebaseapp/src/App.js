import React from 'react';
import './App.css';
import config from './config';

const getMedia = async () => {
  const response = await fetch(`${config.development.backendUrl}/getVideosLinks`, {
    method: "get",
    mode: "cors",
  });

  const data = await response.json();
  console.log(`CONTENTS: ${JSON.stringify(data)}`);
  return data;
}

class App extends React.Component {

  componentDidMount() {
    getMedia();
  }

  render() {
    return (
      <div>
        <h1>Hey!</h1>
      </div>
    )
  }
}

export default App;