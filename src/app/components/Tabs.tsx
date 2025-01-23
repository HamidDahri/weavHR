"use client";

import { useState } from "react";

type TabId = "profile" | "dashboard" | "settings" | "contacts";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<TabId>("profile"); // Default active tab is 'profile'

  const handleTabClick = (tabId: TabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      {/* Tab Headers */}
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "profile" ? "border-blue-500" : ""
              }`}
              type="button"
              role="tab"
              onClick={() => handleTabClick("profile")}
            >
              Profile
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "dashboard" ? "border-blue-500" : ""
              }`}
              type="button"
              role="tab"
              onClick={() => handleTabClick("dashboard")}
            >
              Dashboard
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "settings" ? "border-blue-500" : ""
              }`}
              type="button"
              role="tab"
              onClick={() => handleTabClick("settings")}
            >
              Settings
            </button>
          </li>
          <li role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "contacts" ? "border-blue-500" : ""
              }`}
              type="button"
              role="tab"
              onClick={() => handleTabClick("contacts")}
            >
              Contacts
            </button>
          </li>
        </ul>
      </div>

      {/* Tab Content */}
      <div id="default-tab-content">
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === "profile" ? "block" : "hidden"
          }`}
          id="profile"
          role="tabpanel"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Profile tabs associated content
            </strong>
            .
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === "dashboard" ? "block" : "hidden"
          }`}
          id="dashboard"
          role="tabpanel"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Dashboard tabs associated content
            </strong>
            .
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === "settings" ? "block" : "hidden"
          }`}
          id="settings"
          role="tabpanel"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Settings tabs associated content
            </strong>
            .
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === "contacts" ? "block" : "hidden"
          }`}
          id="contacts"
          role="tabpanel"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Contacts tabs associated content
            </strong>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
