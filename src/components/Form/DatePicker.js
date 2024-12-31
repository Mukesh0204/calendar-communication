import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import Card from '../Card';

const chartTypes = {
  line: Line,
  bar: Bar,
  doughnut: Doughnut
};

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const AnalyticsChart = ({
  title,
  subtitle,
  type = 'line',
  data,
  options = {},
  height = '300px',
  loading = false,
  error = null,
}) => {
  const ChartComponent = chartTypes[type];

  return (
    <Card
      title={title}
      subtitle={subtitle}
      isLoading={loading}
      error={error}
    >
      <div style={{ height }}>
        <ChartComponent
          data={data}
          options={{ ...defaultOptions, ...options }}
        />
      </div>
    </Card>
  );
};

export default AnalyticsChart; 