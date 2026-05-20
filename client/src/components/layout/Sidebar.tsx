import {
    LayoutDashboard,
    Users,
    Moon,
    LogOut,
    X,
} from "lucide-react";
import { useDispatch } from "react-redux";

import {
    Link,
    useLocation,
    useNavigate,
} from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

interface SidebarProps {
    open: boolean;
    setOpen: React.Dispatch<
        React.SetStateAction<boolean>
    >;
}

const Sidebar = ({
    open,
    setOpen,
}: SidebarProps) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navLinks = [
        {
            title: "Dashboard",
            path: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Leads",
            path: "/leads",
            icon: Users,
        },
    ];

    const toggleTheme = () => {document.documentElement.classList.toggle("dark");};

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <>
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            <aside className={` fixed lg:static top-0 left-0 z-50 h-screen w-64 bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0" } `}>
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-zinc-800">
                    <div>
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                            GigFlow 
                        </h1>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            CRM Dashboard
                        </p>
                    </div>

                    <button
                        onClick={() => setOpen(false)}
                        className="lg:hidden text-gray-600 dark:text-gray-300"
                    >
                        <X size={22} />
                    </button>
                </div>

                <nav className="p-4 space-y-2">
                    {navLinks.map((link) => {
                        const isActive =
                            location.pathname ===
                            link.path;

                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`
                  flex items-center gap-3
                  px-4 py-3 rounded-xl
                  transition-all
                  ${isActive
                                        ? "bg-black text-white dark:bg-white dark:text-black"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
                                    }
                `}
                            >
                                <link.icon size={20} />

                                <span className="font-medium">
                                    {link.title}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-6 left-0 w-full px-4 space-y-3">
                    <button
                        onClick={toggleTheme}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all"
                    >
                        <Moon size={20} />

                        Toggle Theme
                    </button>

                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all" >
                        <LogOut size={20} />

                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;