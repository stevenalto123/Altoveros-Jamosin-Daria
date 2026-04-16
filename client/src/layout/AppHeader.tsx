import { Link } from "react-router-dom";
import { useHeader } from "../contexts/HeaderContext";
import { useSidebar } from "../contexts/SidebarContext";

const AppHeader = () => {
    const { isOpen, toggleUserMenu } = useHeader();
    const { toggleSidebar } = useSidebar();

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-40" onClick={toggleUserMenu} />
            )}

            <nav className="fixed top-0 z-50 w-full bg-[#1e2536] border-b border-[#2e3650]">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            {/* Hamburger – mobile only */}
                            <button
                                data-drawer-target="top-bar-sidebar"
                                data-drawer-toggle="top-bar-sidebar"
                                aria-controls="top-bar-sidebar"
                                type="button"
                                onClick={toggleSidebar}
                                className="sm:hidden text-gray-300 bg-transparent border border-transparent hover:bg-[#2e3650] focus:ring-2 focus:ring-[#3a4460] rounded p-2 focus:outline-none"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
                                </svg>
                            </button>

                            {/* Logo */}
                            <a href="https://flowbite.com" className="flex items-center ms-2 md:me-24 gap-2">
                                <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="FlowBite Logo" />
                                <span className="self-center text-lg font-semibold whitespace-nowrap text-white">
                                    Flowbite
                                </span>
                            </a>
                        </div>

                        {/* Right side – avatar + dropdown */}
                        <div className="flex items-center">
                            <div className="relative flex items-center ms-3">
                                <button
                                    type="button"
                                    onClick={toggleUserMenu}
                                    className="flex text-sm rounded-full focus:ring-2 focus:ring-gray-500"
                                    aria-expanded={isOpen}
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="w-8 h-8 rounded-full object-cover"
                                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                        alt="user photo"
                                    />
                                </button>

                                {/* Dropdown */}
                                {isOpen && (
                                    <div
                                        className="absolute right-0 top-10 min-w-[200px] z-50 text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:bg-gray-700 dark:divide-gray-600"
                                        id="dropdown-user"
                                    >
                                        <div className="px-4 py-3" role="none">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white" role="none">
                                                Neil Sims
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400" role="none">
                                                neil.sims@flowbite.com
                                            </p>
                                        </div>
                                        <ul className="p-2 text-sm text-gray-700 dark:text-gray-200" role="none">
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="inline-flex items-center w-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded"
                                                    role="menuitem"
                                                >
                                                    Sign out
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default AppHeader;