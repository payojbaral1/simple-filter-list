import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddFilterItemContainer from './components/AddFilterItemContainer';
import ItemListContainer from './components/ItemListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddFilterItemContainer />
        <ItemListContainer />
      </div>
    );
  }
}

export default App;
