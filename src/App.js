import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Home from './page/Home';
import About from './page/about';


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
      <Route path="/about" component={About} />

        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
