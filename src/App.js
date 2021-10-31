import Homepage from './pages/homepage/Hompepage';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shopPage/shopPage';
import Header from './component/header/header';
import SignInSignUp from './pages/signin-signup/Signin-signup';
import { auth, createUserProfileDocument } from './firebase/firebase-util';
import {useState, useEffect} from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState({id: null});

useEffect(() => {
  const unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
    console.log('userAuth', userAuth)
  if(userAuth){
    const userRef = await createUserProfileDocument(userAuth);

    userRef.onSnapshot(snapshot=>{
      setCurrentUser({
        id: snapshot.id,
        ...snapshot.data()
      })
    })
  } else {setCurrentUser({id: null})}
    console.log(currentUser)
  })
  return function cleanup(){unsubscribeFromAuth();}
}, [currentUser.id]);

  return (
    <div className="App" style={{
      fontfamily: 'Open Sans Condensed',
      margin: '20px'
    }}>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/signin' component={SignInSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
