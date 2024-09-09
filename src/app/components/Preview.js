import { useRecurringDate } from "@/context/RecurringDate";
const Preview = () => {
  const { dates, startDate, endDate, recurringPattern } = useRecurringDate();

  return (
    <div className="p-4">
      <h3 className="text-lg mt-4 text-green-700">Generated Recurring Dates:</h3>
      {dates.length > 0 ? (
        <ul className="bg-slate-400 h-auto w-auto">
          {dates.map((date, index) => (
            <li key={index} className='hover:bg-green-500'>{date.toDateString()}</li> 
          ))}
        </ul>
      ) : (
        <p>No dates selected</p>
      )}
    </div>
  );
};

export default Preview;