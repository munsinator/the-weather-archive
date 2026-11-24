import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/datepicker.css"; 

export default function ResultsPage({ topic }: { topic: string }) {
  const [startDate, setStartDate] = useState(new Date(3, 1, 2026)); 
  const message = `No data available`;
  
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-800 mt-12 mb-12">{topic}</h1>
        <div className="flex flex-col gap-16 items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <section className="border-3 border-blue-800 rounded-3xl p-4">
              <h2 className="text-xl font-bold text-blue-800">Choose a time period:</h2>
              <p className="flex text-left items-center mt-4 gap-3">
                <label htmlFor="date">Date: </label>
                <DatePicker id="date" selected={startDate} 
                            //onChange={(date) => setStartDate(date)} 
                            className="w-full border border-gray-300 bg-white px-4 py-2 rounded-3xl"
                            calendarClassName="weather-calendar"
                            dateFormat="dd.MM.yyyy"/>
              </p>
              <p className="flex text-left mt-4 gap-3">
                <label htmlFor="hour">Hour: </label>
                <input id="hour" type="range" min="0" max="23" defaultValue="0" />
              </p>
            </section>

            <section className="border-3 border-blue-800 rounded-3xl p-4">
              <h2 className="text-xl font-bold text-blue-800 mb-4">Metadata</h2>
              <p className="text-left">Temperature: {message}</p>
              <p className="text-left">Humidity: {message}</p>
              <p className="text-left">Air pressure: {message}</p>
            </section>            
        </div>
      </div>
    </>
  )
}
