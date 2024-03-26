import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home';



function App() {
  return (
    <ChakraProvider>
      <Home/>
    </ChakraProvider>
    
   
   
  );
}

export default App;
