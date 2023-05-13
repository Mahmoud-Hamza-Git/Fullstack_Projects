import classes from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navContainer}>
        <div className={classes.logo}>lamabooking</div>
        <div className={classes.navItems}>
          <button className={classes.navButton}>Register</button>
          <button className={classes.navButton}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
