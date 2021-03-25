import './App.css';
import {Component} from 'react';
import HomePage from './pages/homeage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import {Route,Switch,Redirect} from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Header from './comonents/header/header.component';
import  SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {setCurrentUser} from './redux/user/user.actions';
import {connect} from 'react-redux';
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
        <Route exact path='/signin' 
          render={()=>
          this.props.currentUser ? (<Redirect to='/' />):
          (<SingInAndSignUpPage/>)}
       />
      </Switch>
    </div>
  );
}}

const mapStateToProps = ({user})=>({
  currentUser:user.currentUser
});
const mapDispatchToProps = dispatch =>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(App) ;
