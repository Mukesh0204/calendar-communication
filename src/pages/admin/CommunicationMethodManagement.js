import React, { useState } from 'react';
import { FiPlus, FiEdit2, FiTrash2, FiArrowUp, FiArrowDown } from 'react-icons/fi';

const CommunicationMethodManagement = () => {
  const [methods, setMethods] = useState([
    {
      id: 1,
      name: 'LinkedIn Post',
      description: 'Post content on company LinkedIn page',
      sequence: 1,
      mandatory: true
    },
    {
      id: 2,
      name: 'LinkedIn Message',
      description: 'Direct message to company representatives',
      sequence: 2,
      mandatory: true
    },
    {
      id: 3,
      name: 'Email',
      description: 'Email communication to company contacts',
      sequence: 3,
      mandatory: true
    },
    {
      id: 4,
      name: 'Phone Call',
      description: 'Direct phone call to company representatives',
      sequence: 4,
      mandatory: false
    },
    {
      id: 5,
      name: 'Other',
      description: 'Other forms of communication',
      sequence: 5,
      mandatory: false
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    mandatory: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setMethods(methods.map(method =>
        method.id === editingId
          ? { ...formData, id: editingId, sequence: method.sequence }
          : method
      ));
    } else {
      const maxSequence = Math.max(...methods.map(m => m.sequence));
      setMethods([...methods, {
        ...formData,
        id: Date.now(),
        sequence: maxSequence + 1
      }]);
    }
    setIsModalOpen(false);
    setFormData({ name: '', description: '', mandatory: false });
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this communication method?')) {
      const updatedMethods = methods.filter(method => method.id !== id);
      // Resequence remaining methods
      updatedMethods.forEach((method, index) => {
        method.sequence = index + 1;
      });
      setMethods(updatedMethods);
    }
  };

  const handleEdit = (method) => {
    setFormData(method);
    setEditingId(method.id);
    setIsModalOpen(true);
  };

  const moveMethod = (id, direction) => {
    const index = methods.findIndex(method => method.id === id);
    if ((direction === 'up' && index === 0) || 
        (direction === 'down' && index === methods.length - 1)) return;

    const newMethods = [...methods];
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    
    // Swap sequences
    const tempSequence = newMethods[index].sequence;
    newMethods[index].sequence = newMethods[swapIndex].sequence;
    newMethods[swapIndex].sequence = tempSequence;

    // Sort by sequence
    newMethods.sort((a, b) => a.sequence - b.sequence);
    setMethods(newMethods);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          Communication Methods
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-primary"
        >
          <FiPlus className="w-4 h-4 mr-2" />
          Add Method
        </button>
      </div>

      {/* Methods List */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sequence
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Method
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mandatory
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {methods
              .sort((a, b) => a.sequence - b.sequence)
              .map((method) => (
                <tr key={method.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-900">{method.sequence}</span>
                      <div className="flex flex-col">
                        <button
                          onClick={() => moveMethod(method.id, 'up')}
                          disabled={method.sequence === 1}
                          className={`p-1 hover:bg-gray-100 rounded ${
                            method.sequence === 1 ? 'text-gray-300' : 'text-gray-500'
                          }`}
                        >
                          <FiArrowUp className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => moveMethod(method.id, 'down')}
                          disabled={method.sequence === methods.length}
                          className={`p-1 hover:bg-gray-100 rounded ${
                            method.sequence === methods.length ? 'text-gray-300' : 'text-gray-500'
                          }`}
                        >
                          <FiArrowDown className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {method.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">
                      {method.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      method.mandatory
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {method.mandatory ? 'Yes' : 'No'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(method)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      <FiEdit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(method.id)}
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

      {/* Add/Edit Method Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>

            <div className="relative bg-white rounded-lg max-w-lg w-full">
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {editingId ? 'Edit Communication Method' : 'Add New Communication Method'}
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Method Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input mt-1"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="form-input mt-1"
                    rows={3}
                    required
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="mandatory"
                    checked={formData.mandatory}
                    onChange={(e) => setFormData({ ...formData, mandatory: e.target.checked })}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="mandatory" className="ml-2 block text-sm text-gray-900">
                    Mandatory in sequence
                  </label>
                </div>

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
                    {editingId ? 'Update Method' : 'Add Method'}
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

export default CommunicationMethodManagement; 