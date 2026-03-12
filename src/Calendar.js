import React, { useState } from "react";

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const daysInMonth = new Date(
        currentMonth.getFullYear(),
        currentMonth.GetMonth() + 1,
        0
    ).getDate();

    const firstDayOfMonth = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        1
    ).getDay();
    

    return (
        <div style={{ textAlign: "center"}}>
            <h1>{currentMonth.toLocaleString('default', {month: 'Long'})}{currentMonth.getFullYear()}</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px'}}>
                {Array.from({ length: firstDayOfMonth }).map((_, index) => ( <div key={index}></div>))}
                {Array.from({ length: daysInMonth }).map((_, index) => (<div key={index}></div>))}
            </div>
        </div>
    );


};

/*const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() -1, 1))
};

const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() +1, 1))
};

return (
    <div className="calendar">
        <button onClick={handlePreviousMonth}>Previous</button>
        <button onClick={handleNextMonth}>Next</button>
        ...
    </div>
);*/

export default Calendar;