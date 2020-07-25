import React , {Component} from 'react';
import './App.css';
import Outlook from './Components/Outlook/Outlook';
import Heading from './Components/Heading/Heading';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Heading name='Calculator'/>
        <Outlook/>
      </div>
    );
  }
  
}

export default App;
