import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FiPlus, FiFilter, FiDownload } from 'react-icons/fi';
import CommunicationModal from '../../components/Communication/CommunicationModal';

const locales = {
  'en-US': require('date-fns/locale/en-US')
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const CommunicationCalendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [view, setView] = useState('month');
  const [events] = useState([
    {
      id: 1,
      title: 'Tech Solutions Inc. - Email',
      start: new Date(2024, 1, 15),
      end: new Date(2024, 1, 15),
      company: 'Tech Solutions Inc.',
      type: 'email',
      status: 'completed',
      notes: 'Follow-up on proposal'
    },
    {
      id: 2,
      title: 'Global Innovations - Phone Call',
      start: new Date(2024, 1, 20),
      end: new Date(2024, 1, 20),
      company: 'Global Innovations',
      type: 'phone',
      status: 'upcoming',
      notes: 'Quarterly review'
    }
    // Add more events as needed
  ]);

  const eventStyleGetter = (event) => {
    let style = {
      backgroundColor: '#3B82F6', // blue-500
      borderRadius: '4px',
      opacity: 0.8,
      color: 'white',
      border: '0',
      display: 'block'
    };

    if (event.status === 'completed') {
      style.backgroundColor = '#10B981'; // green-500
    } else if (event.status === 'overdue') {
      style.backgroundColor = '#EF4444'; // red-500
    }

    return { style };
  };

  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
    setIsModalOpen(true);
  };

  const handleEventClick = (event) => {
    // Show event details modal
    console.log('Event clicked:', event);
  };

  return (
    <div className="h-full space-y-6">
      {/* Calendar Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Communication Calendar</h1>
        <div className="flex space-x-3">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-primary"
          >
            <FiPlus className="w-4 h-4 mr-2" />
            Add Communication
          </button>
          <button className="btn-secondary">
            <FiFilter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <button className="btn-secondary">
            <FiDownload className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Calendar Filters */}
      <div className="flex flex-wrap gap-4">
        <select className="form-select">
          <option>All Companies</option>
          <option>Tech Solutions Inc.</option>
          <option>Global Innovations</option>
        </select>
        <select className="form-select">
          <option>All Communication Types</option>
          <option>Email</option>
          <option>Phone Call</option>
          <option>LinkedIn</option>
        </select>
        <select className="form-select">
          <option>All Status</option>
          <option>Completed</option>
          <option>Upcoming</option>
          <option>Overdue</option>
        </select>
      </div>

      {/* Calendar View */}
      <div className="h-[600px] bg-white rounded-lg shadow">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%' }}
          views={['month', 'week', 'day', 'agenda']}
          view={view}
          onView={setView}
          eventPropGetter={eventStyleGetter}
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleEventClick}
          selectable
          popup
        />
      </div>

      {/* Communication Modal */}
      <CommunicationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedDate(null);
        }}
        selectedDate={selectedDate}
        onSubmit={(formData) => {
          console.log('New communication:', formData);
          setIsModalOpen(false);
          setSelectedDate(null);
        }}
      />
    </div>
  );
};

export default CommunicationCalendar; 