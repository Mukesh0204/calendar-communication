# Calendar Communication Tracking Application

A comprehensive React application for managing and tracking company communications, featuring an admin panel, user dashboard, calendar view, and analytics.

## Features

### Admin Module
- **Company Management**
  - Add, edit, and delete companies
  - Manage contact information
  - Set communication periodicity
  - Track LinkedIn profiles and contact details

- **Communication Method Management**
  - Configure communication methods
  - Set sequence and priorities
  - Define mandatory communication steps

### User Module
- **Interactive Dashboard**
  - Grid view of companies
  - Last 5 communications history
  - Next scheduled communications
  - Color-coded status indicators
  - Multi-select functionality

- **Calendar View**
  - Monthly/Weekly/Daily views
  - Past communication records
  - Future communication planning
  - Interactive scheduling

### Notifications
- Real-time notification system
- Overdue communication alerts
- Due today reminders
- Badge count indicators

### Analytics
- Communication frequency charts
- Success rate analysis
- Trend visualization
- Downloadable reports
- Activity logging

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository

2. Install dependencies


3. Start the development server

bash
npm start



The application will be available at `http://localhost:3000`

### Test Credentials

#### Admin Access
- Email: admin@example.com
- Password: admin
- Full access to all features

#### User Access
- Email: user@example.com
- Password: user
- Limited to user features

## Project Structure


plaintext
src/
├── components/
│ ├── Communication/
│ │ └── CommunicationModal.js
│ ├── Notifications/
│ │ └── NotificationCenter.js
│ ├── common/
│ │ └── Tooltip.js
│ └── layout/
│ ├── DashboardLayout.js
│ ├── Header.js
│ └── Sidebar.js
├── pages/
│ ├── admin/
│ │ ├── CompanyManagement.js
│ │ └── CommunicationMethodManagement.js
│ ├── analytics/
│ │ └── AnalyticsDashboard.js
│ ├── auth/
│ │ ├── Login.js
│ │ └── SignUp.js
│ ├── calendar/
│ │ └── CommunicationCalendar.js
│ └── user/
│ └── Dashboard.js
├── styles/
│ └── globals.css
├── App.js
└── index.js

## Dependencies

- **React**: Frontend framework
- **React Router**: Navigation and routing
- **Tailwind CSS**: Styling and UI components
- **React Icons**: Icon library
- **React Big Calendar**: Calendar functionality
- **Recharts**: Analytics charts and graphs
- **date-fns**: Date manipulation

## Available Scripts

calendar-communication/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── Communication/
│   │   │   └── CommunicationModal.js
│   │   ├── Notifications/
│   │   │   └── NotificationCenter.js
│   │   ├── common/
│   │   │   └── Tooltip.js
│   │   └── layout/
│   │       ├── DashboardLayout.js
│   │       ├── Header.js
│   │       └── Sidebar.js
│   │
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── CompanyManagement.js
│   │   │   └── CommunicationMethodManagement.js
│   │   ├── analytics/
│   │   │   └── AnalyticsDashboard.js
│   │   ├── auth/
│   │   │   ├── Login.js
│   │   │   └── SignUp.js
│   │   ├── calendar/
│   │   │   └── CommunicationCalendar.js
│   │   └── user/
│   │       └── Dashboard.js
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   └── tailwind.css
│   │
│   ├── utils/
│   │   ├── auth.js
│   │   └── dateUtils.js
│   │
│   ├── App.js
│   ├── index.js
│   └── routes.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.js
└── postcss.config.js

- `npm start`: Run development server
- `npm test`: Run test suite
- `npm run build`: Build for production
- `npm run deploy`: Deploy to GitHub Pages

## Deployment

1. Update homepage in package.json:
json
{
"homepage": "https://your-username.github.io/calendar-communication"
}

2. Deploy to GitHub Pages:
bash
npm run deploy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- All contributors and maintainers



## Dependencies

- **React**: Frontend framework
- **React Router**: Navigation and routing
- **Tailwind CSS**: Styling and UI components
- **React Icons**: Icon library
- **React Big Calendar**: Calendar functionality
- **Recharts**: Analytics charts and graphs
- **date-fns**: Date manipulation

## Available Scripts

- `npm start`: Run development server
- `npm test`: Run test suite
- `npm run build`: Build for production
- `npm run deploy`: Deploy to GitHub Pages

## Deployment

1. Update homepage in package.json:


2. Deploy to GitHub Pages:


## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- All contributors and maintainers

## Support

For support, email support@example.com or create an issue in the repository.