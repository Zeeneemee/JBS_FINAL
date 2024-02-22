import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Home from './page/Home';
import About from './page/about';
import Activities from './page/activities';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/activities" element={<Activities/>}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
