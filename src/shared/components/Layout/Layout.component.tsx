import { Link, Outlet } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faDashboard, faList } from "@fortawesome/free-solid-svg-icons";

import { logo } from "../../../assets";
import { NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <>
        <Link to={"/"}>
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <img src={logo} className="w-1/12 me-2" alt="Logo Website" />
                <span className="font-bold text-black">Todo List</span>
            </button>
        </Link>

        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 font-latto h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
                <Link to={"/"}>
                    <button className="flex items-center ps-2.5 mb-5">
                        <img src={logo} alt="Logo Website" className="w-1/6 me-2"/>
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Todo List</span>
                    </button>
                </Link>
                <ul className="space-y-2 font-medium">
                    <li>
                        <NavLink
                            to={'/'} 
                            end 
                            className={({isActive}) => isActive ? 
                            "active flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700 group" : 
                            "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}>
                            <div className="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 group-has-[.active]:text-gray-900 dark:group-hover:text-white">
                                <FontAwesomeIcon icon={faDashboard}/>
                            </div>
                            <span className="ms-3">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/todos'} 
                            end 
                            className={({isActive}) => isActive ? 
                            "active flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700 group" : 
                            "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}>
                            <div className="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 group-has-[.active]:text-gray-900 dark:group-hover:text-white">
                                <FontAwesomeIcon icon={faList}/>
                            </div>
                            <span className="ms-3">Todos</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>

        <div className="p-4 sm:ml-64 bg-gray-50 min-h-screen">
            <Outlet/>
        </div>
    </>
  )
}
