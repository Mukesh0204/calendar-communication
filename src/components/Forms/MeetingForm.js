import React, { useState } from 'react';
import { FiClock, FiUsers, FiVideo, FiMessageSquare } from 'react-icons/fi';
import Input from '../Form/Input';
import Select from '../Form/Select';
import DatePicker from '../Form/DatePicker';
import TextArea from '../Form/TextArea';
import Button from '../Button';

const MeetingForm = ({ onSubmit, initialData = {}, loading = false }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: new Date(),
    startTime: '09:00',
    duration: '30',
    type: 'video',
    participants: '',
    description: '',
    ...initialData
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Meeting Title"
        value={formData.title}
        onChange={(e) => handleChange('title', e.target.value)}
        placeholder="Enter meeting title"
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DatePicker
          label="Date"
          value={formData.date}
          onChange={(date) => handleChange('date', date)}
          required
        />

        <Input
          label="Start Time"
          type="time"
          value={formData.startTime}
          onChange={(e) => handleChange('startTime', e.target.value)}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Duration"
          value={formData.duration}
          onChange={(e) => handleChange('duration', e.target.value)}
          options={[
            { value: '15', label: '15 minutes' },
            { value: '30', label: '30 minutes' },
            { value: '45', label: '45 minutes' },
            { value: '60', label: '1 hour' }
          ]}
        />

        <Select
          label="Meeting Type"
          value={formData.type}
          onChange={(e) => handleChange('type', e.target.value)}
          options={[
            { value: 'video', label: 'Video Call' },
            { value: 'audio', label: 'Audio Call' },
            { value: 'in-person', label: 'In Person' }
          ]}
        />
      </div>

      <Input
        label="Participants"
        value={formData.participants}
        onChange={(e) => handleChange('participants', e.target.value)}
        placeholder="Enter email addresses (comma separated)"
      />

      <TextArea
        label="Description"
        value={formData.description}
        onChange={(e) => handleChange('description', e.target.value)}
        placeholder="Enter meeting description"
      />

      <div className="flex justify-end space-x-3">
        <Button type="button" variant="secondary">
          Cancel
        </Button>
        <Button type="submit" isLoading={loading}>
          Schedule Meeting
        </Button>
      </div>
    </form>
  );
};

export default MeetingForm; 