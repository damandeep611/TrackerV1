import {
  AdjustmentsVerticalIcon,
  ArchiveBoxIcon,
  CalendarDateRangeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  HandRaisedIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import { BuildingOfficeIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navigation = {
  favorites: [
    {
      id: "90day",
      title: "90 Days",
      icon: CalendarDateRangeIcon,
      path: "/docs",
    },
    {
      id: "systems",
      title: "Work Systems",
      icon: AdjustmentsVerticalIcon,
      path: "/systems",
    },
    {
      id: "targets",
      title: "Targets",
      icon: CurrencyDollarIcon,
      path: "/targets",
    },
    {
      id: "progress",
      title: "Progress Tracking",
      icon: DocumentTextIcon,
      path: "/progress",
    },
  ],
  mainMenu: [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: ChartBarIcon,
      path: "/dashboard",
    },
    {
      id: "daily",
      title: "Daily Work",
      icon: BuildingOfficeIcon,
      path: "/dashboard",
    },
    {
      id: "chat",
      title: "Chat AI",
      icon: ChatBubbleOvalLeftEllipsisIcon,
      path: "/dashboard",
    },
    {
      id: "support",
      title: "Support",
      icon: HandRaisedIcon,
      path: "/dashboard",
    },
    {
      id: "skills",
      title: "Skills Tracker",
      icon: PuzzlePieceIcon,
      path: "/dashboard/skills",
    },
    {
      id: "archive",
      title: "Archive Tasks",
      icon: ArchiveBoxIcon,
      path: "/dashboard",
    },
  ],
};

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div
      className={`relative h-screen bg-white border-r border-gray-300 transition-all duration-300 ease-linear ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* collapsable button and sidebar Heading */}
      <div className="flex items-center justify-between p-4">
        <div
          className={`flex items-center ${
            isCollapsed ? "justify-center w-full" : ""
          }`}
        >
          <div className="w-8 h-8 bg-yellow-400 rounded-lg" />
          {!isCollapsed && (
            <span className="ml-2 font-semibold">Dashboard</span>
          )}
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className=" absolute -right-3 top-7 bg-white border border-gray-300 rounded-full p-1 hover:bg-gray-100"
        >
          {isCollapsed ? (
            <ChevronRightIcon className="w-5 h-5" />
          ) : (
            <ChevronLeftIcon className="w-5 h-5" />
          )}
        </button>
      </div>
      <div></div>
      <div className="py-2 px-4">
        <div className="mb-8">
          <div className="text-xs font-semibold text-gray-400 mb-2">
            {!isCollapsed && "Favorites"}
          </div>
          {navigation.favorites.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-600"
            >
              <item.icon className="w-5 h-5" />
              {!isCollapsed && <span className="ml-3">{item.title}</span>}
            </a>
          ))}
        </div>
        {/*Main menu of sidebar  */}
        <div className="mb-8">
          <div className="text-xs font-semibold text-gray-400 mb-2">
            {!isCollapsed && "Main Menu"}
          </div>
          <div>
            {navigation.mainMenu.map((item) => (
              <a
                key={item.id}
                href={item.path}
                className="flex items-center px-2 py-2 text-sm font-medium text-gray-600"
              >
                <item.icon className="w-5 h-5" />
                {!isCollapsed && <span className="ml-3">{item.title}</span>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
