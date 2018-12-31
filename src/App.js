import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

const App = () => {

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MainContainer />
    </div>
  )

}

export default App
