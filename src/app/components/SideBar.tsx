// "use client";
// import { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBell,
//   faBriefcaseBlank,
//   faGear,
// } from "@fortawesome/pro-regular-svg-icons";
// import { faGear as faGearSolid } from "@fortawesome/free-solid-svg-icons";
// import { faBell as faBellSolid } from "@fortawesome/free-solid-svg-icons";
// import { faBriefcase as faBriefcaseBlankSolid } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";
// import { Images } from "../ui/images";
// import { useRouter, usePathname } from "next/navigation";

// export const Sidebar = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [activeMenu, setActiveMenu] = useState("");

//   const menuData = {
//     Home: [],
//     Account: ["Profile", "Settings"],
//     List: ["Profile", "Settings"],
//     File: ["Profile", "Settings"],
//     Settings: ["Staff", "Organization", "Clinics", "Lookups", "Job Settings"],
//     Notifications: [],
//     Jobs: [],
//   };

//   // Synchronize `activeMenu` with the URL
//   useEffect(() => {
//     const pathSegments = pathname.split("/").filter(Boolean); // Split the pathname and remove empty parts
//     if (pathSegments.length > 0) {
//       const currentMenu = Object.keys(menuData).find((menu) =>
//         pathSegments[0].toLowerCase().includes(menu.toLowerCase())
//       );
//       if (currentMenu) {
//         setActiveMenu(currentMenu);
//       }
//     }
//   }, [pathname]);

//   const handleMenuClick = (menu: string, submenu: string) => {
//     setActiveMenu(menu);
//     router.push(`/${menu.toLowerCase()}/${submenu.toLowerCase()}`);
//   };

//   return (
//     <div className="flex flex-col justify-between h-screen transition-all duration-300 border-r">
//       <div>
//         <div className="p-3 transition-opacity duration-300">
//           {menuData[activeMenu] && menuData[activeMenu].length > 0 ? (
//             <div className="flex items-center gap-3">
//               <Image
//                 alt=""
//                 className="w-12 transition-all duration-300"
//                 src={Images.dashPageImages.remediLogo}
//               />
//               <Image
//                 alt=""
//                 className="mb-1 transition-all duration-300 w-28"
//                 src={Images.dashPageImages.remediText}
//               />
//             </div>
//           ) : (
//             <Image
//               alt=""
//               className="w-12 transition-all duration-300"
//               src={Images.dashPageImages.remediLogo}
//             />
//           )}
//         </div>
//         <div className="flex mt-6 transition-all duration-300">
//           <div className="flex flex-col items-center w-16 pb-8 space-y-4 transition-transform duration-300 bg-white">
//             <button
//               onClick={() => handleMenuClick("Jobs", "")}
//               className={`p-2 transition-colors duration-300 flex items-center justify-center rounded-lg ${
//                 activeMenu === "Jobs"
//                   ? "bg-purple-100 text-primary"
//                   : "text-gray-500 hover:bg-gray-100"
//               }`}
//             >
//               <FontAwesomeIcon
//                 icon={
//                   activeMenu === "Jobs"
//                     ? faBriefcaseBlankSolid
//                     : faBriefcaseBlank
//                 }
//                 className="w-5 h-5"
//               />
//             </button>

//             <button
//               onClick={() => handleMenuClick("Notifications", "")}
//               className={`p-2 transition-colors duration-300 flex items-center justify-center rounded-lg ${
//                 activeMenu === "Notifications"
//                   ? "bg-purple-100 text-primary"
//                   : "text-gray-500 hover:bg-gray-100"
//               }`}
//             >
//               <FontAwesomeIcon
//                 icon={activeMenu === "Notifications" ? faBellSolid : faBell}
//                 className="w-5 h-5"
//               />
//             </button>
//             <button
//               onClick={() => handleMenuClick("Settings", "Staff")}
//               className={`p-2 transition-colors duration-300 flex items-center justify-center rounded-lg ${
//                 activeMenu === "Settings"
//                   ? "bg-purple-100 text-primary"
//                   : "text-gray-500 hover:bg-gray-100"
//               }`}
//             >
//               <FontAwesomeIcon
//                 icon={activeMenu === "Settings" ? faGearSolid : faGear}
//                 className="w-5 h-5"
//               />
//             </button>
//           </div>

//           {menuData[activeMenu] && menuData[activeMenu].length > 0 && (
//             <div className="w-48 pb-8 overflow-y-auto transition-all duration-300 ease-in-out bg-white">
//               <div className="px-5 text-lg font-medium text-gray-800">
//                 {activeMenu}
//               </div>
//               <div className="p-4 pt-2 space-y-1">
//                 {menuData[activeMenu].map((submenu) => (
//                   <button
//                     key={submenu}
//                     onClick={() => handleMenuClick(activeMenu, submenu)}
//                     className={`flex items-center w-full px-5 py-2 transition-colors duration-300 rounded-lg ${
//                       pathname.startsWith(
//                         `/${activeMenu.toLowerCase()}/${submenu.toLowerCase()}`
//                       )
//                         ? "bg-purple-100 text-primary"
//                         : "text-gray-500 hover:bg-gray-100"
//                     }`}
//                   >
//                     <span className="text-sm font-medium">{submenu}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

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

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState("");

  const menuData = {
    Home: [],
    Account: ["Profile", "Settings"],
    List: ["Profile", "Settings"],
    File: ["Profile", "Settings"],
    Settings: ["Staff", "Organization", "Clinics", "Lookups", "Job Settings"],
    Notifications: [],
    Jobs: [],
  };

  // Helper function to format menu items for URLs
  const formatForUrl = (text) => text.toLowerCase().replace(/\s+/g, "_");

  // Synchronize `activeMenu` with the URL
  useEffect(() => {
    const pathSegments = pathname.split("/").filter(Boolean);
    if (pathSegments.length > 0) {
      const currentMenu = Object.keys(menuData).find((menu) =>
        pathSegments[0].toLowerCase().includes(menu.toLowerCase())
      );
      if (currentMenu) {
        setActiveMenu(currentMenu);
      }
    }
  }, [pathname]);

  const handleMenuClick = (menu, submenu) => {
    setActiveMenu(menu);
    router.push(`/${formatForUrl(menu)}/${formatForUrl(submenu)}`);
  };

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
                        `/${formatForUrl(activeMenu)}/${formatForUrl(submenu)}`
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
    </div>
  );
};
