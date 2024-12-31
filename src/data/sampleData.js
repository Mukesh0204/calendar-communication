export const companies = [
  {
    id: 1,
    name: 'Acme Corporation',
    location: 'New York, USA',
    linkedinUrl: 'https://linkedin.com/company/acme-corp',
    emails: ['contact@acme.com', 'support@acme.com'],
    phones: ['+1 (555) 123-4567', '+1 (555) 765-4321'],
    communicationPeriod: 14,
    comments: 'Key strategic partner for Q2 2024',
    lastCommunication: '2024-02-15',
    nextCommunication: '2024-02-29',
    engagementScore: 85
  },
  {
    id: 2,
    name: 'Tech Solutions Inc',
    location: 'San Francisco, USA',
    linkedinUrl: 'https://linkedin.com/company/tech-solutions',
    emails: ['info@techsolutions.com'],
    phones: ['+1 (555) 987-6543'],
    communicationPeriod: 7,
    comments: 'Potential partnership opportunity',
    lastCommunication: '2024-02-18',
    nextCommunication: '2024-02-25',
    engagementScore: 92
  },
  // Add more companies...
];

export const communications = [
  {
    id: 1,
    companyId: 1,
    type: 'linkedin-post',
    date: '2024-02-15',
    notes: 'Shared quarterly update post',
    status: 'completed',
    response: 'Positive engagement, 50+ likes',
    sequence: 1
  },
  {
    id: 2,
    companyId: 1,
    type: 'email',
    date: '2024-02-10',
    notes: 'Follow-up on partnership proposal',
    status: 'completed',
    response: 'Awaiting final approval',
    sequence: 2
  },
  // Add more communications...
];

export const notifications = {
  overdue: [
    {
      id: 1,
      companyId: 2,
      type: 'linkedin-message',
      dueDate: '2024-02-15',
      daysPast: 5,
      notes: 'Follow up on recent post engagement'
    },
    // Add more overdue items...
  ],
  dueToday: [
    {
      id: 2,
      companyId: 1,
      type: 'email',
      notes: 'Send project timeline update'
    },
    // Add more due today items...
  ],
  upcoming: [
    {
      id: 3,
      companyId: 3,
      type: 'phone',
      dueDate: '2024-02-25',
      notes: 'Quarterly review call'
    },
    // Add more upcoming items...
  ]
};

export const analyticsData = {
  communicationTypes: [
    { type: 'LinkedIn Post', count: 45, successRate: 75 },
    { type: 'LinkedIn Message', count: 30, successRate: 85 },
    { type: 'Email', count: 60, successRate: 65 },
    { type: 'Phone Call', count: 25, successRate: 90 },
    { type: 'Other', count: 15, successRate: 70 }
  ],
  trends: [
    { week: 1, communications: 35, responseRate: 80 },
    { week: 2, communications: 42, responseRate: 85 },
    { week: 3, communications: 28, responseRate: 75 },
    { week: 4, communications: 45, responseRate: 88 }
  ],
  metrics: {
    totalCommunications: 175,
    completionRate: 82,
    overdueRate: 8,
    averageResponseTime: 2.5
  }
};

export const scenarios = {
  normal: {
    companies: companies.slice(0, 5),
    communications: communications.slice(0, 10),
    notifications: {
      overdue: notifications.overdue.slice(0, 2),
      dueToday: notifications.dueToday.slice(0, 3),
      upcoming: notifications.upcoming.slice(0, 4)
    }
  },
  heavy: {
    companies: companies,
    communications: communications,
    notifications: notifications
  },
  minimal: {
    companies: companies.slice(0, 2),
    communications: communications.slice(0, 3),
    notifications: {
      overdue: [],
      dueToday: notifications.dueToday.slice(0, 1),
      upcoming: notifications.upcoming.slice(0, 1)
    }
  }
}; 