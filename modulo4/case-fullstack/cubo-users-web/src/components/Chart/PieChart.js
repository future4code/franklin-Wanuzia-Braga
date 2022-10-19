import * as React from 'react'
import { Paper } from "@mui/material";
import { PieSeries, Legend, Chart } from '@devexpress/dx-react-chart-material-ui';
import { isMobile } from 'react-device-detect';

  export const PieChart = ({data}) => {

    if(data?.length <= 0 ){
      return null
    }
    const legendRootStyle = {
      display: 'flex',
      margin: 'auto',
      flexDirection: isMobile ? "row" : "column",
      flexWrap: 'wrap',
    };
    const LegendRoot = props => (
      <Legend.Root {...props} style={legendRootStyle} />
    );

    return (
          <Paper style={{width: '100%'}}>
             <Chart data={data}
              key={data.id}
             >
                <PieSeries
                valueField="participation"
                argumentField="first_name"
                innerRadius={0.6}
                />
                <Legend 
                position={ isMobile ?  "bottom" : "right" } 
                rootComponent={ LegendRoot }
                />
              </Chart>
          </Paper>
      )
  }