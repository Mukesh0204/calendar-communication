import React, { useState, useEffect } from 'react';

const AdminCommunicationMethodManagement = () => {
  const [methods, setMethods] = useState([]);
  const [newMethod, setNewMethod] = useState({
    name: '',
    description: '',
    sequence: '',
    mandatory: false,
  });

  useEffect(() => {
    // Fetch communication methods from the API (use your backend API URL)
    fetch('/api/communication-methods')
      .then((response) => response.json())
      .then((data) => setMethods(data))
      .catch((error) => console.error('Error fetching communication methods:', error));
  }, []);

  const handleChange = (e) => {
    setNewMethod({ ...newMethod, [e.target.name]: e.target.value });
  };

  const handleAddMethod = (e) => {
    e.preventDefault();
    fetch('/api/communication-methods', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMethod),
    })
      .then((response) => response.json())
      .then((data) => setMethods([...methods, data]))
      .catch((error) => console.error('Error adding method:', error));
  };

  const handleDeleteMethod = (methodId) => {
    fetch(`/api/communication-methods/${methodId}`, {
      method: 'DELETE',
    })
      .then(() => setMethods(methods.filter((method) => method.id !== methodId)))
      .catch((error) => console.error('Error deleting method:', error));
  };

  return (
    <div>
      <h2>Communication Method Management</h2>

      <form onSubmit={handleAddMethod}>
        <input
          type="text"
          name="name"
          value={newMethod.name}
          onChange={handleChange}
          placeholder="Method Name"
        />
        <input
          type="text"
          name="description"
          value={newMethod.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="sequence"
          value={newMethod.sequence}
          onChange={handleChange}
          placeholder="Sequence"
        />
        <label>
          Mandatory:
          <input
            type="checkbox"
            name="mandatory"
            checked={newMethod.mandatory}
            onChange={() => setNewMethod({ ...newMethod, mandatory: !newMethod.mandatory })}
          />
        </label>
        <button type="submit">Add Communication Method</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Sequence</th>
            <th>Mandatory</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {methods.map((method) => (
            <tr key={method.id}>
              <td>{method.name}</td>
              <td>{method.description}</td>
              <td>{method.sequence}</td>
              <td>{method.mandatory ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => handleDeleteMethod(method.id)}>Delete</button>
                {/* Add Edit functionality as needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCommunicationMethodManagement;
