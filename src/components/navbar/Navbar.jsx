import classes from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navContainer}>
        <div className={classes.logo}>lamabooking</div>
      </div>
      <div className={classes.navItems}></div>
    </div>
  );
};

export default Navbar;
