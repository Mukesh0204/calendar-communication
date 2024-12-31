import React, { useState } from 'react';
import CompanyCard from '../components/CompanyCard';
import CompanyForm from '../components/CompanyForm';
import Modal from '../components/Modal';

const Admin = () => {
  const defaultCompanies = [
    {
      id: 1,
      name: 'Default Company A',
      communicationMethods: ['Email', 'Phone'],
      frequency: 'Weekly',
      status: 'active',
    },
    {
      id: 2,
      name: 'Default Company B',
      communicationMethods: ['Slack'],
      frequency: 'Monthly',
      status: 'pending',
    },
  ];

  const [companies, setCompanies] = useState(defaultCompanies);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    setCompanies(companies.filter((company) => company.id !== id));
  };

  const handleAddEdit = (updatedCompany) => {
    if (updatedCompany.id) {
      // Edit company
      setCompanies((prev) =>
        prev.map((company) =>
          company.id === updatedCompany.id ? updatedCompany : company
        )
      );
    } else {
      // Add new company
      setCompanies((prev) => [
        ...prev,
        { ...updatedCompany, id: Date.now() },
      ]);
    }
    setIsModalOpen(false);
    setSelectedCompany(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-center my-6">Admin Dashboard</h1>
      <div className="flex justify-end mb-4 px-6">
        <button
          onClick={() => {
            setSelectedCompany(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add Company
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {companies.map((company) => (
          <CompanyCard
            key={company.id}
            company={company}
            onEdit={() => {
              setSelectedCompany(company);
              setIsModalOpen(true);
            }}
            onDelete={() => handleDelete(company.id)}
          />
        ))}
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedCompany(null);
          }}
        >
          <CompanyForm
            initialData={selectedCompany}
            onSubmit={handleAddEdit}
            onCancel={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default Admin;
