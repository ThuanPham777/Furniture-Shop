// src/components/AuthForm.js
import React, { useState } from 'react';

const AuthForm = ({ mode }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    ...(mode === 'signup' && { confirmPassword: '' }), // Include confirmPassword only for signup
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'signup' && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Handle form submission logic here (e.g., call API)
    console.log(
      `${mode === 'login' ? 'Logging in' : 'Signing up'} with data:`,
      formData
    );
  };

  return (
    <div className='auth-form w-80 mx-auto p-4 bg-white rounded shadow-md'>
      <h2 className='text-2xl font-bold mb-4 text-center'>
        {mode === 'login' ? 'Login' : 'Sign Up'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2'>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full p-2 border rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2'>Password</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='w-full p-2 border rounded'
            required
          />
        </div>
        {mode === 'signup' && (
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2'>Confirm Password</label>
            <input
              type='password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required
            />
          </div>
        )}
        <button
          type='submit'
          className='w-full bg-lime-500 text-white p-2 rounded hover:bg-lime-600'
        >
          {mode === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
