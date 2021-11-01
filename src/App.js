import Homepage from './pages/homepage/Hompepage';
import {Route, Switch, Redirect} from 'react-router-dom';
import ShopPage from './pages/shopPage/shopPage';
import Header from './component/header/header';
import SignInSignUp from './pages/signin-signup/Signin-signup';
import { auth, createUserProfileDocument } from './firebase/firebase-util';
import {useEffect} from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-action';
import CheckoutPage from './pages/checkoutpage/CheckoutPage';

function App(props) {
const {currentUser} = props;
useEffect(() => {
  const {setCurrentUser} = props;
  const unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
  if(userAuth){
    const userRef = await createUserProfileDocument(userAuth);

    userRef.onSnapshot(snapshot=>{
      setCurrentUser({
        id: snapshot.id,
        ...snapshot.data()
      })
    })
  } else {setCurrentUser({id: null})}
  })
  return function cleanup(){unsubscribeFromAuth();}
}, [currentUser.id]);

  return (
    <div className="App" style={{
      fontfamily: 'Open Sans Condensed',
      margin: '20px'
    }}>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/signin' render={()=> currentUser.id ? (<Redirect to='/'/>) : (<SignInSignUp/>)}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = ({user})=> ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
