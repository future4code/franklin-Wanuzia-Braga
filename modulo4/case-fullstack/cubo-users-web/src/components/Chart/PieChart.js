import * as React from 'react'
import { Paper } from "@mui/material";
import { PieSeries, Title, Legend, Chart } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from "@devexpress/dx-react-chart";
import { isMobile } from 'react-device-detect';

  export const PieChart = ({data}) => {

    if(data?.length <= 0 ){
      return null
    }
    const legendRootStyle = {
      display: 'flex',
      margin: 'auto',
      flexDirection: isMobile ? 'row' : 'column',
      flexFlow: "row wrap"
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
                <Title text="Participations" />
                <Animation />
                <Legend position={ isMobile ?  "bottom" : "right" } rootComponent={ LegendRoot }/>
              </Chart>
          </Paper>
      )
  }