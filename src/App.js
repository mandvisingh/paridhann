import Homepage from './pages/homepage/Hompepage';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shopPage/shopPage';
import Header from './component/header/header';

function App() {
  return (
    <div className="App" style={{
      'font-family': 'Open Sans Condensed'
    }}>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
