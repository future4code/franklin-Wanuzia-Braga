import * as React from 'react';
import {Grid, Table} from '@devexpress/dx-react-grid-material-ui';
import {GridContainer} from './styles'


  const tableColumnExtensions = [
  { columnName: 'index'},
  { columnName: 'first_name'},
  { columnName: 'last_name'},
  { columnName: 'participation'}
  ]

export default function DataTable({data}) {
  const columns = [
    { name: 'index', title: ''},
    { name: 'first_name', title: 'First name'},
    { name: 'last_name', title: 'Last name' },
    { name: 'participation', title: 'Participation %'}
    ];

  return (
    <GridContainer style={{width: '100%'}} >
      <Grid
        rows={data} 
        columns={columns}
      >
      <Table
      style={{minWidth: '100%'}}
      tableColumnExtensions={tableColumnExtensions}
      />
      </Grid>
    </GridContainer>
  );
}