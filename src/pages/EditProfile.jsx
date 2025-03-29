import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../lib/api';
import { toast } from 'react-toastify';

const EditProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user || null;

  const [formData, setFormData] = useState(user);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const validateForm = () => {
    if (
      !formData?.first_name ||
      !formData?.last_name ||
      !formData?.email ||
      !formData?.avatar
    ) {
      toast.error('All fields are required!', { position: 'top-right' });
      return false;
    }
    return true;
  };

  const handleEdit = async () => {
    if (!validateForm()) return;
    setLoading(true);
    try {
      const { data, status } = await api.put(`/api/users/${user.id}`, {
        ...formData,
      });
      if (data && status === 200) {
        toast.success('Successfully updated the details!', {
          position: 'top-right',
          onClose: () => navigate('/'),
        });
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.error || error?.message;
      toast.error(errorMessage, {
        position: 'top-right',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!validateForm()) return;
    setLoading(true);

    try {
      const { data, status } = await api.delete(`/api/users/${user.id}`);

      if (status === 204) {
        toast.success('Successfully deleted the user!', {
          position: 'top-right',
          onClose: () => navigate('/'),
        });
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.error || error?.message;
      toast.error(errorMessage, {
        position: 'top-right',
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return navigate('/');
  }

  return (
    <div className='h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-gray-200 mx-3'>
      <div className='w-full max-w-md bg-white rounded-lg shadow-lg p-6'>
        <h2 className='text-2xl font-semibold text-center text-gray-800'>
          Edit Profile
        </h2>

        <div className='mt-4'>
          <label className='block mb-1 text-sm font-medium'>First Name</label>
          <input
            type='text'
            name='first_name'
            value={formData.first_name}
            onChange={handleChange}
            className='border border-gray-300 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emwise-green'
            required
          />
        </div>

        <div className='mt-4'>
          <label className='block mb-1 text-sm font-medium'>Last Name</label>
          <input
            type='text'
            name='last_name'
            value={formData.last_name}
            onChange={handleChange}
            className='border border-gray-300 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emwise-green'
            required
          />
        </div>

        <div className='mt-4'>
          <label className='block mb-1 text-sm font-medium'>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='border border-gray-300 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emwise-green'
            required
          />
        </div>

        <div className='mt-4'>
          <label className='block mb-1 text-sm font-medium'>Avatar URL</label>
          <input
            type='text'
            name='avatarUrl'
            value={formData.avatar}
            onChange={handleChange}
            className='border border-gray-300 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emwise-green'
            required
          />
        </div>

        <div className='mt-6 flex justify-between'>
          <button
            onClick={handleEdit}
            className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 cursor-pointer'
            disabled={loading}
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer'
            disabled={loading}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
