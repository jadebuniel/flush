import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ImageList from './components/ImageList';
import Search from './components/Search';
import Home from './pages/Home'
import Result from './pages/Result'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/search/:query" exact component={Result}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
