import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
  transition: transform 0.3s ease-in-out;
`;

const Form = styled.form`
  margin-top: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  background-color: ${props => 
    props.type === 'save' ? '#4CAF50' : 
    props.type === 'cancel' ? '#F44336' : 
    '#2196F3'};
  border: none;

  &:hover {
    background-color: ${props => 
      props.type === 'save' ? '#45a049' : 
      props.type === 'cancel' ? '#e53935' : 
      '#1976D2'};
  }
`;

const CommunicationModal = ({ data, onClose, onSave }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(data || {});
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <ModalBackdrop>
      <ModalContent>
        <h2>{data?.id ? 'Edit Company' : 'Add Company'}</h2>
        <Form>
          <Label>
            Name:
            <Input
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Location:
            <Input
              name="location"
              value={formData.location || ''}
              onChange={handleChange}
            />
          </Label>
        </Form>
        <div>
          <Button type="save" onClick={handleSubmit}>Save</Button>
          <Button type="cancel" onClick={onClose}>Cancel</Button>
        </div>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default CommunicationModal;
