import './App.css';
import HomePage from './pages/homeage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import {Route,Switch} from 'react-router-dom';
import Header from './comonents/header/header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App ;
