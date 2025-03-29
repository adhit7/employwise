import React, { useState } from 'react';
import api from '../lib/api';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const { login } = useUserContext();
  const location = useLocation();
  const redirectPath = location.state?.from || '/';
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = formValues;
    const requestBody = { email, password };
    try {
      const { data: { token } = {} } = await api.post(
        '/api/login',
        requestBody
      );
      if (token) {
        login(token);
        navigate(redirectPath, { replace: true });
        setFormValues({
          email: '',
          password: '',
        });
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.error || error?.message;
      console.log('Login', error?.response, error?.response?.data?.error);

      toast.error(errorMessage, {
        position: 'top-right',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className='h-screen w-screen flex flex-col justify-center
 items-center bg-gray-100 gap-y-6 sm:p-0 px-3'
    >
      <div>
        <h1 className='text-2xl sm:text-4xl font-semibold text-center text-gray-800'>
          Login
        </h1>
      </div>
      <div className='flex justify-center items-center w-full sm:w-[28rem] sm:h-70 bg-white rounded shadow-xl'>
        <form className='w-full px-6' onSubmit={handleLogin}>
          <div className='my-4'>
            <label htmlFor='email' className='block mb-1 text-sm font-medium'>
              Email
            </label>
            <input
              type='email'
              name='email'
              placeholder='a@gamil.com'
              className='border border-gray-300 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emwise-green'
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='my-4'>
            <label
              htmlFor='password'
              className='block mb-1 text-sm font-medium'
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              placeholder='a*****'
              className='border  border-gray-300 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emwise-green'
              value={formValues.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className='my-4'>
            <button
              type='submit'
              className={`px-3 py-2 w-full rounded text-white transition duration-200 font-semibold cursor-pointer ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-emwise-green hover:bg-green-600'
              }`}
              disabled={loading}
            >
              {loading ? <Loader /> : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
