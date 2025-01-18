"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGridRound2,
  faClipboardQuestion,
  faGear,
} from "@fortawesome/pro-regular-svg-icons";
import Image from "next/image";
import { faList, faFileChartColumn } from "@fortawesome/pro-light-svg-icons";
import { Images } from "../../ui/images";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("Settings"); // Main menu state
  const [activeSubmenu, setActiveSubmenu] = useState("Staff"); // Submenu state

  // Data for rendering submenus and their respective content
  const menuData = {
    Home: {
      submenus: ["Posts", "Users"],
      data: {
        Posts: "This is the Posts data.",
        Users: "This is the Users data.",
      },
    },
    Account: {
      submenus: ["Profile", "Settings"],
      data: {
        Profile: "This is the Profile data.",
        Settings: "This is the Settings data.",
      },
    },
    List: {
      submenus: ["Profile", "Settings"],
      data: {
        Profile: "This is the Profile data.",
        Settings: "This is the Settings data.",
      },
    },
    File: {
      submenus: ["Profile", "Settings"],
      data: {
        Profile: "This is the Profile data.",
        Settings: "This is the Settings data.",
      },
    },
    Groups: {
      submenus: ["Posts", "Users"],
      data: {
        Posts: "This is the Posts data.",
        Users: "This is the Users data.",
      },
    },
    Locations: {
      submenus: ["Profile", "Settings"],
      data: {
        Profile: "This is the Profile data.",
        Settings: "This is the Settings data.",
      },
    },
    Languages: {
      submenus: ["Profile", "Settings"],
      data: {
        Profile: "This is the Profile data.",
        Settings: "This is the Settings data.",
      },
    },
    Skills: {
      submenus: ["Profile", "Settings"],
      data: {
        Profile: "This is the Profile data.",
        Settings: "This is the Settings data.",
      },
    },
    Staff: {
      submenus: ["Profile", "Settings"],
      data: {
        Profile: "This is the Profile data.",
        Settings: "This is the Settings data.",
      },
    },
    Classifications: {
      submenus: ["Profile", "Settings"],
      data: {
        Profile: "This is the Profile data.",
        Settings: "This is the Settings data.",
      },
    },
    Roles: {
      submenus: ["Posts", "Users"],
      data: {
        Posts: "This is the Posts data.",
        Users: "This is the Users data.",
      },
    },
    Departments: {
      submenus: ["Profile", "Settings"],
      data: {
        Profile: "This is the Profile data.",
        Settings: "This is the Settings data.",
      },
    },
    Employment: {
      submenus: ["Profile", "Settings"],
      data: {
        Profile: "This is the Profile data.",
        Settings: "This is the Settings data.",
      },
    },
    Settings: {
      submenus: ["Profile", "Staff", "Clinics", "Jobs", "Lookup"],
      data: {
        Profile: "This is the Profile data.",
        Staff: (
          <div>
            <h2>Staff Component</h2>
          </div>
        ),
        Clinics: "This is the Clinics data.",
        Jobs: "This is the Jobs data.",
        Lookup: "This is the Lookup data.",
      },
    },
  };

  const handleMenuClick = (menu: any) => {
    setActiveMenu(menu);
    // Reset submenu to the first one when switching main menu
    setActiveSubmenu(Object.keys(menuData[menu].data)[0]);
  };

  const handleSubmenuClick = (submenu) => {
    setActiveSubmenu(submenu);
  };

  return (
    <div className="flex">
      <div className="flex flex-col justify-between h-screen border-r">
        <div className="">
          <div className="p-3 ">
            <Image
              alt=""
              className="w-32"
              src={Images.authPageImages.logoColor}
            ></Image>
          </div>
          <div className="flex mt-6">
            <div className="flex flex-col items-center w-16 pb-8 space-y-4 bg-white ">
              {/* Home Menu Button with FontAwesome Icon */}
              <button
                onClick={() => handleMenuClick("Home")}
                className={`p-2 transition-colors flex items-center justify-center duration-200  rounded-lg ${
                  activeMenu === "Home"
                    ? "bg-purple-100 text-primary"
                    : "text-gray-500  hover:bg-gray-100 "
                }`}
              >
                <FontAwesomeIcon icon={faGridRound2} className="w-5 h-5 " />
              </button>

              {/* Account Menu Button with FontAwesome Icon */}
              <button
                onClick={() => handleMenuClick("Account")}
                className={`py-2  px-2.5 transition-colors flex items-center justify-center duration-200 rounded-lg ${
                  activeMenu === "Account"
                    ? "bg-purple-100 text-primary"
                    : "text-gray-500  hover:bg-gray-100 "
                }`}
              >
                <FontAwesomeIcon
                  icon={faClipboardQuestion}
                  className="w-5 h-5 align-bottom"
                />
              </button>
              <button
                onClick={() => handleMenuClick("List")}
                className={`py-2  px-2.5 transition-colors flex items-center justify-center duration-200 rounded-lg ${
                  activeMenu === "List"
                    ? "bg-purple-100 text-primary"
                    : "text-gray-500  hover:bg-gray-100 "
                }`}
              >
                <FontAwesomeIcon
                  icon={faList}
                  className="w-5 h-5 align-bottom"
                />
              </button>
              <button
                onClick={() => handleMenuClick("File")}
                className={`py-2  px-2.5 transition-colors flex items-center justify-center duration-200 rounded-lg ${
                  activeMenu === "File"
                    ? "bg-purple-100 text-primary"
                    : "text-gray-500  hover:bg-gray-100 "
                }`}
              >
                <FontAwesomeIcon
                  icon={faFileChartColumn}
                  className="w-5 h-5 align-bottom"
                />
              </button>
              <button
                onClick={() => handleMenuClick("Settings")}
                className={`py-2  px-2.5 transition-colors duration-200 rounded-lg ${
                  activeMenu === "Settings"
                    ? "bg-purple-100 text-primary"
                    : "text-gray-500  hover:bg-gray-100 "
                }`}
              >
                <FontAwesomeIcon
                  icon={faGear}
                  className="w-5 h-5 align-bottom"
                />
              </button>
            </div>

            {/* Submenu and Content */}
            <div className="w-48 pb-8 overflow-y-auto bg-white ">
              {/* Submenu */}
              <div className="px-5 text-lg font-medium text-gray-800 ">
                {activeMenu}
              </div>
              <div className="p-4 pt-2 space-y-1">
                {menuData[activeMenu].submenus.map((submenu) => (
                  <button
                    key={submenu}
                    onClick={() => handleSubmenuClick(submenu)}
                    className={`flex items-center w-full px-5 py-2 transition-colors duration-200 rounded-lg ${
                      activeSubmenu === submenu
                        ? "bg-purple-100 text-primary "
                        : "text-gray-500  hover:bg-gray-100 "
                    }`}
                  >
                    <span className="text-sm font-medium">{submenu}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 pb-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Image
                className="w-10 h-10 border border-gray-200 rounded-full"
                src={"/images/avatar.png"}
                alt=""
                width={500}
                height={500}
              ></Image>
              <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white  rounded-full"></span>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-gray-900">Richelle</h2>
              <h3 className="text-sm text-gray-700">richelle@remdi.com</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between w-full p-4 bg-white h-fit">
          <h2 className="font-bold text-slate-900">
            Good morning, <span className="font-normal">Richelle</span>
          </h2>

          <div className="flex items-center ">
            <div className="flex flex-col items-end border-r w-fit pe-4">
              <h3 className="text-base font-semibold text-slate-800">
                08:35 PM
              </h3>
              <span className="block text-xs leading-3 text-[#5F5F5F]">
                Fri, 18 Oct
              </span>
            </div>

            <div className="flex items-end gap-2 w-fit ps-3">
              <div className="flex flex-col items-end">
                <h3 className="text-base font-semibold text-slate-800">12</h3>
                <span className="block text-xs leading-3 text-[#5F5F5F]">
                  °C°F
                </span>
              </div>
              <Image
                alt="weather icon"
                src={Images.dashPageImages.weatherIcon}
              ></Image>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-50">
          <div className="px-5">
            <h2 className="text-lg font-medium text-gray-80">
              {activeSubmenu} Content
            </h2>
            <div className="mt-2 text-sm text-gray-600">
              {menuData[activeMenu].data[activeSubmenu]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
