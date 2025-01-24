import React, { useState } from "react";

const DaySelector = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div>
      <label className="text-[#414651] text-base me-2">Select days:</label>
      {days.map((day) => (
        <button
          key={day}
          onClick={() => toggleDay(day)}
          className="font-medium"
          style={{
            border: selectedDays.includes(day)
              ? "1px solid #fff"
              : "1px solid #D0D5DD",
            borderRadius: "8px",
            padding: "5px 10px",
            margin: "0 5px",
            cursor: "pointer",
            backgroundColor: selectedDays.includes(day) ? "#F3E8FF" : "white",
            color: selectedDays.includes(day) ? "#1E293B" : "#64748B",
          }}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default DaySelector;
