import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useUser from '../hooks/useUser';
import { NavLink } from 'react-router-dom';

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [users] = useUser();
  const currentUser = users.filter(item => item?.email === user?.email)
  return (
    <div className='mt-20'>
      <h3 className="text-sm text-center my-8 text-red-500">
        More Details Commign soon now.........
      </h3>
      <div className="text-center mb-5">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-emerald-600 ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL} />
          </div>
        </div>
        <h3 className="text-xl font-semibold mt-2 uppercase">
          {user?.displayName}
        </h3>
        <h3 className="text-md mt-2 lowercase">{user?.email}</h3>
      </div>

    {/* current user role system */}

      <div className="text-center space-x-5 ">
        {currentUser?.role === "instructor" && (
          <>
            <NavLink to="/dashboard/addclass">
              <button className="btn btn-info btn-outline">Add A Class</button>
            </NavLink>
            <NavLink to="/dashboard/ins-myclass">
              <button className="btn btn-primary btn-outline">My Class</button>
            </NavLink>
          </>
        )}
        {currentUser?.role === "student" && (
          <>
            <NavLink to="/dashboard/selectclass">
              <button className="btn btn-info btn-outline">
                My Selected Class
              </button>
            </NavLink>
            <NavLink to="/dashboard/elrollClass">
              <button className="btn btn-primary btn-outline">
                My Enrolled Classes
              </button>
            </NavLink>
          </>
        )}
        {currentUser?.role === "admin" && (
          <>
            <NavLink to="/dashboard/manegeuser">
              <button className="btn btn-info btn-outline">Manage Users</button>
            </NavLink>
            <NavLink to="/dashboard/manegeclass-admin">
              <button className="btn btn-primary btn-outline">
                Manage Classes
              </button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;