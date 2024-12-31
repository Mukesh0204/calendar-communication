import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiCalendar, 
  FiMessageSquare, 
  FiUsers, 
  FiPieChart,
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter
} from 'react-icons/fi';

const Footer = () => {
  const navigation = {
    product: [
      { name: 'Calendar', href: '/calendar', icon: FiCalendar },
      { name: 'Meetings', href: '/meetings', icon: FiUsers },
      { name: 'Messages', href: '/messages', icon: FiMessageSquare },
      { name: 'Analytics', href: '/analytics', icon: FiPieChart },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Contact Us', href: '/contact' },
    ],
    social: [
      { name: 'Twitter', href: '#', icon: FiTwitter },
      { name: 'GitHub', href: '#', icon: FiGithub },
      { name: 'LinkedIn', href: '#', icon: FiLinkedin },
    ],
    contact: [
      { text: 'info@calcomm.com', icon: FiMail },
      { text: '+1 (555) 123-4567', icon: FiPhone },
      { text: '123 Business Ave, Suite 100, CA 94105', icon: FiMapPin },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              CalComm
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Streamline your business communications with our integrated calendar and messaging platform.
            </p>
            <div className="mt-6 flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-blue-600"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-600 hover:text-blue-600 flex items-center"
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              {navigation.contact.map((item, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <item.icon className="mr-2 h-4 w-4 text-gray-400" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} CalComm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 