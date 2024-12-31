import React from 'react';
import { FiCheck, FiClock, FiAlertCircle } from 'react-icons/fi';

const StatusTracking = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Communication Status</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Upcoming */}
          <StatusCard 
            title="Upcoming"
            icon={FiClock}
            count={5}
            color="blue"
            items={[
              { title: "Strategy Meeting", time: "2:00 PM Today" },
              { title: "Client Call", time: "10:00 AM Tomorrow" }
            ]}
          />

          {/* In Progress */}
          <StatusCard 
            title="In Progress"
            icon={FiAlertCircle}
            count={3}
            color="yellow"
            items={[
              { title: "Project Review", time: "Started 30m ago" },
              { title: "Team Update", time: "Started 1h ago" }
            ]}
          />

          {/* Completed */}
          <StatusCard 
            title="Completed"
            icon={FiCheck}
            count={12}
            color="green"
            items={[
              { title: "Sales Meeting", time: "Completed today" },
              { title: "Email Follow-up", time: "Completed yesterday" }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const StatusCard = ({ title, icon: Icon, count, color, items }) => {
  const getColorClasses = () => {
    switch (color) {
      case 'blue': return 'bg-blue-50 text-blue-600';
      case 'yellow': return 'bg-yellow-50 text-yellow-600';
      case 'green': return 'bg-green-50 text-green-600';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className={`rounded-lg p-6 ${getColorClasses()}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Icon className="w-6 h-6 mr-2" />
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <span className="text-2xl font-bold">{count}</span>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusTracking; 