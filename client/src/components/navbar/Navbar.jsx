import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import classes from './navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };
  return (
    <div className={classes.navbar}>
      <div className={classes.navContainer}>
        <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
          <div className={classes.logo}>Booking</div>
        </Link>
        {user ? (
          <div className={classes.navItems}>
            <span> {user.username}</span>
            <button className={classes.navButton} onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <div className={classes.navItems}>
            <Link to={'/register'}>
              <button className={classes.navButton}>Register</button>
            </Link>
            <Link to={'/login'}>
              <button className={classes.navButton}>Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
