import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navlinks } from "../constants";
import {
  LayoutDashboard,
  User,
  LogOut,
  PlusCircle,
  LucideProps,
} from "lucide-react";

const icons: Record<string, React.FC<LucideProps>> = {
  dashboard: LayoutDashboard,
  campaign: PlusCircle,
  profile: User,
  logout: LogOut,
};

interface IconProps {
  name: string;
  isActive: boolean;
}

const Icon: React.FC<IconProps> = ({ name, isActive }) => {
  const LucideIcon = icons[name];
  return (
    <div
      className={`flex mt-2 items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors duration-300 ${
        isActive ? "bg-dark-700" : "hover:bg-dark-600"
      }`}
    >
      {LucideIcon && <LucideIcon className="text-gray-300" size={20} />}
      <span className="text-gray-300 capitalize">{name}</span>
    </div>
  );
};

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 glass-effect z-30">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8 text-white">CrowdFund</h1>
        <nav className="space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase text-gray-400 font-semibold">
              Menu Principal
            </p>
            {navlinks.map((link) => {
              const isActive = location.pathname === link.link;
              return (
                <Link to={link.link} key={link.name}>
                  <Icon name={link.name} isActive={isActive} />
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
