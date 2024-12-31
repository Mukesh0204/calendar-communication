import { sampleUsers, preLoginContent } from '../data/sampleData';

export const getPageContent = (page, user) => {
  if (!user) {
    return preLoginContent[page];
  }

  const userData = sampleUsers[user.role];
  
  switch (page) {
    case 'calendar':
      return {
        title: 'Your Calendar',
        data: userData.meetings,
        analytics: {
          total: userData.analytics.totalMeetings,
          upcoming: userData.analytics.upcomingMeetings
        }
      };
    case 'meetings':
      return {
        title: 'Your Meetings',
        data: userData.meetings,
        analytics: {
          completed: userData.analytics.completedMeetings,
          scheduled: userData.analytics.upcomingMeetings
        }
      };
    case 'messages':
      return {
        title: 'Your Messages',
        data: userData.messages,
        analytics: {
          sent: userData.analytics.messagesSent,
          received: userData.analytics.messagesReceived
        }
      };
    case 'analytics':
      return {
        title: 'Your Analytics',
        data: userData.analytics
      };
    default:
      return null;
  }
}; 