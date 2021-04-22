import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Welcome from './components/Welcome.jsx'
import HangmanApp from './components/HangmanApp.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact={true} path="/" component={Welcome} />
        <Route  path="/game" component={HangmanApp} />
      
      
      
      
      
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
