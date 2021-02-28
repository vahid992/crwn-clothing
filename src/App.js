import './App.css';
import HomePage from './pages/homeage/homepage.component';
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App ;
