import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { FiFilter, FiPlus } from 'react-icons/fi';

const communicationTypes = [
  { id: 'linkedin-post', name: 'LinkedIn Post', color: '#0A66C2' },
  { id: 'linkedin-message', name: 'LinkedIn Message', color: '#0073B1' },
  { id: 'email', name: 'Email', color: '#2563EB' },
  { id: 'phone', name: 'Phone Call', color: '#059669' },
  { id: 'other', name: 'Other', color: '#6B7280' }
];

// Temporary Modal Component
const TempScheduleModal = ({ onClose, selectedDate, event, onSave }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Schedule Meeting</h3>
        <p>Temporary Modal - Will be replaced with full implementation</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const EnhancedCalendar = () => {
  const [events, setEvents] = useState([]);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    types: communicationTypes.map(type => type.id),
    status: ['scheduled', 'completed', 'overdue']
  });

  useEffect(() => {
    // Mock events
    const mockEvents = [
      {
        id: '1',
        title: 'LinkedIn Post - Acme Corp',
        start: '2024-02-20T10:00:00',
        type: 'linkedin-post',
        company: 'Acme Corp',
        status: 'scheduled',
        sequence: 1,
        notes: 'Share quarterly update'
      }
    ];
    setEvents(mockEvents);
  }, []);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.date);
    setShowScheduleModal(true);
  };

  const handleEventClick = (arg) => {
    setSelectedEvent(arg.event);
    setShowScheduleModal(true);
  };

  const handleScheduleSave = (meetingData) => {
    const newEvent = {
      id: meetingData.id || Date.now().toString(),
      title: `${meetingData.type} - ${meetingData.company}`,
      start: `${meetingData.date}T${meetingData.time}`,
      end: new Date(new Date(`${meetingData.date}T${meetingData.time}`).getTime() + parseInt(meetingData.duration) * 60000).toISOString(),
      type: meetingData.type.toLowerCase().replace(' ', '-'),
      company: meetingData.company,
      status: 'scheduled',
      sequence: meetingData.sequence || 1,
      notes: meetingData.notes
    };

    if (selectedEvent) {
      setEvents(events.map(event => 
        event.id === selectedEvent.id ? newEvent : event
      ));
    } else {
      setEvents([...events, newEvent]);
    }

    setShowScheduleModal(false);
    setSelectedEvent(null);
    setSelectedDate(null);
  };

  const getEventColor = (event) => {
    const type = communicationTypes.find(t => t.id === event.type);
    return type ? type.color : '#6B7280';
  };

  const filteredEvents = events.filter(event => 
    filters.types.includes(event.type) &&
    filters.status.includes(event.status)
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Communication Calendar</h1>
            <p className="mt-2 text-sm text-gray-700">
              Schedule and track all company communications
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <FiFilter className="mr-2" />
              Filters
            </button>
            <button
              onClick={() => setShowScheduleModal(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              <FiPlus className="mr-2" />
              Schedule Communication
            </button>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white p-4 rounded-lg shadow">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,listWeek'
          }}
          events={filteredEvents}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          eventContent={(arg) => (
            <div className="p-1">
              <div className="text-xs font-semibold truncate">{arg.event.title}</div>
              <div className="text-xs truncate">
                {new Date(arg.event.start).toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit'
                })}
              </div>
            </div>
          )}
          eventBackgroundColor={(arg) => getEventColor(arg.event.extendedProps)}
          height="auto"
        />
      </div>

      {/* Schedule Modal */}
      {showScheduleModal && (
        <TempScheduleModal
          onClose={() => {
            setShowScheduleModal(false);
            setSelectedEvent(null);
            setSelectedDate(null);
          }}
          selectedDate={selectedDate}
          event={selectedEvent}
          onSave={handleScheduleSave}
        />
      )}
    </div>
  );
};

export default EnhancedCalendar; 