import React from 'react';
import { 
  FiX, 
  FiEdit2, 
  FiTrash2, 
  FiClock, 
  FiMapPin, 
  FiUser,
  FiMessageSquare
} from 'react-icons/fi';

const EventDetailsModal = ({ event, isOpen, onClose, onEdit, onDelete }) => {
  if (!isOpen) return null;

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'video':
        return 'bg-blue-100 text-blue-600';
      case 'phone':
        return 'bg-green-100 text-green-600';
      case 'email':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center animate-fade-in">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Event Details
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">
              {event.title}
            </h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeIcon(event.type)}`}>
              {event.type}
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center text-gray-600">
              <FiClock className="w-5 h-5 mr-3" />
              <span>{event.start} - {event.end}</span>
            </div>

            <div className="flex items-center text-gray-600">
              <FiUser className="w-5 h-5 mr-3" />
              <span>{event.company}</span>
            </div>

            <div className="flex items-center text-gray-600">
              <FiMessageSquare className="w-5 h-5 mr-3" />
              <span>{event.description || 'No description provided'}</span>
            </div>

            {event.location && (
              <div className="flex items-center text-gray-600">
                <FiMapPin className="w-5 h-5 mr-3" />
                <span>{event.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4 px-6 py-4 bg-gray-50 rounded-b-lg">
          <button
            onClick={() => onDelete(event.id)}
            className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 flex items-center"
          >
            <FiTrash2 className="w-4 h-4 mr-2" />
            Delete
          </button>
          <button
            onClick={() => onEdit(event)}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 flex items-center"
          >
            <FiEdit2 className="w-4 h-4 mr-2" />
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal; 