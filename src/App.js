import './App.css';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/" exact component={LoginPage} />
      </Switch>
      <footer className='footer'>
        <p>Copywright 2020 Bella Onojie.com</p>
      </footer>
    </>
  );
}

export default App;
