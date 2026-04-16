import { Link } from "react-router-dom";
import { useSidebar } from "../contexts/SidebarContext";

const AppSidebar = () => {
    const { isOpen, toggleSidebar } = useSidebar();

    const sidebarItems = [
        { path: "#", text: "Gender List" },
        { path: "#", text: "User List" },
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
                        {sidebarItems.map((item) => (
                            <li key={item.text}>
                                <Link
                                    to={item.path}
                                    className="flex items-center px-3 py-2.5 text-sm text-gray-300 rounded hover:bg-[#2e3650] hover:text-white transition-colors"
                                >
                                    <span>{item.text}</span>
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