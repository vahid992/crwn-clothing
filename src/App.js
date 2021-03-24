import './App.css';
import {Component} from 'react';
import HomePage from './pages/homeage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import {Route,Switch} from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Header from './comonents/header/header.component';
import  SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
class App extends Component  {
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    debugger;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      this.setState({currentUser:userAuth})
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });   
          console.log(this.state); 
        });
        
      }
      this.setState({currentUser:userAuth});
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
   
  render(){
    return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SingInAndSignUpPage} />
      </Switch>
    </div>
  );
}}

export default App ;
