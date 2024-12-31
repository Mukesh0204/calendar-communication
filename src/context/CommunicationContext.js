import { createContext, useState, useContext } from 'react';

const CommunicationContext = createContext();

export const CommunicationProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [communications, setCommunications] = useState([]);

  const addCompany = (company) => setCompanies((prev) => [...prev, company]);

  const logCommunication = (companyId, communication) => {
    setCommunications((prev) => [...prev, { companyId, ...communication }]);
  };

  return (
    <CommunicationContext.Provider value={{ companies, communications, addCompany, logCommunication }}>
      {children}
    </CommunicationContext.Provider>
  );
};

export const useCommunication = () => useContext(CommunicationContext);
