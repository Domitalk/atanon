import React from 'react';
import './App.css';
import Header from './components/Header'
import PostContainer from './containers/PostContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NewPost from './components/NewPost'
import MenuNav from './components/MenuNav'






function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route exact path='/' component={PostContainer}  />
        <Route exact path='/post' component={NewPost} />

        <MenuNav />

      </div>
    </Router>
  );
}

export default App;
