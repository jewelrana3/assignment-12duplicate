
import { Link, NavLink, Outlet } from 'react-router-dom';
import useUser from '../hooks/useUser';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext)
    const [users] = useUser();

    const currentUser = users.filter((current) => current?.email === user?.email)
    const currentUserRole = currentUser?.role;
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then((err) => {
                console.log(err)
            })
    }
    const listItem =
        <>

            {/* <div className="md:flex sm:inline-block text-center space-x-5">
                {currentUser?.role === "instructor" && (
                    <>

                        <li className="bg-slate-200 mt-2   text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/">User Instructor frsdfs</NavLink></li>
                        <li className="bg-slate-200 mt-2   text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/addclass">Add Class</NavLink></li>
                        <li className="bg-slate-200 mt-2   text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/ins-myclass">My Class</NavLink></li>
                    </>
                )}
                {currentUser?.role === "student" && (
                    <>
                        <li className="bg-slate-200 mt-2   text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/">User Student</NavLink></li>
                        <li className="bg-slate-200 mt-2   text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/selectclass">Select Class</NavLink></li>
                        <li className="bg-slate-200 mt-2   text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/myclass">My Inroll Class</NavLink></li>
                        <li className="bg-slate-200 mt-2 text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/history">Payment history</NavLink></li>
                    </>
                )}
                {currentUser?.role === "admin" && (
                    <>
                        <li className="bg-slate-200 mt-2   text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/">User Admin</NavLink></li>
                        <li className="bg-slate-200 mt-2  text-slate-500 rounded-xl font-semibold"><NavLink to="/dashboard/manegeclass-admin">Manege Class</NavLink></li>
                        <li className="bg-slate-200 mt-2  text-slate-500 rounded-xl font-semibold"><NavLink to="/dashboard/manegeuser">Manege User</NavLink></li>

                    </>
                )}
            </div> */}
            <div className="md:flex sm:inline-block text-center space-x-5">
                <>

                    <li className="bg-slate-200 mt-2   text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/">User Student</NavLink></li>
                    <li className="bg-slate-200 mt-2   text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/select">Select Class</NavLink></li>
                    <li className="bg-slate-200 mt-2   text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/myclass">My Inroll Class</NavLink></li>
                    <li className="bg-slate-200 mt-2 text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/history">Payment history</NavLink></li>
                </>
            </div>

            <li className="bg-slate-200 mt-2  text-slate-500 rounded-xl font-semibold ml-2">
                <NavLink to="/"><span></span>Home</NavLink>
            </li>
            <li>
                <Link to='/login'><button onClick={handleLogOut} className="btn btn-outline">Log Out</button></Link>
            </li>
        </>

    return (
        <>

            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar py-5  bg-blue-200">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block w-6 h-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 text-lg md:text-xl lg:text-2xl font-semibold">
                            <a href="/" className="flex items-center">
                                <span>
                                    <img
                                        className="w-8 h-8 mr-2 rounded"
                                        src="https://i.ibb.co/RD4sN8N/Untitled.png"
                                        alt=""
                                    />
                                </span>
                                <span className="text-orange-600">Sports</span>{" "}
                                <span className="text-blue-600"> Easy</span>
                            </a>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu flex items-center menu-horizontal">
                                {/* Navbar menu content here */}
                                {listItem}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 lg:hidden h-full bg-blue-300">
                        {/* Sidebar content here */}
                        {listItem}
                    </ul>
                </div>

            </div>
            <Outlet></Outlet>
        </>
    );
};

export default Dashboard;