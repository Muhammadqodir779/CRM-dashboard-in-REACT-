import * as React from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';

const pData = [1000, 2000, 5000, 3000, 4000, 6000, 9000, 8000, 7000, 3000, 5000, 7000, 4000, 3000, 1000];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
  'Page H',
  'Page I',
  'Page J',
  'Page K',
  'Page L',
  'Page M',
  'Page N',
  'Page O',
];

export default function TinyLineChart() {
  return (
    <ChartContainer
      width={375}
      height={140}
      series={[{ type: 'line', data: pData }]}
      xAxis={[{ scaleType: 'point', data: xLabels, position: 'none' }]}
      yAxis={[{ position: 'none' }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          stroke: '#06AED4',
          strokeWidth: 2,
        },
        [`& .${markElementClasses.root}`]: {
          stroke: '#8884d8',
          r: 0, // Modify the circle radius
          fill: '#fff',
          strokeWidth: 2,
        },
      }}
      disableAxisListener
    >
      <LinePlot />
      <MarkPlot />
    </ChartContainer>
  );
}
