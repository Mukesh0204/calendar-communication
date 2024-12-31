import React, { useState, useEffect } from 'react';

const AdminCompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({
    name: '',
    location: '',
    linkedIn: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
    communicationPeriodicity: '',
  });

  useEffect(() => {
    // Fetch companies from the API (use your backend API URL)
    fetch('/api/companies')
      .then((response) => response.json())
      .then((data) => setCompanies(data))
      .catch((error) => console.error('Error fetching companies:', error));
  }, []);

  const handleChange = (e) => {
    setNewCompany({ ...newCompany, [e.target.name]: e.target.value });
  };

  const handleAddCompany = (e) => {
    e.preventDefault();
    // Send POST request to add new company
    fetch('/api/companies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCompany),
    })
      .then((response) => response.json())
      .then((data) => setCompanies([...companies, data]))
      .catch((error) => console.error('Error adding company:', error));
  };

  const handleDeleteCompany = (companyId) => {
    fetch(`/api/companies/${companyId}`, {
      method: 'DELETE',
    })
      .then(() => setCompanies(companies.filter((company) => company.id !== companyId)))
      .catch((error) => console.error('Error deleting company:', error));
  };

  return (
    <div>
      <h2>Company Management</h2>

      <form onSubmit={handleAddCompany}>
        <input
          type="text"
          name="name"
          value={newCompany.name}
          onChange={handleChange}
          placeholder="Company Name"
        />
        <input
          type="text"
          name="location"
          value={newCompany.location}
          onChange={handleChange}
          placeholder="Location"
        />
        <input
          type="text"
          name="linkedIn"
          value={newCompany.linkedIn}
          onChange={handleChange}
          placeholder="LinkedIn Profile"
        />
        <input
          type="text"
          name="emails"
          value={newCompany.emails}
          onChange={handleChange}
          placeholder="Emails (comma separated)"
        />
        <input
          type="text"
          name="phoneNumbers"
          value={newCompany.phoneNumbers}
          onChange={handleChange}
          placeholder="Phone Numbers"
        />
        <input
          type="text"
          name="comments"
          value={newCompany.comments}
          onChange={handleChange}
          placeholder="Comments"
        />
        <input
          type="text"
          name="communicationPeriodicity"
          value={newCompany.communicationPeriodicity}
          onChange={handleChange}
          placeholder="Communication Periodicity"
        />
        <button type="submit">Add Company</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>LinkedIn</th>
            <th>Emails</th>
            <th>Phone Numbers</th>
            <th>Comments</th>
            <th>Periodicity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.location}</td>
              <td>{company.linkedIn}</td>
              <td>{company.emails}</td>
              <td>{company.phoneNumbers}</td>
              <td>{company.comments}</td>
              <td>{company.communicationPeriodicity}</td>
              <td>
                <button onClick={() => handleDeleteCompany(company.id)}>Delete</button>
                {/* Add Edit functionality as needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCompanyManagement;
