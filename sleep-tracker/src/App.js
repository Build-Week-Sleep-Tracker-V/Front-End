import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';


import styled from 'styled-components';
import PrivateRoute from './components/PrivateRoute';
import SleepInput from './components/SleepInput';
import Login from './components/Login';
import SleepData from './components/SleepData';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import SleepCard from './components/SleepCard';
//Imported Components for use in App.js


 const AppSection = styled.section`
    border:2px solid back;
    background-color:silver;
 `;

function App() {

  return (
  <Router>
    <div className="App">
      <AppSection>  {/* Styling section for the full application */}
        <NavBar/>
          <Switch>
            {/* Switch allows for navigating through paths without having to rerender the entire page, makes for cleaner more astetically pleasing user experience */}

            <PrivateRoute exact path='/sleepdata' component={SleepData}/>
            <PrivateRoute exact path='/sleepinput' component={SleepInput}/>
            <PrivateRoute path='/sleepcard/:id' component={SleepCard}/>
            {/* Private Routes are end points/pages restricted to only verified users with tokens through utils-axiosWithAuth */}
            
            <Route path='/signup' component={SignUp}/>
            <Route path='/login' component={Login}/>
            <Route path='/' component={Login}/>
           

          </Switch>
      </AppSection>
    
    </div>
  </Router>
  );
}

export default App;
