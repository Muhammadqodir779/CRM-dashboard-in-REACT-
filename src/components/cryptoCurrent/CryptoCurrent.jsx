import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { label: 'Bitcoin', value: 450, color: '#6366F1' },
  { label: 'Ethereum', value: 230, color: '#06AED4' },
  { label: 'US Dollars', value: 300, color: '#F79009' },
];

const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: false, // Legend ko‘rinadi
};

export default function DonutChart() {
  return (
    <PieChart
      series={[
        {
          innerRadius: 60,
          outerRadius: 100,
          data,
          arcLabel: () => '', // Ichki raqamlarni o‘chiradi
        },
      ]}
      {...settings}
    />
  );
}
