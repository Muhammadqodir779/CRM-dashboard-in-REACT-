import React from 'react';
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { PieChart } from '@mui/x-charts';
import Sidebar from '../sidebar/Sidebar';
import HorizontalBars from './HorizontalBars';
import usflag from "../../assets/flag-us.png"
import TinyLineChart from './TinyLineChart';



const CardItem = ({ title, value }) => (
  <Card sx={{ flex: 1 }}>
    <CardContent>
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant="h5" fontWeight="bold">{value}</Typography>
      <TinyLineChart />
    </CardContent>
  </Card>
);


const Charts = () => (
  <Grid container spacing={4} marginTop={4}>
    <Grid item xs={12} md={8}>
      <Card>
        <CardContent>
          <Typography variant="subtitle1">Traffic Sources</Typography>
          <HorizontalBars />
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} md={4}>
      <Card style={{
        marginLeft: "630px"
      }}>
        <CardContent>
          <Typography variant="subtitle1">Social Media Sources</Typography>
          <PieChart
            series={[{
              data: [
                { id: 0, value: 30, label: 'Facebook' },
                { id: 1, value: 30, label: 'LinkedIn' },
                { id: 2, value: 50, label: 'Instagram' },
              ],
            }]}
            width={300}
            height={200}
          />
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);



const VisitsByCountry = () => {
  const data = [
    { image: usflag, country: 'United States', value: 31200, seo: '40%' },
    { image: usflag, country: 'United Kingdom', value: 12700, seo: '47%' },
    { image: usflag, country: 'Russia', value: 10360, seo: '65%' },
    { image: usflag, country: 'Canada', value: 5749, seo: '23%' },
    { image: usflag, country: 'Germany', value: 2932, seo: '45%' },
    { image: usflag, country: 'Spain', value: 200, seo: '56%' },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1">Visits by Country</Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell><strong>Country</strong></TableCell>
              <TableCell align="right"><strong>Value</strong></TableCell>
              <TableCell align="right"><strong>SEO</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.country}</TableCell>
                <TableCell align="right">{row.value.toLocaleString()}</TableCell>
                <TableCell align="right">{row.seo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};


const MostVisitedPages = () => {
  const pages = [
    { name: '/', visitors: 95847, unique: 8584, bounce: '16%' },
    { name: '/auth/login', visitors: 7500, unique: 648, bounce: '5%' },
    { name: '/dashboard', visitors: 85406, unique: 568, bounce: '2%' },
    { name: '/blog/top-5-react-frameworks', visitors: 75050, unique: 12322, bounce: '12%' },
    { name: '/blog/understand-programming-principles', visitors: 68003, unique: 11645, bounce: '10%' },
    { name: '/blog/design-patterns', visitors: 49510, unique: 10259, bounce: '8%' },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1">Most Visited Pages</Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell><strong>Page Name</strong></TableCell>
              <TableCell align="right"><strong>Visitors</strong></TableCell>
              <TableCell align="right"><strong>Unique</strong></TableCell>
              <TableCell align="right"><strong>Bounce Rate</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pages.map((page, index) => (
              <TableRow key={index}>
                <TableCell>{page.name}</TableCell>
                <TableCell align="right">{page.visitors.toLocaleString()}</TableCell>
                <TableCell align="right">{page.unique.toLocaleString()}</TableCell>
                <TableCell align="right">{page.bounce}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};


const Analytics = () => {
  return (
    <Sidebar>
      <div style={{
        padding: '24px',
        marginLeft: '260px'
      }}>


        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h4" fontWeight="bold">Analytics</Typography>
          <Button variant="contained" color="primary">+ New Dashboard</Button>
        </Grid>

        <Grid container spacing={4} marginTop={2}>
          <Grid item xs={12} md={4}><CardItem title="Impressions" value="36.6K" /></Grid>
          <Grid item xs={12} md={4}><CardItem title="Engagements" value="19K" /></Grid>
          <Grid item xs={12} md={4}><CardItem title="Spent" value="$41.2K" /></Grid>
        </Grid>

        <Charts />

        <Grid container spacing={2} marginTop={-75} marginLeft={105}>
          <Grid item xs={12} md={8}><VisitsByCountry /></Grid>
        </Grid>
        <Grid container spacing={2} marginTop={4} >
          <Grid item xs={12} md={6}><MostVisitedPages /></Grid>
        </Grid>
      </div>
    // </Sidebar>
  );
};

export default Analytics;
