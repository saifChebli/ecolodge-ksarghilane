"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import dayjs from "dayjs";

export default function DateRangePicker({ value, onChange }) {
  const [range, setRange] = useState(value || { from: null, to: null });

  const handleSelect = (selectedRange) => {
    setRange(selectedRange);
    if (onChange) {
      onChange(selectedRange);
    }
  };

  return (
    <div className="p-2 border border-gray-300 rounded-md w-full">
      <DayPicker
        mode="range"
        selected={range}
        onSelect={handleSelect}
        disabled={{ before: new Date() }} // disable past dates
      />

      {/* Display chosen range */}
      {range?.from && range?.to && (
        <p className="mt-2 text-sm text-gray-600">
          {dayjs(range.from).format("DD/MM/YYYY")} →{" "}
          {dayjs(range.to).format("DD/MM/YYYY")}
        </p>
      )}
    </div>
  );
}
