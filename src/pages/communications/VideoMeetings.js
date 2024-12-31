import React from 'react';
import { FiVideo, FiCalendar, FiClock } from 'react-icons/fi';

const VideoMeetings = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center">
          <FiVideo className="mr-2" /> Video Meetings
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Upcoming Meetings */}
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center mb-4">
              <FiCalendar className="text-purple-600 mr-2" />
              <h2 className="text-lg font-semibold">Upcoming Meetings</h2>
            </div>
            <div className="space-y-3">
              <MeetingCard 
                title="Tech Review"
                company="Tech Solutions Inc."
                time="2:00 PM - 3:00 PM"
                date="Today"
              />
              <MeetingCard 
                title="Project Update"
                company="Global Innovations"
                time="10:00 AM - 11:00 AM"
                date="Tomorrow"
              />
            </div>
          </div>

          {/* Past Meetings */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-4">
              <FiClock className="text-gray-600 mr-2" />
              <h2 className="text-lg font-semibold">Past Meetings</h2>
            </div>
            <div className="space-y-3">
              <MeetingCard 
                title="Strategy Planning"
                company="EcoSmart Solutions"
                time="11:00 AM - 12:00 PM"
                date="Yesterday"
                isPast={true}
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                Schedule New Meeting
              </button>
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
                Join Meeting
              </button>
              <button className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors">
                View All Meetings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MeetingCard = ({ title, company, time, date, isPast = false }) => (
  <div className={`p-3 rounded-lg ${isPast ? 'bg-gray-100' : 'bg-white'} shadow-sm`}>
    <h3 className="font-semibold">{title}</h3>
    <p className="text-sm text-gray-600">{company}</p>
    <div className="flex justify-between mt-2 text-sm">
      <span className="text-gray-500">{time}</span>
      <span className="text-gray-500">{date}</span>
    </div>
  </div>
);

export default VideoMeetings; 