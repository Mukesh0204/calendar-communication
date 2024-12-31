import React from 'react';
import { FiMail, FiSend, FiInbox } from 'react-icons/fi';

const EmailCommunications = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center">
          <FiMail className="mr-2" /> Email Communications
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Inbox */}
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center mb-4">
              <FiInbox className="text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold">Inbox</h2>
            </div>
            <div className="space-y-3">
              <EmailCard 
                subject="Project Update"
                from="Tech Solutions Inc."
                time="1 hour ago"
                preview="Latest updates on the project timeline..."
              />
              <EmailCard 
                subject="Meeting Follow-up"
                from="Global Corp"
                time="3 hours ago"
                preview="Thank you for your time today..."
              />
            </div>
          </div>

          {/* Sent */}
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center mb-4">
              <FiSend className="text-green-600 mr-2" />
              <h2 className="text-lg font-semibold">Sent</h2>
            </div>
            <div className="space-y-3">
              <EmailCard 
                subject="Proposal Document"
                to="EcoSmart Solutions"
                time="Yesterday"
                preview="Please find attached the proposal..."
                isSent={true}
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-purple-50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
                Compose Email
              </button>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                View All Emails
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EmailCard = ({ subject, from, to, time, preview, isSent = false }) => (
  <div className="p-3 rounded-lg bg-white shadow-sm">
    <h3 className="font-semibold">{subject}</h3>
    <p className="text-sm text-gray-600">
      {isSent ? `To: ${to}` : `From: ${from}`}
    </p>
    <p className="text-sm text-gray-500 mt-1">{preview}</p>
    <div className="text-right mt-2">
      <span className="text-sm text-gray-500">{time}</span>
    </div>
  </div>
);

export default EmailCommunications; 