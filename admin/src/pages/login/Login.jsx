import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './login.scss';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const navigate = useNavigate();

  useEffect(() => {
    console.log('😀😀😀');
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
      const res = await axios.post('http://localhost:5000/api/auth/login', credentials);
      if (res.data.isAdmin) {
        dispatch({ type: 'AUTH_SUCCESS', payload: res.data.details });
        navigate('/');
      } else {
        dispatch({ type: 'AUTH_FAILURE', payload: { message: 'you are not allowed!' } });
      }
    } catch (err) {
      dispatch({ type: 'AUTH_FAILURE', payload: err.response.data });
    }
  };

  return (
    <>
      {!user && (
        <div className='login'>
          <div className='lContainer'>
            <h2 className='logo'>Admin</h2>
            <input
              type='text'
              placeholder='username'
              id='username'
              onChange={handleChange}
              className='lInput'
            />
            <input
              type='password'
              placeholder='password'
              id='password'
              onChange={handleChange}
              className='lInput'
            />
            <button disabled={loading} onClick={handleClick} className='lButton'>
              Login
            </button>
            {error && <span>{error.message}</span>}
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
