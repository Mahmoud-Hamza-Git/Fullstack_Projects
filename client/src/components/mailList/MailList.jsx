import classes from './mailList.module.css';

const MailList = () => {
  return (
    <div className={classes.mail}>
      <h1 className={classes.mailTitle}>Save time, save money!</h1>
      <span className={classes.mailDesc}>Sign up and we'll send the best deals to you</span>
      <div className={classes.mailInputContainer}>
        <input type='text' placeholder='Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
