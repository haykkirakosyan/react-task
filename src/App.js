import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './Pages/Home';
import LoggedIn from './Pages/LoggedIn';
import SingUp from './Pages/SingUp';




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
          <Route exact path="/sing-up">
            <SingUp/>
          </Route>
        </Switch>
      </Router>
     
         
            

        
      
    </ChakraProvider>
    
   
   
  );
}

export default App;
