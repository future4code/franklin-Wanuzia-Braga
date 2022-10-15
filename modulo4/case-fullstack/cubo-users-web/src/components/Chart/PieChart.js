import * as React from 'react'
import { Paper } from "@mui/material";
import { Chart, PieSeries, Title, Legend } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from "@devexpress/dx-react-chart";
import { GlobalStateContext } from '../../context/global/GlobalStateContext'

  export default function PieChart() {
    const {state, requests} = React.useContext(GlobalStateContext)
    React.useEffect(() => {
    requests.getData();
    }, [requests])

    const data = state && state.data.map((dado) => {
        return (
            {first_name: dado.first_name, participation: dado.participation}
        )
    })
      return (
          <Paper style={{width: '35%', margin: '4vh' }}>
              <Chart data={data}>
                <PieSeries
                valueField="participation"
                argumentField="user"
                />
                <Title text="Participations" />
                {/* <Animation /> */}
                <Legend />
              </Chart>
          </Paper>
      )
  }