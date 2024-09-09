"use client";

import { useRecurringDate } from "@/context/RecurringDate";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
const DatePicker = () => {
  const {
    dates, 
    recurringPattern,
    setRecurringPattern,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    customInterval,
    setCustomInterval
  } = useRecurringDate();
  
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleRecurringChange = (e) => {
    setRecurringPattern(e.target.value);
  };

  const handleIntervalChange = (e) => {
    setCustomInterval(Number(e.target.value));
  };

  // Function to check if a date is in the recurring dates
  const tileClassName = ({ date }) => {
    return dates.some(d => d.toDateString() === date.toDateString()) 
      ? 'highlight' 
      : null;
  };

  return (
    <div className="m-2 mb-4">
     
      <div className="mb-4">
        <label className="block text-blue-700">Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="p-2 border rounded"
        />
      </div>
      <div className="mb-4 m-2">
        <label className="block text-blue-700">End Date (optional):</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="p-2 border rounded"
        />
      </div>
      <div className="m-2 mb-4">
        <label className="block text-blue-700">Recurring Options:</label>
        <select
          value={recurringPattern}
          onChange={handleRecurringChange}
          className="p-2 border rounded"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div className="m-2 mb-4">
        <label className="block text-blue-700">Every:</label>
        <input
          type="number"
          value={customInterval}
          onChange={handleIntervalChange}
          className="p-2 border rounded"
        />{' '}
        {recurringPattern}
      </div>

      <div className="m-2 mb-4">
        <h3 className="text-lg font-semibold text-violet-600">Visual Preview</h3>
        <Calendar
  tileClassName={({ date }) =>
    dates.some(d => d.toDateString() === date.toDateString()) ? 'highlight' : null
  }
  onChange={setSelectedDate}
  value={selectedDate}
/>
      </div>
    </div>
  );
};

export default DatePicker;