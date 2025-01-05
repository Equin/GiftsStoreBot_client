import React, { useState } from 'react';
import './calendar.css';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePrevMonth = () => {
    setDate(prevDate => {
      const prevMonth = prevDate.getMonth();
      const prevYear = prevDate.getFullYear();

      if (prevMonth === 0) {
        return new Date(prevYear - 1, 11);
      } else {
        return new Date(prevYear, prevMonth - 1);
      }
    });
  };

  const handleNextMonth = () => {
    setDate(prevDate => {
      const nextMonth = prevDate.getMonth() + 2;
      const nextYear = prevDate.getFullYear();

      if (nextMonth === 13) {
        return new Date(nextYear + 1, 0);
      } else {
        return new Date(nextYear, nextMonth - 1);
      }
    });
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const renderCalendarDays = () => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = getDaysInMonth(month + 1, year);
    const firstDay = new Date(year, month, 1).getDay();
    const calendarDays = [];

    // Add empty cells for previous month
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Add cells for current month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate === day;

      calendarDays.push(
        <div
          key={`day-${day}`}
          className={`calendar-day ${isSelected ? 'selected' : ''}`}
          onClick={() => handleDateClick(day)}
        >
          {day}
          {isSelected && (
            <div className="calendar-day-tooltip">
              Фикус
            </div>
          )}
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="calendar-nav" onClick={handlePrevMonth}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <h2 className="calendar-title">{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button className="calendar-nav" onClick={handleNextMonth}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className="calendar-body">
        <div className="calendar-days">
          <div className="calendar-day">Sun</div>
          <div className="calendar-day">Mon</div>
          <div className="calendar-day">Tue</div>
          <div className="calendar-day">Wed</div>
          <div className="calendar-day">Thu</div>
          <div className="calendar-day">Fri</div>
          <div className="calendar-day">Sat</div>
        </div>
        <div className="calendar-dates">
          {renderCalendarDays()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
