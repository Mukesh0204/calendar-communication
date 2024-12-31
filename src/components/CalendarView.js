import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarView = () => {
  const events = [
    { title: 'Meeting with Company A', date: '2024-12-30' },
    { title: 'Call with Company B', date: '2024-12-31' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Communication Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        events={events}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek',
        }}
      />
    </div>
  );
};

export default CalendarView;
