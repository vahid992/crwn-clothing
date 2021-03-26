import './App.css';
import {Component} from 'react';
import CheckoutPage from './pages/checkout-page/checkout.component';
import HomePage from './pages/homeage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import {Route,Switch,Redirect} from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Header from './comonents/header/header.component';
import  SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {setCurrentUser} from './redux/user/user.actions';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selector';
class App extends Component  {


  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      setCurrentUser({currentUser:userAuth})
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
          }); 
        });
      }
      setCurrentUser(userAuth);
    });
    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
   
  render(){
    return (
      //currentUser={this.state.currentUser}
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' 
          render={()=>
          this.props.currentUser ? (<Redirect to='/' />):
          (<SingInAndSignUpPage/>)}
       />
      </Switch>
    </div>
  );
}}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
});
const mapDispatchToProps = dispatch =>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(App) ;
