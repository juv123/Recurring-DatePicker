"use client";
import DatePicker from './components/DatePicker';
import Preview from './components/Preview';
import DateProvider from "@/context/RecurringDate";

export default function Home() {
  return (
<DateProvider>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center text-orange-800">Recurring Date Picker</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DatePicker />
          <Preview />
        </div>
      </div>
    </DateProvider>
  );
}
