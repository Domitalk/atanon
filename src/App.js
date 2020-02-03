import React from 'react';
import './App.css';
import Header from './components/Header'
import PostContainer from './containers/PostContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NewPost from './components/NewPost'
import { makeStyles } from '@material-ui/core/styles';
import {Image} from 'cloudinary-react';




const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    minHeight: 45,
    align: "center"
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className="App" >
        <Header />
        <Route exact path='/' component={PostContainer}  />
        <Route exact path='/post' component={NewPost} />

      </div>
    </Router>
  );
}

export default App;
