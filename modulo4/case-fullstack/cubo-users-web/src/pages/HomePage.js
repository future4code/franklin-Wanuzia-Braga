import { Typography } from '@mui/material';
import {useEffect, useRef, useState} from 'react';
import {PieChart} from '../components/Chart/PieChart';
import DataTable from '../components/TableParticipation/DataTable';
import {GraphContainer} from './styled'
import Header from "../components/Header/Header.js";
import { useApp } from '../context/AppContext'

const HomePage = () => {
const { data, getData } = useApp()
const [users, setUsers] = useState(data)
const initialRender = useRef(true)


useEffect(()=> {
if(initialRender.current) {
    initialRender.current = false
    getData()
}
setUsers(data)
}, [data, getData])

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
                marginBottom={4}
                >
                    Abaixo está a relação entre participante e seu respectivo percentual de participação
                </Typography>
                <GraphContainer>
                    { users?.length > 0 && (
                    <>
                        <DataTable data={users}/>
                        <PieChart data={users}/>
                    </>
                    )
                    
                }
                </GraphContainer>
            </div>
      )
    }
    
    export default HomePage