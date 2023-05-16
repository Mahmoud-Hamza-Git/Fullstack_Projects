import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './register.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, []);
  const { user, loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'AUTH_START' });
    try {
      const res = await axios.post('http://localhost:3000/api/auth/register', credentials);
      dispatch({ type: 'AUTH_SUCCESS', payload: res.data.details });
      navigate('/');
    } catch (err) {
      dispatch({ type: 'AUTH_FAILURE', payload: err.response.data });
    }
  };

  return (
    <>
      {!user && (
        <div className='register'>
          <div className='rContainer'>
            <Link to={'/'} style={{ textDecoration: 'none', color: '#000' }}>
              <h2 className='logo'>Booking</h2>
            </Link>
            <input
              type='text'
              placeholder='username'
              id='username'
              onChange={handleChange}
              className='rInput'
            />
            <input type='email' placeholder='email' id='email' onChange={handleChange} className='rInput' />
            <input
              type='password'
              placeholder='password'
              id='password'
              onChange={handleChange}
              className='rInput'
            />
            <button disabled={loading} onClick={handleClick} className='rButton'>
              Register
            </button>
            {error && <span>{error.message}</span>}
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
