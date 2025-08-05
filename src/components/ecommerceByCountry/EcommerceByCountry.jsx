// SalesByCountry.jsx
import React from 'react';
import { Box, Typography, LinearProgress, Stack, Paper } from '@mui/material';
import worldImage from "../../assets/ecommerce_worldimage.png";

const countries = [
  { name: 'United States', value: 60, flag: '🇺🇸' },
  { name: 'Spain', value: 20, flag: '🇪🇸' },
  { name: 'United Kingdom', value: 10, flag: '🇬🇧' },
  { name: 'Germany', value: 5, flag: '🇩🇪' },
  { name: 'Canada', value: 5, flag: '🇨🇦' },
];

export default function EcommerceByCountry() {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 780,
        height: 500,
        p: 3,
        borderRadius: 4,
        ml: '280px',
        mt: '-450px',
        mb: '10px' // ← chapdan 250px margin
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Sales by Country
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* LEFT: World map image */}
        <Box
          sx={{
            width: '50%',
            height: 200,
            backgroundImage: `url(${worldImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 2,
            mr: 2,
          }}
        />

        {/* RIGHT: Country data */}
        <Box sx={{ width: '40%' }}>
          <Typography variant="body2" color="text.secondary">
            Total
          </Typography>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            $152K
          </Typography>

          <Stack spacing={2}>
            {countries.map((country, idx) => (
              <Box key={idx}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                  <Typography fontSize={22}>{country.flag}</Typography>
                  <Typography sx={{ flexGrow: 1 }}>{country.name}</Typography>
                  <Typography fontWeight="medium">{country.value}%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={country.value}
                  sx={{
                    height: 8,
                    borderRadius: 5,
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#6366F1',
                    },
                  }}
                />
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
}
