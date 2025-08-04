// src/dataset/weather.js

export const dataset = [
  { month: 'Jan', seoul: 46 },
  { month: 'Feb', seoul: 39 },
  { month: 'Mar', seoul: 35 },
  { month: 'Apr', seoul: 43 },
  { month: 'May', seoul: 45 },
  { month: 'Jun', seoul: 50 },
  { month: 'Jul', seoul: 43 },
];

export const valueFormatter = (value) => `${value} mm`;
