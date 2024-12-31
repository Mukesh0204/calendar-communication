import React, { useState } from 'react';
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: 'Tech Solutions Inc.',
      location: 'New York, USA',
      linkedIn: 'https://linkedin.com/company/tech-solutions',
      emails: ['contact@techsolutions.com', 'support@techsolutions.com'],
      phones: ['+1-234-567-8900', '+1-234-567-8901'],
      comments: 'Key client in tech sector',
      communicationPeriodicity: 14 // days
    }
  ]);

  // Add company form state
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    linkedIn: '',
    emails: [''],
    phones: [''],
    comments: '',
    communicationPeriodicity: 14
  });

  // Add company modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Form handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setCompanies(companies.map(company => 
        company.id === editingId ? { ...formData, id: editingId } : company
      ));
    } else {
      setCompanies([...companies, { ...formData, id: Date.now() }]);
    }
    setIsModalOpen(false);
    setFormData({
      name: '',
      location: '',
      linkedIn: '',
      emails: [''],
      phones: [''],
      comments: '',
      communicationPeriodicity: 14
    });
    setEditingId(null);
  };

  // Delete company
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this company?')) {
      setCompanies(companies.filter(company => company.id !== id));
    }
  };

  // Edit company
  const handleEdit = (company) => {
    setFormData(company);
    setEditingId(company.id);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Company Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-primary"
        >
          <FiPlus className="w-4 h-4 mr-2" />
          Add Company
        </button>
      </div>

      {/* Company List */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Communication Period
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {companies.map((company) => (
              <tr key={company.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {company.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {company.emails[0]}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{company.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    Every {company.communicationPeriodicity} days
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(company)}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    <FiEdit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(company.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Company Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>

            <div className="relative bg-white rounded-lg max-w-2xl w-full">
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {editingId ? 'Edit Company' : 'Add New Company'}
                </h3>

                {/* Form fields */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      value={formData.linkedIn}
                      onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Communication Period (days)
                    </label>
                    <input
                      type="number"
                      value={formData.communicationPeriodicity}
                      onChange={(e) => setFormData({ ...formData, communicationPeriodicity: parseInt(e.target.value) })}
                      className="form-input"
                      min="1"
                      required
                    />
                  </div>
                </div>

                {/* Dynamic email fields */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Addresses
                  </label>
                  {formData.emails.map((email, index) => (
                    <div key={index} className="mt-2 flex">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          const newEmails = [...formData.emails];
                          newEmails[index] = e.target.value;
                          setFormData({ ...formData, emails: newEmails });
                        }}
                        className="form-input"
                        required
                      />
                      {index === formData.emails.length - 1 && (
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, emails: [...formData.emails, ''] })}
                          className="ml-2 btn-secondary"
                        >
                          Add Email
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Dynamic phone fields */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Numbers
                  </label>
                  {formData.phones.map((phone, index) => (
                    <div key={index} className="mt-2 flex">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          const newPhones = [...formData.phones];
                          newPhones[index] = e.target.value;
                          setFormData({ ...formData, phones: newPhones });
                        }}
                        className="form-input"
                        required
                      />
                      {index === formData.phones.length - 1 && (
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, phones: [...formData.phones, ''] })}
                          className="ml-2 btn-secondary"
                        >
                          Add Phone
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Comments */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Comments
                  </label>
                  <textarea
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    className="form-input h-32"
                  />
                </div>

                {/* Form actions */}
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setEditingId(null);
                    }}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    {editingId ? 'Update Company' : 'Add Company'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyManagement; 