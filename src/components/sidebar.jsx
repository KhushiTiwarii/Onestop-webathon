import React from 'react';
import {
  LayoutDashboard,
  File as FileIcon,
  Book as BookIcon,
  Search as SearchIcon,
  Briefcase as BriefcaseIcon,
} from 'lucide-react';

const routes = [
  {
    label: "DASHBOARD",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-white-500",
  },
  {
    label: "AI Resume Scanner",
    icon: FileIcon,
    href: "/resume-scanner",
    color: "text-green-600",
  },
  {
    label: "Placement Resources",
    icon: BookIcon,
    href: "/placement-resources",
    color: "text-red-500",
  },
  {
    label: "Interview Preparation",
    icon: SearchIcon,
    href: "/interview-preparation",
    color: "text-yellow-300",
  },
  {
    label: "Job Search",
    icon: BriefcaseIcon,
    href: "/job-search",
    color: "text-blue-200",
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full bg-purple-950">
      <div className="px-3 py-9 flex-1  justify-between space-y-4">
        {routes.map((route) => (
          <a
            key={route.href}
            href={route.href}
            className={`flex items-center p-4 rounded-md bg-white text-white backdrop-blur-md bg-opacity-20 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl space-x-3`}
          >
            <route.icon className={`w-9 h- ${route.color}`} />
            <span className="text-white">{route.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
