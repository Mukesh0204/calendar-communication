import React, { useState } from 'react';
import Input from '../Form/Input';
import DatePicker from '../Form/DatePicker';
import TextArea from '../Form/TextArea';
import Button from '../Button';
import { FiUser, FiMail, FiPhone, FiCalendar } from 'react-icons/fi';

const ProfileSettings = ({ user, onSave, loading = false }) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    birthDate: user?.birthDate || null,
    bio: user?.bio || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Full Name"
        icon={FiUser}
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />

      <Input
        label="Email"
        type="email"
        icon={FiMail}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <Input
        label="Phone"
        icon={FiPhone}
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />

      <DatePicker
        label="Birth Date"
        value={formData.birthDate}
        onChange={(date) => setFormData({ ...formData, birthDate: date })}
      />

      <TextArea
        label="Bio"
        value={formData.bio}
        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
        placeholder="Tell us about yourself"
      />

      <div className="flex justify-end">
        <Button type="submit" isLoading={loading}>
          Save Changes
        </Button>
      </div>
    </form>
  );
};

export default ProfileSettings; 