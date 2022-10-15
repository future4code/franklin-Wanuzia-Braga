import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GlobalStateContext } from '../../context/global/GlobalStateContext'

const columns = [
  { field: 'id', headerName: '', width: 70 },
  { field: 'first_name', headerName: 'First name', width: 140 },
  { field: 'last_name', headerName: 'Last name', width: 140 },
  { field: 'participation', headerName: 'Participation %', type: 'string', width: 150 }
  ];

export default function DataTable() {
  const {state, requests} = React.useContext(GlobalStateContext)
    React.useEffect(() => {
    requests.getData();
    }, [requests])

  return (
    <div style={{ height: 400, width: '40vw', margin: '4vh', minHeight: 500}}>
      <DataGrid
        rows={state.data} 
        columns={columns}
        pageSize={10}
        // getRowId={data.id}
      />
    </div>
  );
}