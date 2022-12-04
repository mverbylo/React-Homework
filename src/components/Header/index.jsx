import { Link, Switch, Route } from 'react-router-dom';
import styles from './Header.module.scss';
const { header, link } = styles;

const Header = () => {
  return (
    <header className={header}>
      <Link to="/">
        <img src="https://www.squadhelp.com/img/logo.png" alt="logo" />
      </Link>
      <Switch>
        <Route path="/signup" exact>
          <Link className={link} to="/">
            Login
          </Link>
        </Route>
        <Route path="/" exact>
          <Link className={link} to="/signup">
            Signup
          </Link>
        </Route>
      </Switch>
    </header>
  );
};

export default Header;
