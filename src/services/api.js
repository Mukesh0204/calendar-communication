// Import mock data (if used)
import mockData from './mockData';

// Base API URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Mock delay function
const simulateDelay = (data, delay = 1000) =>
  new Promise((resolve) => setTimeout(() => resolve(data), delay));

// Fetch companies (toggle between mock and real API)
export const getCompanies = async () => {
  try {
    if (process.env.REACT_APP_USE_MOCK === 'true') {
      console.log('Using mock data...');
      return simulateDelay(mockData);
    } else {
      console.log('Fetching companies from API:', `${API_BASE_URL}/companies`);
      const response = await fetch(`${API_BASE_URL}/companies`);
      if (!response.ok) {
        console.error('API Error:', response.status, response.statusText);
        throw new Error('Failed to fetch companies');
      }
      return response.json();
    }
  } catch (error) {
    console.error('Error in getCompanies:', error.message);
    throw error;
  }
};

// Delete a company by ID
export const deleteCompany = async (id) => {
  const response = await fetch(`${API_BASE_URL}/companies/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete company');
  return response.json();
};

// Update company details
export const updateCompany = async (company) => {
  const response = await fetch(`${API_BASE_URL}/companies/${company.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(company),
  });
  if (!response.ok) throw new Error('Failed to update company');
  return response.json();
};
