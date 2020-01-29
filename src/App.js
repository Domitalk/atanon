import React from 'react';
import './App.css';
import Header from './components/Header'
import PostContainer from './containers/PostContainer'

function App() {
  return (
    <div className="App">
      <Header />
      <PostContainer /> 
    </div>
  );
}

export default App;
