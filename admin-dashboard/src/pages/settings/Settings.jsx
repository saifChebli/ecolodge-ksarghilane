import { EyeIcon } from "lucide-react";
import React, { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");


  const [showPassword, setShowPassword] = useState(false);

  const tabs = [
    { id: "general", label: "General", icon: "Settings" },
    { id: "users", label: "Users & Permissions", icon: "Users" },
  ];


  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              defaultValue="info@grandhotel.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password 
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <EyeIcon
                className="absolute right-0 inset-y-2 float- mr-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const renderUsersSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Staff Members</h3>
          <button className="bg-[#1E40AF] cursor-pointer text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
            <span>Add User</span>
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"></div>
              <div>
                <p className="font-medium text-gray-900">John Doe</p>
                <p className="text-sm text-gray-500">Administrator</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                Active
              </span>
              <button className="text-gray-400 hover:text-gray-600"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return renderGeneralSettings();
      case "users":
        return renderUsersSettings();
      default:
        return renderGeneralSettings();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        {/* Page Header */}
        <div className="mb-8 rounded-lg shadow border border-gray-300 p-6">
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">
            Manage your account preferences and system configuration
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Settings Navigation */}
          <div className="lg:w-1/4">
            <nav className="bg-white rounded-lg border border-gray-200 p-4 space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 text-left ${
                    activeTab === tab.id
                      ? "bg-blue-50 text-[#1E40AF] border border-blue-200"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Settings Content */}
          <div className="lg:w-3/4">
            {renderTabContent()}

            {/* Save Button */}
            <div className="mt-6 flex justify-end">
              <button className="bg-[#1E40AF] cursor-pointer text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
