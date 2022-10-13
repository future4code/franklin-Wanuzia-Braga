import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: '', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 140 },
  { field: 'lastName', headerName: 'Last name', width: 140 },
  { field: 'participation', headerName: 'Participation', type: 'string', width: 100 }
  ];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', participation: '5%' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', participation: '14%' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', participation: '4%' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', participation: '16%' },
   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', participation: '4%' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', participation: '3%' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', participation: '6%' }
];

export default function DataTable() {
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