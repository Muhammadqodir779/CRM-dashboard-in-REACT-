import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const margin = { right: 24 };
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 6841, 5317, 5174, 3214, 9687];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 6714, 3241, 9687, 2147, 3687];
const xLabels = [
  'Jan 20',
  'Jan 21',
  'Jan 22',
  'Jan 23',
  'Jan 24',
  'Jan 25',
  'Jan 26',
  'Jan 27',
  'Jan 28',
  'Jan 29',
  'Jan 30',
  'Jan 31'
];

export default function EcommerceLinechart() {
  return (
    <LineChart
      height={300}
      series={[
        { data: pData },
        { data: uData },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      yAxis={[{ width: 50 }]}
      margin={margin}
    />
  );
}
