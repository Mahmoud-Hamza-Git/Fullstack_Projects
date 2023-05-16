import useFetch from '../../hooks/useFetch';
import classes from './featuredProperties.module.css';

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch('http://localhost:3000/api/hotels/?limit=2');
  return (
    <div className={classes.fp}>
      {loading ? (
        'loading'
      ) : (
        <>
          {data.length > 0 &&
            data.map((item) => (
              <div className={classes.fpItem} key={item._id}>
                <img src={item.photos[0]} alt='' className={classes.fpImg} />
                <span className={classes.fpName}>{item.name}</span>
                <span className={classes.fpCity}>{item.city}</span>
                <span className={classes.fpPrice}>Starting from ${item.cheapestPrice}</span>
                {item.rating && (
                  <div className={classes.fpRating}>
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
