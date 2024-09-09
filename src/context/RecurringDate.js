"use client";
import { createContext, useContext, useState, useEffect } from "react";

const RecurringDateContext = createContext();
export const useRecurringDate = () => useContext(RecurringDateContext);

const DateProvider = ({ children }) => {
  const [dates, setDates] = useState([]);
  const [recurringPattern, setRecurringPattern] = useState('daily');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [customInterval, setCustomInterval] = useState(1);

  const generateDates = () => {
    if (!startDate) {
      console.log("No start date selected");
      return;
    }
  
    const generatedDates = [];
    const start = new Date(startDate);
    let currentDate = new Date(start);
    const end = endDate ? new Date(endDate) : null;
  
    // Check if the dates are valid
    if (isNaN(start.getTime()) || (end && isNaN(end.getTime()))) {
      console.error("Invalid start or end date");
      return;
    }
  
    console.log("Generating dates...");
    console.log(`Start Date: ${start}, End Date: ${end}, Recurring Option: ${recurringPattern}`);
  
    let safetyCounter = 0; // To prevent infinite loops
  
    // Loop through and generate dates
    while (!end || currentDate <= end) {
      generatedDates.push(new Date(currentDate));
  
      if (recurringPattern === 'daily') {
        currentDate.setDate(currentDate.getDate() + customInterval);
      } else if (recurringPattern === 'weekly') {
        currentDate.setDate(currentDate.getDate() + 7 * customInterval);
      } else if (recurringPattern === 'monthly') {
        currentDate.setMonth(currentDate.getMonth() + customInterval);
      } else if (recurringPattern === 'yearly') {
        currentDate.setFullYear(currentDate.getFullYear() + customInterval);
      }
  
      // Break if we reach the end date
      if (end && currentDate > end) break;
  
      // Safety check to avoid infinite loop
      safetyCounter++;
      if (safetyCounter > 1000) { // Limit to 1000 dates to avoid browser crash
        console.error("Too many dates generated, exiting loop for safety.");
        break;
      }
    }
  
    console.log("Generated Dates:", generatedDates);
    setDates(generatedDates);
  };
  

  // Regenerate dates whenever relevant state changes
  useEffect(() => {
    generateDates();
  }, [recurringPattern, startDate, endDate, customInterval]);

  return (
    <RecurringDateContext.Provider
      value={{
        dates,
        recurringPattern,
        setRecurringPattern,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        customInterval,
        setCustomInterval,
      }}
    >
      {children}
    </RecurringDateContext.Provider>
  );
};

export default DateProvider;                         