import classes from './footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.fLists}>
        <ul className={classes.fList}>
          <li className={classes.fListItem}>Countries</li>
          <li className={classes.fListItem}>Regions</li>
          <li className={classes.fListItem}>Cities</li>
          <li className={classes.fListItem}>Districts</li>
          <li className={classes.fListItem}>Airports</li>
          <li className={classes.fListItem}>Hotels</li>
        </ul>
        <ul className={classes.fList}>
          <li className={classes.fListItem}>Homes </li>
          <li className={classes.fListItem}>Apartments </li>
          <li className={classes.fListItem}>Resorts </li>
          <li className={classes.fListItem}>Villas</li>
          <li className={classes.fListItem}>Hostels</li>
          <li className={classes.fListItem}>Guest houses</li>
        </ul>
        <ul className={classes.fList}>
          <li className={classes.fListItem}>Unique places to stay </li>
          <li className={classes.fListItem}>Reviews</li>
          <li className={classes.fListItem}>Unpacked: Travel articles </li>
          <li className={classes.fListItem}>Travel communities </li>
          <li className={classes.fListItem}>Seasonal and holiday deals </li>
        </ul>
        <ul className={classes.fList}>
          <li className={classes.fListItem}>Car rental </li>
          <li className={classes.fListItem}>Flight Finder</li>
          <li className={classes.fListItem}>Restaurant reservations </li>
          <li className={classes.fListItem}>Travel Agents </li>
        </ul>
        <ul className={classes.fList}>
          <li className={classes.fListItem}>Curtomer Service</li>
          <li className={classes.fListItem}>Partner Help</li>
          <li className={classes.fListItem}>Careers</li>
          <li className={classes.fListItem}>Sustainability</li>
          <li className={classes.fListItem}>Press center</li>
          <li className={classes.fListItem}>Safety Resource Center</li>
          <li className={classes.fListItem}>Investor relations</li>
          <li className={classes.fListItem}>Terms & conditions</li>
        </ul>
      </div>
      <div className={classes.fText}>Copyright © 2023 booking.</div>
    </div>
  );
};

export default Footer;
