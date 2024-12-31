import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiChevronLeft, 
  FiChevronRight,
  FiClock,
  FiCalendar
} from 'react-icons/fi';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns';

const Calendar = ({
  events = [],
  onDateSelect,
  onEventClick,
  selectedDate = new Date(),
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const getDayEvents = (date) => {
    return events.filter(event => 
      isSameDay(new Date(event.date), date)
    );
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Calendar Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            {format(currentMonth, 'MMMM yyyy')}
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={prevMonth}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {/* Week days header */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div
            key={day}
            className="bg-gray-50 py-2 text-center text-sm font-medium text-gray-500"
          >
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {days.map((day, dayIdx) => {
          const dayEvents = getDayEvents(day);
          const isSelected = isSameDay(selectedDate, day);
          const isCurrentMonth = isSameMonth(day, currentMonth);

          return (
            <motion.div
              key={day.toString()}
              whileHover={{ scale: 0.98 }}
              className={`
                min-h-[100px] bg-white p-2 relative
                ${!isCurrentMonth && 'text-gray-400'}
                ${isSelected && 'bg-blue-50'}
              `}
              onClick={() => onDateSelect?.(day)}
            >
              <span className="text-sm">{format(day, 'd')}</span>
              
              {/* Events for the day */}
              <div className="mt-1 space-y-1">
                {dayEvents.map((event, eventIdx) => (
                  <motion.button
                    key={event.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`
                      w-full text-left text-xs p-1 rounded
                      ${event.type === 'meeting' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}
                    `}
                    onClick={(e) => {
                      e.stopPropagation();
                      onEventClick?.(event);
                    }}
                  >
                    <div className="flex items-center">
                      <FiClock className="w-3 h-3 mr-1" />
                      <span className="truncate">{event.title}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar; 