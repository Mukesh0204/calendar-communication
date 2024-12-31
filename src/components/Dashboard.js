import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCompanies } from '../services/api'; // Assuming you have an API service to fetch data
import Calendar from 'react-calendar'; // Calendar component

const Dashboard = () => {
  const { id } = useParams(); // Get the company ID from the URL
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error handling
  const [date, setDate] = useState(new Date()); // State for calendar selection

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const data = await getCompanies(); // Assuming this returns all companies
        const selectedCompany = data.find((company) => company.id === parseInt(id)); // Find the company by ID
        setCompany(selectedCompany);
      } catch (err) {
        setError('Failed to load company details');
      } finally {
        setLoading(false);
      }
    };

    fetchCompany();
  }, [id]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Company Dashboard</h1>

      {/* Error handling */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Loading State */}
      {loading ? (
        <p>Loading company details...</p>
      ) : (
        company && (
          <div>
            <h2 className="text-xl font-semibold">{company.name}</h2>
            <div className="calendar-container mb-6">
              <Calendar onChange={setDate} value={date} />
            </div>

            <table className="table-auto w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-2">Company Name</th>
                  <th className="border-b p-2">Last 5 Communications</th>
                  <th className="border-b p-2">Next Communication</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b p-2">{company.name}</td>
                  <td className="border-b p-2">
                    {company.lastCommunications.map((comm, index) => (
                      <p key={index}>
                        {comm.type} - {comm.date}
                      </p>
                    ))}
                  </td>
                  <td className="border-b p-2">
                    {company.nextCommunication.type} - {company.nextCommunication.date}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      )}
    </div>
  );
};

export default Dashboard;
