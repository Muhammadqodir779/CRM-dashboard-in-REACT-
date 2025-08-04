import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from '../analytics_dataset/weather';

const chartSetting = {
  xAxis: [
    {
      label: '',
    },
  ],
  width: 778,
  height: 400,
  margin: { left: 0 },
};

export default function HorizontalBars() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: '', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
