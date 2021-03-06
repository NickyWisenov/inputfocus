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
          <InputFocus text="A" inputsNum="1" />
          <InputFocus text="B" inputsNum="2" />
          <InputFocus text="C" inputsNum="3" />
          <InputFocus text="D" inputsNum="4" />
        </div>
      </div>
    );
  }
}

export default App;
