import React, { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';

const CompanyForm = ({ company, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(company || {
    name: '',
    location: '',
    linkedIn: '',
    emails: [''],
    phones: [''],
    comments: '',
    periodicity: '2',
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Company name is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.emails[0]) newErrors.emails = 'At least one email is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addField = (field) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], '']
    });
  };

  const removeField = (field, index) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index)
    });
  };

  const updateField = (field, index, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({
      ...formData,
      [field]: newArray
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      {/* Company Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Name *
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full p-2 border rounded-md ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Location *
        </label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className={`w-full p-2 border rounded-md ${
            errors.location ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.location && (
          <p className="mt-1 text-sm text-red-500">{errors.location}</p>
        )}
      </div>

      {/* LinkedIn */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          LinkedIn Profile
        </label>
        <input
          type="text"
          value={formData.linkedIn}
          onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Emails */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Addresses *
        </label>
        {formData.emails.map((email, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="email"
              value={email}
              onChange={(e) => updateField('emails', index, e.target.value)}
              className={`flex-1 p-2 border rounded-md ${
                errors.emails ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {formData.emails.length > 1 && (
              <button
                type="button"
                onClick={() => removeField('emails', index)}
                className="p-2 text-red-600 hover:text-red-800"
              >
                <FiX className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => addField('emails')}
          className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
        >
          <FiPlus className="w-4 h-4 mr-1" /> Add Email
        </button>
      </div>

      {/* Phone Numbers */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Numbers
        </label>
        {formData.phones.map((phone, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="tel"
              value={phone}
              onChange={(e) => updateField('phones', index, e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md"
            />
            {formData.phones.length > 1 && (
              <button
                type="button"
                onClick={() => removeField('phones', index)}
                className="p-2 text-red-600 hover:text-red-800"
              >
                <FiX className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => addField('phones')}
          className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
        >
          <FiPlus className="w-4 h-4 mr-1" /> Add Phone
        </button>
      </div>

      {/* Communication Periodicity */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Communication Periodicity (weeks)
        </label>
        <select
          value={formData.periodicity}
          onChange={(e) => setFormData({ ...formData, periodicity: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="1">1 week</option>
          <option value="2">2 weeks</option>
          <option value="4">4 weeks</option>
          <option value="8">8 weeks</option>
          <option value="12">12 weeks</option>
        </select>
      </div>

      {/* Comments */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Comments
        </label>
        <textarea
          value={formData.comments}
          onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
          rows={4}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Form Actions */}
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Save Company
        </button>
      </div>
    </form>
  );
};

export default CompanyForm; 