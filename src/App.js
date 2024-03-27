import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './Home';
import LoggedIn from './LoggedIn';




function App() {
  return (
    <ChakraProvider>
      <Router>
        
        <Switch>
        <Route exact path= "/">
        <Home/>

        </Route>
          <Route exact path="/logged-in">
            <LoggedIn/>
          </Route>
        </Switch>

      </Router>
     
         
            

        
      
    </ChakraProvider>
    
   
   
  );
}

export default App;
