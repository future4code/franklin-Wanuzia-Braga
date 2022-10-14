import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';

const columns = [
  { field: 'id', headerName: '', width: 70 },
  { field: 'first_name', headerName: 'First name', width: 140 },
  { field: 'last_name', headerName: 'Last name', width: 140 },
  { field: 'participation', headerName: 'Participation %', type: 'string', width: 150 }
  ];

export default function DataTable() {
  const rows = useRequestData([], `${BASE_URL}participation`)
  return (
    <div style={{ height: 400, width: '40vw', margin: '4vh', minHeight: 500}}>
      <DataGrid
        rows={rows} 
        columns={columns}
        pageSize={10}
      />
    </div>
  );
}