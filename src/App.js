import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import TaskScreen from './screens/TaskScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
      <div className='container'>
      <Switch>
        <Route path="/" exact component= { TaskScreen }></Route>
        <Route path='/login' component={ LoginScreen }></Route>
        <Route path='/signup' component={ SignUpScreen }></Route>
      </Switch>
      </div>

  );
}

export default App;
