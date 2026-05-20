import {
  Bell,
  Menu,
  Moon,
  Search,
  Sun,
} from "lucide-react";
import { useAppSelector } from "../../hooks/redux";

interface NavbarProps {
  setOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

const Navbar = ({
  setOpen,
}: NavbarProps) => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle( "dark");};
    const user = useAppSelector((state)=>state.auth.user)

  return (
    <header className="h-16 sticky top-0 z-30 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b border-gray-200 dark:border-zinc-800 px-4 md:px-6 flex items-center justify-between">
      
      {/* Left Side */}
      <div className="flex items-center gap-4 flex-1">
        
        {/* Mobile Menu */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-gray-700 dark:text-gray-300"
        >
          <Menu size={24} />
        </button>

        {/* Search */}
        <div className="hidden md:flex items-center gap-3 w-full max-w-md bg-gray-100 dark:bg-zinc-800 px-4 py-2.5 rounded-2xl border border-transparent focus-within:border-gray-300 dark:focus-within:border-zinc-700 transition-all">
          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Search leads..."
            className="bg-transparent w-full outline-none text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3 md:gap-4">
        
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all"
        >
          <Moon
            size={18}
            className="hidden dark:block"
          />

          <Sun
            size={18}
            className="dark:hidden"
          />
        </button>

        {/* Notifications */}
        <button className="relative w-10 h-10 rounded-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all">
          <Bell size={18} />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500" />
        </button>

        {/* User */}
        <div className="flex items-center gap-3 pl-2">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {user?.name}
            </p>

            <p className="text-xs text-gray-500">
              {user?.role}
            </p>
          </div>

          <div className="w-11 h-11 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold shadow-sm">
            A
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;