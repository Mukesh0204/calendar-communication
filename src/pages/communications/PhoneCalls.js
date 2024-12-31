import React from 'react';
import { FiPhone, FiClock } from 'react-icons/fi';

const PhoneCalls = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center">
          <FiPhone className="mr-2" /> Phone Calls
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Scheduled Calls */}
          <div className="bg-green-50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Scheduled Calls</h2>
            <div className="space-y-3">
              <CallCard 
                contact="John Doe"
                company="Tech Solutions"
                time="3:30 PM"
                date="Today"
              />
              <CallCard 
                contact="Jane Smith"
                company="Global Corp"
                time="11:00 AM"
                date="Tomorrow"
              />
            </div>
          </div>

          {/* Recent Calls */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Recent Calls</h2>
            <div className="space-y-3">
              <CallCard 
                contact="Mike Johnson"
                company="EcoSmart"
                time="Yesterday"
                date="10:00 AM"
                isPast={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CallCard = ({ contact, company, time, date, isPast = false }) => (
  <div className={`p-3 rounded-lg ${isPast ? 'bg-gray-100' : 'bg-white'} shadow-sm`}>
    <h3 className="font-semibold">{contact}</h3>
    <p className="text-sm text-gray-600">{company}</p>
    <div className="flex justify-between mt-2 text-sm">
      <span className="text-gray-500">{time}</span>
      <span className="text-gray-500">{date}</span>
    </div>
  </div>
);

export default PhoneCalls; 