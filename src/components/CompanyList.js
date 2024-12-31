import React, { useState, useEffect } from 'react';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/companies')
      .then((response) => response.json())
      .then((data) => setCompanies(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Companies</h1>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            {company.name}: {company.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
