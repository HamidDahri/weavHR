"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBriefcaseBlank,
  faGear,
} from "@fortawesome/pro-regular-svg-icons";
import { faGear as faGearSolid } from "@fortawesome/free-solid-svg-icons";
import { faBell as faBellSolid } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase as faBriefcaseBlankSolid } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Images } from "../ui/images";
import { useRouter, usePathname } from "next/navigation";

// export const Sidebar = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [activeMenu, setActiveMenu] = useState("Jobs");

//   const menuData = {
//     // Home: ["Posts", "Users"],
//     Home: [],
//     Account: ["Profile", "Settings"],
//     List: ["Profile", "Settings"],
//     File: ["Profile", "Settings"],
//     Settings: ["Staff", "Organization"],
//     Notifications: [],
//     Jobs: [],
//   };

//   const handleMenuClick = (menu: string, submenu: string) => {
//     console.log(menu);

//     setActiveMenu(menu);
//     router.push(`/${menu.toLowerCase()}/${submenu.toLowerCase()}`);
//   };

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState("");

  const menuData = {
    Home: [],
    Account: ["Profile", "Settings"],
    List: ["Profile", "Settings"],
    File: ["Profile", "Settings"],
    Settings: ["Staff", "Organization", "Clinics"],
    Notifications: [],
    Jobs: [],
  };

  // Synchronize `activeMenu` with the URL
  useEffect(() => {
    const pathSegments = pathname.split("/").filter(Boolean); // Split the pathname and remove empty parts
    if (pathSegments.length > 0) {
      const currentMenu = Object.keys(menuData).find((menu) =>
        pathSegments[0].toLowerCase().includes(menu.toLowerCase())
      );
      if (currentMenu) {
        setActiveMenu(currentMenu);
      }
    }
  }, [pathname]);

  const handleMenuClick = (menu: string, submenu: string) => {
    setActiveMenu(menu);
    router.push(`/${menu.toLowerCase()}/${submenu.toLowerCase()}`);
  };

  // useEffect(() => {
  //   router.push(`/jobs`);
  // }, []);

  return (
    <div className="flex flex-col justify-between h-screen transition-all duration-300 border-r">
      <div>
        <div className="p-3 transition-opacity duration-300">
          {menuData[activeMenu] && menuData[activeMenu].length > 0 ? (
            <div className="flex items-center gap-3">
              <Image
                alt=""
                className="w-12 transition-all duration-300"
                src={Images.dashPageImages.remediLogo}
              />
              <Image
                alt=""
                className="mb-1 transition-all duration-300 w-28"
                src={Images.dashPageImages.remediText}
              />
            </div>
          ) : (
            <Image
              alt=""
              className="w-12 transition-all duration-300"
              src={Images.dashPageImages.remediLogo}
            />
          )}
        </div>
        <div className="flex mt-6 transition-all duration-300">
          <div className="flex flex-col items-center w-16 pb-8 space-y-4 transition-transform duration-300 bg-white">
            {/* <button
              onClick={() => handleMenuClick("Home", "")}
              className={`p-2 transition-colors duration-300 flex items-center justify-center rounded-lg ${
                activeMenu === "Home"
                  ? "bg-purple-100 text-primary"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <FontAwesomeIcon icon={faGear} className="w-5 h-5" />
            </button> */}

            <button
              onClick={() => handleMenuClick("Jobs", "")}
              className={`p-2 transition-colors duration-300 flex items-center justify-center rounded-lg ${
                activeMenu === "Jobs"
                  ? "bg-purple-100 text-primary"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <FontAwesomeIcon
                icon={
                  activeMenu === "Jobs"
                    ? faBriefcaseBlankSolid
                    : faBriefcaseBlank
                }
                className="w-5 h-5"
              />
            </button>

            <button
              onClick={() => handleMenuClick("Notifications", "")}
              className={`p-2 transition-colors duration-300 flex items-center justify-center rounded-lg ${
                activeMenu === "Notifications"
                  ? "bg-purple-100 text-primary"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <FontAwesomeIcon
                icon={activeMenu === "Notifications" ? faBellSolid : faBell}
                className="w-5 h-5"
              />
            </button>
            <button
              onClick={() => handleMenuClick("Settings", "Staff")}
              className={`p-2 transition-colors duration-300 flex items-center justify-center rounded-lg ${
                activeMenu === "Settings"
                  ? "bg-purple-100 text-primary"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <FontAwesomeIcon
                icon={activeMenu === "Settings" ? faGearSolid : faGear}
                className="w-5 h-5"
              />
            </button>
          </div>

          {menuData[activeMenu] && menuData[activeMenu].length > 0 && (
            <div className="w-48 pb-8 overflow-y-auto transition-all duration-300 ease-in-out bg-white">
              <div className="px-5 text-lg font-medium text-gray-800">
                {activeMenu}
              </div>
              <div className="p-4 pt-2 space-y-1">
                {menuData[activeMenu].map((submenu) => (
                  <button
                    key={submenu}
                    onClick={() => handleMenuClick(activeMenu, submenu)}
                    className={`flex items-center w-full px-5 py-2 transition-colors duration-300 rounded-lg ${
                      pathname.startsWith(
                        `/${activeMenu.toLowerCase()}/${submenu.toLowerCase()}`
                      )
                        ? "bg-purple-100 text-primary"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-sm font-medium">{submenu}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <div className="px-3 pb-4 transition-opacity duration-300">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image
              className="w-10 h-10 transition-transform duration-300 border border-gray-200 rounded-full"
              src="/images/avatar.png"
              alt=""
              width={40}
              height={40}
            />
            <span className="absolute bottom-0 left-7 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
          </div>
          {menuData[activeMenu].length > 0 && (
            <div>
              <h2 className="text-sm font-semibold text-gray-900">Richelle</h2>
              <h3 className="text-sm text-gray-700">richelle@remdi.com</h3>
            </div>
          )}
        </div>
      </div> */}
    </div>
  );
};
