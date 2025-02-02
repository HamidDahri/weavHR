import { faEdit } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface AccountSetupFormProps {
  openModal: (step: boolean) => void;
}

const AvalabilitySetup: React.FC<AccountSetupFormProps> = ({ openModal }) => {
  const handleClick = () => {
    const newStep = true;
    openModal(newStep);
  };

  const availability = [
    {
      day: "Monday",
      times: ["09:00 AM - 12:00 PM", "01:00 PM - 03:00 PM"],
      available: true,
    },
    { day: "Tuesday", times: ["09:00 AM - 4:30 PM"], available: true },
    { day: "Wednesday", times: ["09:00 AM - 4:30 PM"], available: true },
    { day: "Thursday", times: ["09:00 AM - 4:30 PM"], available: true },
    {
      day: "Friday",
      times: ["09:00 AM - 4:30 PM"],
      available: true,
      highlight: true,
    },
    { day: "Saturday", times: ["Not Available"], available: false },
    { day: "Sunday", times: ["Not Available"], available: false },
  ];

  const exceptions = [
    { date: "Fri 21 Jan", time: "09:00 AM - 5:00 PM" },
    { date: "Sat 22 Jan", time: "09:00 AM - 5:00 PM" },
  ];

  return (
    <div>
      <h2 className="mb-4 text-sm text-slate-500">Setup availability</h2>
      {availability.map((slot, index) => (
        <div className="mb-3 overflow-hidden group rounded-xl" key={index}>
          <div
            className={`${
              slot.available &&
              "bg-white cursor-pointer group-hover:bg-purple-100"
            }  p-4  `}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center ">
                <span
                  className={`flex w-2.5 h-2.5 ${
                    slot.available ? "bg-green-500" : "bg-slate-300"
                  } rounded-full me-3`}
                ></span>
                <span className="text-sm font-medium text-slate-900">
                  {slot.day}
                </span>
              </div>
              <div className="flex items-start gap-4">
                <button onClick={handleClick} className="">
                  <FontAwesomeIcon
                    className={`invisible  ${
                      slot.available && "group-hover:visible"
                    }`}
                    icon={faEdit}
                  ></FontAwesomeIcon>
                </button>
                <span
                  className={`text-sm  ${
                    slot.available && "group-hover:text-black"
                  } flex flex-col text-slate-500`}
                >
                  {slot.times.map((time, index) => (
                    <span key={index}>{time}</span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <h2 className="mb-4 text-sm text-slate-500">
        Create exceptions for specific days when you are not available
      </h2>

      <div className="flex items-start justify-between p-4 bg-white rounded-xl">
        <div className="flex items-center ">
          <span
            className={`flex w-2.5 h-2.5 bg-slate-300 rounded-full me-3`}
          ></span>
          <span className="text-sm font-medium text-slate-900">
            Unavailable days
          </span>
        </div>
        <ul className="text-sm text-gray-600 ">
          {exceptions.map((exception, index) => (
            <li key={index} className="flex justify-end gap-2 py-2">
              <span>{exception.date}, </span>
              <span>{exception.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AvalabilitySetup;
