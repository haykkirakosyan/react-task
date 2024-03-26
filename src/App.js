import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import FirstPage from './FirstPage';
import SingIn from './SingIn';

function App() {
  return (
    
    <Router>
      <div>
        <FirstPage/>
      </div>
      <Switch>
        <Route exact path = "/">
        <Home/>
       

        </Route>
        <Route  exact path = "/login">
          <Login/>
        </Route>
        <Route exact path = "/singin">
          <SingIn/>
          

        </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
