import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import PrivateRoute from './components/PrivateRoute';
import SleepInput from './components/SleepInput';

 const AppSection = styled.section`
    border:2px solid back;
    background-color:dodgerblue;
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
            {/* Private Routes are end points/pages restricted to only verfiied users with tokens through utils-axiosWithAuth */}
            
            <Route path='/login' component={LoginPage}/>
            <Route path='/' component={LoginPage}/>
            <Route path='/signup' component={SignUpPage}/>

          </Switch>
      </AppSection>
    
    </div>
  </Router>
  );
}

export default App;
