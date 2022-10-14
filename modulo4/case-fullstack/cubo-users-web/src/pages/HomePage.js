import { Typography } from '@mui/material';
import * as React from 'react';
import PieChart from '../components/Chart/PieChart';
import DataTable from '../components/TableParticipation/DataTable';
import {GraphContainer} from './styled'

const HomePage = () => {
    
      return (
        <div>
            <Typography 
            align='center' 
            fontSize={32} 
            fontWeight={500}
            marginTop={'3vh'}
            >
                DATA
            </Typography>
            <Typography
            align='center' 
            fontSize={12}
            >
                Abaixo está a relação entre participante e seu respectivo percentual de participação
            </Typography>
            <GraphContainer>
                <DataTable />
                <PieChart />
            </GraphContainer>
        </div>
      )
    }
    
    export default HomePage