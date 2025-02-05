import {
  faBallotCheck,
  faBellExclamation,
  faBuilding,
  faCalendarCircleUser,
  faChartPieSimpleCircleDollar,
  faCloudArrowUp,
  faDisplayCode,
  faFileCertificate,
  faFileInvoiceDollar,
  faFilterList,
  faFolderGear,
  faLock,
  faMemoCircleCheck,
  faMoneyCheckDollar,
  faSuitcase,
  faUserNurse,
  faUsers,
} from "@fortawesome/pro-duotone-svg-icons";
import { faInfoCircle } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const jobTypes = [
  { id: 1, name: "Job Type", icon: faSuitcase },
  { id: 2, name: "Department", icon: faBuilding },
  { id: 3, name: "Role/Position", icon: faUserNurse },
  { id: 4, name: "Work Type", icon: faBallotCheck },
  { id: 5, name: "Skills", icon: faFolderGear },
  { id: 6, name: "Certifications", icon: faFileCertificate },
  { id: 7, name: "Experience Level", icon: faCalendarCircleUser },
  { id: 8, name: "Assignment Settings", icon: faMemoCircleCheck },
  { id: 9, name: "Hourly Rate", icon: faFileInvoiceDollar },
  { id: 10, name: "Overtime Rate", icon: faMoneyCheckDollar },
  { id: 11, name: "Payment Terms", icon: faChartPieSimpleCircleDollar },
  { id: 12, name: "Staff Groups", icon: faUsers },
  { id: 13, name: "Algorithm Parameters", icon: faDisplayCode },
  { id: 14, name: "Notification Methods", icon: faBellExclamation },
  { id: 15, name: "Priority Criteria", icon: faFilterList },
  { id: 16, name: "Publish Settings", icon: faCloudArrowUp },
  { id: 17, name: "Limits & Restrictions", icon: faLock },
  { id: 18, name: "Shifts", icon: faLock },
  { id: 19, name: "Glossary", icon: faLock },
];

const page = () => {
  return (
    <div className="">
      <div className="flex items-center gap-2 mb-4">
        <span className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-lg shadow-sm">
          <FontAwesomeIcon className="w-4 h-4" icon={faInfoCircle} />
        </span>
        <h2 className="text-lg font-medium text-gray-800">Lookups</h2>
      </div>

      <div className="p-6 bg-white rounded-xl">
        <div className="grid gap-6 lg:grid-cols-6 md:grid-cols-5">
          {jobTypes.map((job) => (
            <div
              key={job.id}
              className="flex flex-col items-center justify-center gap-3 px-4 py-8 cursor-pointer bg-slate-50 rounded-xl hover:bg-slate-100"
            >
              <span className="flex items-center justify-center w-12 h-12 bg-white border rounded-lg shadow-sm border-eggShell">
                <FontAwesomeIcon
                  className="text-2xl text-slate-500"
                  icon={job.icon}
                />
              </span>
              <span className="text-base text-haiti">{job.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
