export const demoData = {
  companies: [
    {
      id: 1,
      name: 'Tech Solutions Inc.',
      contact: 'John Doe',
      email: 'john@techsolutions.com',
      phone: '+1 (555) 123-4567',
      status: 'active',
      industry: 'Technology',
      lastContact: '2024-02-15',
      logo: '🏢'
    },
    {
      id: 2,
      name: 'Global Innovations',
      contact: 'Jane Smith',
      email: 'jane@globalinnovations.com',
      phone: '+1 (555) 987-6543',
      status: 'active',
      industry: 'Research',
      lastContact: '2024-02-16',
      logo: '🌐'
    },
    {
      id: 3,
      name: 'EcoSmart Solutions',
      contact: 'Mike Johnson',
      email: 'mike@ecosmart.com',
      phone: '+1 (555) 234-5678',
      status: 'active',
      industry: 'Environmental',
      lastContact: '2024-02-17',
      logo: '🌱'
    },
    {
      id: 4,
      name: 'Digital Dynamics',
      contact: 'Sarah Williams',
      email: 'sarah@digitaldynamics.com',
      phone: '+1 (555) 345-6789',
      status: 'pending',
      industry: 'Digital Marketing',
      lastContact: '2024-02-18',
      logo: '💻'
    }
  ],
  events: [
    {
      id: 1,
      title: 'Strategy Meeting - Tech Solutions',
      start: '2024-02-20T10:00:00',
      end: '2024-02-20T11:00:00',
      type: 'video',
      company: 'Tech Solutions Inc.',
      description: 'Quarterly strategy review and planning session',
      status: 'scheduled',
      priority: 'high',
      attendees: ['John Doe', 'Team Lead']
    },
    {
      id: 2,
      title: 'Product Demo - Global Innovations',
      start: '2024-02-21T14:30:00',
      end: '2024-02-21T15:30:00',
      type: 'video',
      company: 'Global Innovations',
      description: 'New product feature demonstration',
      status: 'scheduled',
      priority: 'medium',
      attendees: ['Jane Smith', 'Product Team']
    },
    {
      id: 3,
      title: 'Follow-up Call - EcoSmart',
      start: '2024-02-22T11:00:00',
      end: '2024-02-22T11:30:00',
      type: 'phone',
      company: 'EcoSmart Solutions',
      description: 'Discussion about implementation timeline',
      status: 'scheduled',
      priority: 'medium',
      attendees: ['Mike Johnson']
    },
    {
      id: 4,
      title: 'Project Update - Digital Dynamics',
      start: '2024-02-23T15:00:00',
      end: '2024-02-23T16:00:00',
      type: 'email',
      company: 'Digital Dynamics',
      description: 'Monthly project status update',
      status: 'draft',
      priority: 'low',
      attendees: ['Sarah Williams']
    }
  ],
  statistics: {
    totalCompanies: 4,
    activeCompanies: 3,
    pendingCompanies: 1,
    upcomingEvents: 4,
    completedEvents: 12,
    communicationTypes: {
      video: 45,
      phone: 32,
      email: 78
    }
  },
  recentActivities: [
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      action: 'Meeting Completed',
      date: '2024-02-15',
      time: '11:30 AM',
      status: 'completed',
      type: 'video'
    },
    {
      id: 2,
      company: 'Global Innovations',
      action: 'Email Sent',
      date: '2024-02-16',
      time: '02:45 PM',
      status: 'completed',
      type: 'email'
    },
    {
      id: 3,
      company: 'EcoSmart Solutions',
      action: 'Call Scheduled',
      date: '2024-02-22',
      time: '11:00 AM',
      status: 'upcoming',
      type: 'phone'
    }
  ],
  notifications: [
    {
      id: 1,
      title: 'Upcoming Meeting',
      message: 'Strategy meeting with Tech Solutions in 1 hour',
      type: 'reminder',
      time: '09:00 AM'
    },
    {
      id: 2,
      title: 'Email Response Required',
      message: 'Global Innovations awaiting response',
      type: 'alert',
      time: '02:30 PM'
    }
  ]
}; 