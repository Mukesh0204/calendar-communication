import React, { useState } from 'react';
import { FiX, FiCalendar, FiMessageSquare } from 'react-icons/fi';

const CommunicationModal = ({ isOpen, onClose, selectedCompanies, onSubmit, selectedDate }) => {
  const [formData, setFormData] = useState({
    type: '',
    date: selectedDate ? selectedDate.toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    notes: '',
  });

  const communicationTypes = [
    { id: 'linkedin_post', name: 'LinkedIn Post' },
    { id: 'linkedin_message', name: 'LinkedIn Message' },
    { id: 'email', name: 'Email' },
    { id: 'phone', name: 'Phone Call' },
    { id: 'other', name: 'Other' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>

        <div className="relative bg-white rounded-lg max-w-lg w-full shadow-xl">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Log Communication</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <FiX className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {selectedCompanies && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Selected Companies ({selectedCompanies.length})
                </label>
                <div className="bg-gray-50 p-3 rounded-lg max-h-32 overflow-y-auto">
                  {selectedCompanies.map(company => (
                    <div key={company.id} className="text-sm text-gray-600 mb-1">
                      {company.name}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Communication Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="form-select"
                required
              >
                <option value="">Select type...</option>
                {communicationTypes.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="form-input pl-10"
                  required
                />
                <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes
              </label>
              <div className="relative">
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="form-input pl-10 h-32"
                  placeholder="Add any notes about the communication..."
                  required
                />
                <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary"
              >
                Log Communication
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommunicationModal;