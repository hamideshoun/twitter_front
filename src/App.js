import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Settings from './Settings'
import Activity from './Activity'
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/settings" component={Settings} />
          <Route path="/activity" component={Activity} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
