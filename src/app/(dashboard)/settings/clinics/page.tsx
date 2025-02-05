"use client";

import {
  faEllipsis,
  faInfoCircle,
  faPlus,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import AddStaffForm from "../../../components/AddStaffForm";
import { useRouter } from "next/navigation";
import data from "../../../../../public/_data/clinicsData.json";
import AddClinicForm from "../../../components/AddClinicForm";

export default function StaffPage() {
  const [addStaff, setAddStaff] = useState(false);

  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [screenHeight, setScreenHeight] = useState(0);

  const rowHeight = 72;
  const totalPadding = 30;
  const rowLimit = screenHeight / (rowHeight + totalPadding);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openDropdownId !== null &&
        !event.target.closest(".dropdown-container")
      ) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openDropdownId]);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight - 0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setRowsPerPage(Math.floor(rowLimit));
  }, [screenHeight]);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = data.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage * rowsPerPage < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleStatusChange = (id, newStatus) => {
    console.log(id, newStatus);
  };

  const toggleDropdown = (id, e) => {
    e.stopPropagation();
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const router = useRouter();

  const handleRowClick = (id: number) => {
    router.push(`/settings/clinics/${id}`); // Navigate to the user detail page
  };

  if (addStaff) {
    return (
      <>
        <div className="h-[calc(100vh-100px)] overflow-y-auto pb-12 scrollbar-hide">
          <div>
            <AddClinicForm
              onClickHandler={(newStep: boolean) => setAddStaff(newStep)}
            ></AddClinicForm>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="overflow-auto h-[calc(100vh-100px)]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-lg shadow-sm">
              <FontAwesomeIcon className="w-4 h-4" icon={faInfoCircle} />
            </span>
            <h2 className="text-lg font-medium text-gray-800">Clinics</h2>
          </div>
          <div className="flex items-end justify-end w-full gap-4">
            <form className="w-full max-w-xs">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-3 text-sm text-gray-500 border rounded-lg border-slate-200 focus:outline-none focus:border-gray-300 ps-10 bg-gray-50 focus:ring-0"
                  placeholder="Search by name, email, phone"
                  required
                />
              </div>
            </form>
            <div className="flex items-center px-3 border rounded-lg">
              <input
                id="vue-checkbox"
                type="checkbox"
                className="w-5 h-5 border border-gray-300 rounded-md text-primary focus:ring-primary"
              />
              <label
                htmlFor="vue-checkbox"
                className="w-full py-3 text-sm font-medium text-gray-500 ms-2"
              >
                Active
              </label>
            </div>
            <button
              type="button"
              onClick={() => setAddStaff(true)}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary hover:bg-primaryDark focus:ring-0 focus:outline-none focus:ring-blue-300"
            >
              <FontAwesomeIcon className="w-4 h-4" icon={faPlus} />
              Add
            </button>
          </div>
        </div>

        <div className="relative overflow-x-auto border border-slate-100 sm:rounded-xl">
          <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
            <thead className="text-xs text-gray-700 bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Clinics
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Joined at
                </th>
                <th scope="col" className="px-6 py-3">
                  Locations
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b cursor-pointer hover:bg-slate-100"
                  onClick={() => handleRowClick(item.id)}
                >
                  <td
                    scope="row"
                    className={`flex items-center px-6 py-4 text-gray-900  whitespace-nowrap`}
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={item.avatar}
                      alt="Avatar"
                    />
                    <div className="ps-3">
                      <div className="text-base font-medium text-gray-900">
                        {item.name}
                      </div>
                      <div className="font-normal text-gray-600">
                        {item.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center ${
                        item.status === "Active"
                          ? "bg-success50 text-success700"
                          : "bg-red-100 text-red-700"
                      } text-sm font-medium px-2.5 py-0.5 rounded-full`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-gray-600">
                      {item.date}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center text-sm text-gray-600">
                      {item.location?.[0]}
                      <span className="text-sm font-semibold text-primary">
                        {item.location?.length > 1 &&
                          `, +${item.location.length - 1}`}
                      </span>
                    </span>
                  </td>
                  <td className="w-32 px-6 py-4">
                    <div className="relative dropdown-container">
                      <button
                        onClick={(e) => toggleDropdown(item.id, e)}
                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
                        type="button"
                      >
                        <FontAwesomeIcon
                          icon={faEllipsis}
                          className="w-5 h-5"
                        />
                      </button>

                      {openDropdownId === item.id && (
                        <div className=" z-10 !fixed mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg right-20 w-44">
                          <ul className="py-2 text-sm text-gray-700">
                            {["Checked-in", "Assigned", "Counter Offer"].map(
                              (status) => (
                                <li key={status}>
                                  <button
                                    onClick={() =>
                                      handleStatusChange(item.id, status)
                                    }
                                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                                  >
                                    {status}
                                  </button>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between p-4 bg-white">
            <span className="font-medium text-gray-700">
              Page {currentPage} of {Math.ceil(data.length / rowsPerPage)}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={nextPage}
                disabled={currentPage * rowsPerPage >= data.length}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
