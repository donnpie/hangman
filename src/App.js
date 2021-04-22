import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Welcome from './components/Welcome.jsx'
import HangmanApp from './components/HangmanApp.jsx'
import Help from './components/Help.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact={true} path="/" component={Welcome} />
        <Route  path="/game" component={HangmanApp} />
        <Route  path="/help" component={Help} />
      </BrowserRouter>
    </div>
  );
}

export default App;
