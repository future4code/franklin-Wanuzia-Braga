import * as React from 'react';
import {Grid, Table, TableHeaderRow} from '@devexpress/dx-react-grid-material-ui';
import {GridContainer} from './styles'


  const tableColumnExtensions = [
  { columnName: 'index'}, 
  { columnName: 'first_name'},
  { columnName: 'last_name'},
  { columnName: 'participation'}
  ]

export default function DataTable({data}) {
  const columns = [
    { name: 'index', title: ' '},
    { name: 'first_name', title: 'First name'},
    { name: 'last_name', title: 'Last name' },
    { name: 'participation', title: 'Participation %'}
    ];

  return (
    <GridContainer >
      <Grid
        rows={data} 
        columns={columns}
      >
      <Table
      style={{width: '100%'}}
      tableColumnExtensions={tableColumnExtensions}
      />
      <TableHeaderRow />
      </Grid>
    </GridContainer>
  );
}