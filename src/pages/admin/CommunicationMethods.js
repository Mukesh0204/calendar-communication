import React, { useState } from 'react';
import MethodForm from '../../components/admin/MethodForm';

const defaultMethods = [
  { id: 1, name: 'LinkedIn Post', description: 'Share content on company LinkedIn', mandatory: false },
  { id: 2, name: 'LinkedIn Message', description: 'Direct message on LinkedIn', mandatory: true },
  { id: 3, name: 'Email', description: 'Email communication', mandatory: true },
  { id: 4, name: 'Phone Call', description: 'Direct phone communication', mandatory: false },
  { id: 5, name: 'Other', description: 'Other forms of communication', mandatory: false }
];

const CommunicationMethods = () => {
  const [methods, setMethods] = useState(defaultMethods);
  const [editingMethod, setEditingMethod] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const moveMethod = (id, direction) => {
    const index = methods.findIndex(m => m.id === id);
    if (
      (direction === 'up' && index === 0) || 
      (direction === 'down' && index === methods.length - 1)
    ) {
      return;
    }

    const newMethods = [...methods];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    [newMethods[index], newMethods[newIndex]] = [newMethods[newIndex], newMethods[index]];
    setMethods(newMethods);
  };

  const handleAddMethod = (method) => {
    setMethods([...methods, { ...method, id: Date.now() }]);
    setIsFormOpen(false);
  };

  const handleEditMethod = (method) => {
    setMethods(methods.map(m => m.id === method.id ? method : m));
    setEditingMethod(null);
    setIsFormOpen(false);
  };

  const handleDeleteMethod = (id) => {
    setMethods(methods.filter(m => m.id !== id));
  };

  const toggleMandatory = (id) => {
    setMethods(methods.map(m => 
      m.id === id ? { ...m, mandatory: !m.mandatory } : m
    ));
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">
            Communication Methods
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage and arrange communication methods in order of preference
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            onClick={() => {
              setEditingMethod(null);
              setIsFormOpen(true);
            }}
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Add Method
          </button>
        </div>
      </div>

      <div className="mt-8 bg-white shadow ring-1 ring-black ring-opacity-5 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                Method
              </th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Description
              </th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Mandatory
              </th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Order
              </th>
              <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {methods.map((method, index) => (
              <tr key={method.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                  {method.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {method.description}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <button
                    onClick={() => toggleMandatory(method.id)}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      method.mandatory
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {method.mandatory ? 'Required' : 'Optional'}
                  </button>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => moveMethod(method.id, 'up')}
                      disabled={index === 0}
                      className={`p-1 rounded ${
                        index === 0 ? 'text-gray-400' : 'text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => moveMethod(method.id, 'down')}
                      disabled={index === methods.length - 1}
                      className={`p-1 rounded ${
                        index === methods.length - 1 ? 'text-gray-400' : 'text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      ↓
                    </button>
                  </div>
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <button
                    onClick={() => {
                      setEditingMethod(method);
                      setIsFormOpen(true);
                    }}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteMethod(method.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isFormOpen && (
        <MethodForm
          method={editingMethod}
          onSubmit={editingMethod ? handleEditMethod : handleAddMethod}
          onClose={() => {
            setIsFormOpen(false);
            setEditingMethod(null);
          }}
        />
      )}
    </div>
  );
};

export default CommunicationMethods; 