import React, { useEffect, useState } from 'react';
import api from '../lib/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import ProfileCard from '../components/ProfileCard';
import ProfileCardSkeleton from '../components/ProfileCardSkeleton';

const Home = () => {
  const [usersList, setUsersList] = useState([]);

  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();

  const handleUsersList = async () => {
    setLoading(true);
    try {
      const { data, status } = await api.get(`/api/users?page=${currentPage}`);
      if (data?.data && status === 200) {
        setTotalPages(data?.total_pages);
        setUsersList(data?.data);
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

  const handleUserEdit = (user) => {
    if (user) {
      navigate(`/edit/${user.id}`, { state: { user } });
    }
  };

  useEffect(() => {
    handleUsersList();
  }, [currentPage]);

  return (
    <div className='w-full h-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full'>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <ProfileCardSkeleton key={index} />
            ))
          : usersList?.map((user) => (
              <ProfileCard
                key={user.id}
                name={user.first_name + ' ' + user.last_name}
                avatarUrl={user.avatar}
                onClick={() => handleUserEdit(user)}
              />
            ))}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Home;
