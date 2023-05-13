import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import classes from './home.module.css';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className={classes.homeContainer}>
        <Featured />
        <h1 className={classes.homeTitle}>Browse by property type</h1>
        <PropertyList />
        <h1 className={classes.homeTitle}>Home guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </>
  );
};

export default Home;
