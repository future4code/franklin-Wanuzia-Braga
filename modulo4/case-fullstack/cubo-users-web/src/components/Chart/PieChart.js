import * as React from 'react'
import { Paper } from "@mui/material";
import { Chart, PieSeries, Title, Legend } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from "@devexpress/dx-react-chart";

const mockData = [
    {irstName: 'Jon', participation: '5%' },
    {firstName: 'Cersei', participation: '14%' },
    { firstName: 'Jaime', participation: '4%' },
    {  firstName: 'Arya', participation: '16%' },
     {firstName: 'Ferrara', participation: '4%' },
    {firstName: 'Rossini', participation: '3%' },
    { firstName: 'Harvey', participation: '6%' }
  ];

  export default function PieChart() {
      return (
          <Paper style={{width: '50%'}}>
              <Chart data={mockData}>
                <PieSeries
                valueField="participation"
                argumentField="user"
                />
                <Title text="Participations" />
                <Animation />
                <Legend />
              </Chart>
          </Paper>
      )
  }