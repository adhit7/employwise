import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import RequireUser from './components/auth/RequireUser';
import RequireVisitor from './components/auth/RequireVisitor';
import Login from './pages/Login';
import Home from './pages/Home';
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <div className='font-poppins w-screen min-h-screen bg-gray-200'>
      <Routes>
        <Route element={<RequireUser />}>
          <Route index path='/' element={<Home />} />
          <Route path='/edit/:id' element={<EditProfile />} />
        </Route>

        <Route element={<RequireVisitor />}>
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
