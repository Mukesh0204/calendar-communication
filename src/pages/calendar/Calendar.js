import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ScheduleMeetingModal from '../../components/calendar/ScheduleMeetingModal';

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const getEventColor = (status) => {
    switch (status) {
      case 'completed':
        return '#10B981'; // green
      case 'scheduled':
        return '#3B82F6'; // blue
      case 'overdue':
        return '#EF4444'; // red
      default:
        return '#3B82F6'; // default blue
    }
  };

  const handleDateClick = (arg) => {
    setSelectedDate(arg.date);
    setShowScheduleModal(true);
  };

  const handleScheduleMeeting = (meetingData) => {
    const newEvent = {
      id: meetingData.id,
      title: `${meetingData.type} - ${meetingData.company}`,
      start: `${meetingData.date}T${meetingData.time}`,
      end: new Date(new Date(`${meetingData.date}T${meetingData.time}`).getTime() + parseInt(meetingData.duration) * 60000).toISOString(),
      extendedProps: {
        ...meetingData
      },
      backgroundColor: getEventColor('scheduled'),
      borderColor: getEventColor('scheduled')
    };

    setEvents(prevEvents => [...prevEvents, newEvent]);
    setShowScheduleModal(false);
    setSelectedDate(null);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Calendar</h1>
            <p className="mt-2 text-sm text-gray-700">
              Schedule and manage your communications
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button
              onClick={() => setShowScheduleModal(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Legend */}
      <div className="mb-6 flex items-center space-x-6">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
          <span className="text-sm text-gray-600">Scheduled</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          <span className="text-sm text-gray-600">Completed</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
          <span className="text-sm text-gray-600">Overdue</span>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white p-4 rounded-lg shadow">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          eventClick={(arg) => {
            console.log('Event clicked:', arg.event);
          }}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek'
          }}
          height="auto"
          eventContent={(arg) => (
            <div className="p-1">
              <div className="text-xs font-semibold">{arg.event.title}</div>
              <div className="text-xs">
                {new Date(arg.event.start).toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit'
                })}
              </div>
            </div>
          )}
        />
      </div>

      {/* Schedule Meeting Modal */}
      {showScheduleModal && (
        <ScheduleMeetingModal
          onClose={() => {
            setShowScheduleModal(false);
            setSelectedDate(null);
          }}
          selectedDate={selectedDate}
          onSave={handleScheduleMeeting}
        />
      )}
    </div>
  );
};

export default Calendar; 