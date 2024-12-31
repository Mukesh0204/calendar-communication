import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CompanyForm = ({ initialData, onSubmit, onCancel }) => {
  const [company, setCompany] = useState(
    initialData || { name: '', status: '', communicationMethods: [], frequency: '' }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(company);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Company Name</label>
        <input
          type="text"
          name="name"
          value={company.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select
          name="status"
          value={company.status}
          onChange={handleChange}
          className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Frequency</label>
        <input
          type="text"
          name="frequency"
          value={company.frequency}
          onChange={handleChange}
          className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Communication Methods (comma-separated)
        </label>
        <input
          type="text"
          name="communicationMethods"
          value={company.communicationMethods}
          onChange={(e) =>
            setCompany((prev) => ({
              ...prev,
              communicationMethods: e.target.value.split(',').map((s) => s.trim()),
            }))
          }
          className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Save
        </button>
      </div>
    </form>
  );
};

CompanyForm.propTypes = {
  initialData: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default CompanyForm;
