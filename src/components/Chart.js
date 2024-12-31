import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const Chart = ({
  type = 'line',
  data,
  options = {},
  height = '300px',
  className = '',
  isLoading = false,
  error = null,
}) => {
  const chartOptions = {
    ...defaultOptions,
    ...options,
  };

  if (isLoading) {
    return (
      <div 
        style={{ height }}
        className={`flex items-center justify-center ${className}`}
      >
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div 
        style={{ height }}
        className={`flex items-center justify-center text-red-500 ${className}`}
      >
        {error}
      </div>
    );
  }

  const ChartComponent = type === 'line' ? Line : Bar;

  return (
    <div style={{ height }} className={className}>
      <ChartComponent data={data} options={chartOptions} />
    </div>
  );
};

export default Chart; 