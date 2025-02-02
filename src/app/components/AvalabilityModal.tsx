import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const AvailabilityModal = ({ isOpen, onClose }) => {
  const [selectedDay, setSelectedDay] = useState("M");
  const [times, setTimes] = useState([
    { start: "09:00 AM", end: "11:00 AM" },
    { start: "11:00 AM", end: "12:00 AM" },
  ]);
  const [temporarilyUnavailable, setTemporarilyUnavailable] = useState(false);

  const days = [
    { id: "sun", label: "S" },
    { id: "mon", label: "M" },
    { id: "tue", label: "T" },
    { id: "wed", label: "W" },
    { id: "thu", label: "T" },
    { id: "fri", label: "F" },
    { id: "sat", label: "S" },
  ];

  const addTimeSlot = () => {
    setTimes([...times, { start: "", end: "" }]);
  };

  const updateTimeSlot = (index, field, value) => {
    const updatedTimes = times.map((time, i) =>
      i === index ? { ...time, [field]: value } : time
    );
    setTimes(updatedTimes);
  };

  const removeTimeSlot = (index) => {
    setTimes(times.filter((_, i) => i !== index));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl w-[500px] p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Select availability days and time
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </button>
        </div>
        <div className="flex justify-center gap-2 mb-4">
          {days.map((day) => (
            <button
              key={day.id}
              className={`w-full h-10 rounded-full border ${
                selectedDay === day.id
                  ? " border border-primary bg-purple-100 text-primary"
                  : "bg-white text-gray-800"
              }`}
              onClick={() => setSelectedDay(day.id)}
            >
              {day.label}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="block text-sm font-medium text-slate-900">
              Mark as temporarily unavailable
            </span>
            <span className="block text-xs text-slate-500">
              Quickly temporarily disable availability across all days
            </span>
          </div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all  peer-checked:bg-primary "></div>
          </label>
        </div>
        {times.map((time, index) => (
          <div key={index} className="flex items-center gap-4 mb-4">
            <input
              type="text"
              placeholder="Start Time"
              value={time.start}
              onChange={(e) => updateTimeSlot(index, "start", e.target.value)}
              className="w-1/2 p-2 border rounded-md border-slate-200 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="End Time"
              value={time.end}
              onChange={(e) => updateTimeSlot(index, "end", e.target.value)}
              className="w-1/2 p-2 border rounded-md border-slate-200 focus:ring-primary"
            />
            <button
              onClick={() => removeTimeSlot(index)}
              className="flex items-center justify-center w-10 h-10 p-4 rounded-lg bg-slate-50 hover:text-red-700"
            >
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
          </div>
        ))}
        <button onClick={addTimeSlot} className=" text-primary hover:underline">
          + Add Hours
        </button>
        <button
          onClick={() => alert("Saved")}
          className="w-full py-2 mt-4 text-white rounded-md hover:bg-primaryDark bg-primary"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AvailabilityModal;
