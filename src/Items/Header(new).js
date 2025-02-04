import React, { useState } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <div className="flex justify-center items-center h-30">
        <div className="flex justify-center special-header p-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${
            activeTab === tab.id
              ? "bg-gray-500 text-white"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          {tab.label}
        </button>
      ))}
      </div>
    </div>
  );
};

export default Header;
