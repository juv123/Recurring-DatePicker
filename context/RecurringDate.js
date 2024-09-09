
"use client";
import { createContext, useContext, useState } from "react";

const RecurringDate = createContext();
export const useRecurringDate = () => useContext(RecurringDate);

const DateProvider = ({ children }) => {
  const [dates, setDates] = useState([]);
  const [recurringPattern, setRecurringPattern] = useState('daily');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const addDate = (date) => {
    setDates([...dates, date]);
  };

  return (
    <RecurringDate.Provider
      value={{
        dates,
        recurringPattern,
        setRecurringPattern,
        addDate,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
      }}
    >
      {children}
    </RecurringDate.Provider>
  );
};

export default DateProvider;