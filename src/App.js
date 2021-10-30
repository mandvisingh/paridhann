import Homepage from './pages/homepage/Hompepage';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shopPage/shopPage';
import Header from './component/header/header';
import SignInSignUp from './pages/signin-signup/Signin-signup';
import { auth } from './firebase/firebase-util';
import {useState, useEffect} from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState({});



useEffect(() => {
  const unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
    setCurrentUser(user)
  })
  return unsubscribeFromAuth();
}, [currentUser]);

  return (
    <div className="App" style={{
      fontfamily: 'Open Sans Condensed',
      margin: '20px'
    }}>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/signin' component={SignInSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
