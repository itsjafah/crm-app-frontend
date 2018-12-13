import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

class App extends Component {

  state = {
    viewProducts: false
  }

  handleViewProducts = () => {
    this.setState({
      viewProducts: true
    })
  }

  render() {
    return (
      <div className="App">
        <Header handleViewProducts={this.handleViewProducts}/>
        <MainContainer viewProducts={this.state.viewProducts}/>
      </div>
    );
  }
}

export default App;
