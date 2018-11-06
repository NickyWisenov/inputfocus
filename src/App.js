import * as React from 'react';
import InputFocus from './InputFocus';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Input Focus</h1>
        </header>

        <div className="App-div">
          <InputFocus text="A"/>
          <InputFocus text="B"/>
          <InputFocus text="C"/>
          <InputFocus text="D"/>
        </div>
      </div>
    );
  }
}

export default App;
