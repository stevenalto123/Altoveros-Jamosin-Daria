import { Link } from "react-router-dom";
import { useSidebar } from "../contexts/SidebarContext";

const AppSidebar = () => {
    const { isOpen, toggleSidebar } = useSidebar();

    const sidebarItems = [
        { path: "/", text: "Gender" },
        { path: "/users", text: "User" },
    ];

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/40 sm:hidden"
                    onClick={toggleSidebar}
                />
            )}

            <aside
                id="top-bar-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                    sm:translate-x-0
                    bg-[#1e2536] border-r border-[#2e3650]`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto">
                    <ul className="space-y-1 font-medium">
                        {sidebarItems.map((sidebarItem, index) => (
                            <li key={index}>
                                <Link
                                    to={sidebarItem.path}
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <span className="ms-3">{sidebarItem.text}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default AppSidebar;