import * as React from 'react';
import './App.css';
import TextFields from './TextFields';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Input Focus</h1>
        </header>

        <div className="App-div">
            <TextFields textfieldsNum="1" />
            <TextFields textfieldsNum="2" />
            <TextFields textfieldsNum="3" />
            <TextFields textfieldsNum="4" />
        </div>
      </div>
    );
  }
}

export default App;
