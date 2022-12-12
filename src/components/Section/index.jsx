import { Switch, Route } from 'react-router-dom';
import SignupPage from '../../pages/SignupPage';
import LoginPage from '../../pages/LoginPage';
const Section = () => {
  return (
    <Switch>
      <Route path="/signup" exact component={SignupPage} />
      <Route path="/" exact component={LoginPage} />
    </Switch>
  );
};

export default Section;
