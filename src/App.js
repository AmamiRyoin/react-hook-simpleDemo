import React, { Component } from "react";
import Counter from "./components/Counter";
import Button from "./components/Context";
import Toggle from "./components/Memo";
import TextInputWithFocusButton from './components/Ref';
import ReducerCounter from './components/Reducer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Button />
        <Toggle/>
        <TextInputWithFocusButton/> 
        <ReducerCounter/> 
      </div>
    );
  }
}

export default App;
