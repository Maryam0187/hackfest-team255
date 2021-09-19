import * as React from 'react';
import {Paper , Container, Typography} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
	free: {
		backgroundColor: '#fff37f',
	},
	book: {
		backgroundColor: '#f25353',
	},
})

interface Column {
	id:
		| 'name'
		| 'eight'
		| 'nine'
		| 'ten'
		| 'eleven'
		| 'twelve'
		| 'one'
		| 'two'
		| 'three'
		| 'four'
		| 'five'
	label: string
	minWidth?: number
	align?: 'right'
	format?: (value: number) => string
}

const columns: readonly Column[] = [
	{ id: 'name', label: 'Name', minWidth: 120 },
	{ id: 'eight', label: '8:00', minWidth: 60 },
	{ id: 'nine', label: '9:00', minWidth: 60 },
	{ id: 'ten', label: '10:00', minWidth: 60 },
	{ id: 'eleven', label: '11:00', minWidth: 60 },
	{ id: 'twelve', label: '12:00', minWidth: 60 },
	{ id: 'one', label: '1:00', minWidth: 60 },
	{ id: 'two', label: '2:00', minWidth: 60 },
	{ id: 'three', label: '3:00', minWidth: 60 },
	{ id: 'four', label: '4:00', minWidth: 60 },
	{ id: 'five', label: '5:00', minWidth: 60 },
]

interface Data {
	name: string
	eight: string
	nine: string
	ten: string
	eleven: string
	twelve: string
	one: string
	two: string
	three: string
	four: string
	five: string
}

function createData(
	name: string,
	eight: string,
	nine: string,
	ten: string,
	eleven: string,
	twelve: string,
	one: string,
	two: string,
	three: string,
	four: string,
	five: string,
): Data {
	return { name, eight, nine, ten, eleven, twelve, one, two, three, four, five }
}

const rows = [
  createData('Therapist 1', '' , '1' , '1','2', '1' , '1','', '' , '',''),
  createData('Therapist 2', '' , '1' , '2','1', '2' , '2','1', '1' , '1',''),
  createData('Therapist 3', '1' , '1' , '1','1', '1' , '1','1', '1' , '',''),
  createData('Therapist 4', '' , '' , '2','2', '1' , '1','2', '1' , '1',''),
  createData('Therapist 5', '' , '' , '','1', '1' , '1','1', '1' , '2',''),
  createData('Therapist 6', '' , '' , '1','1', '1' , '1','1', '1' , '1',''),
];

export default function StickyHeadTable() {
  const classes = useStyles()
  const [tabledata, settabledata] = React.useState(rows);

  const book =(column:String, row:any) => {
        const index = tabledata.findIndex(element  => element.name == row.name);
  }


  return ( 
    <Paper  sx={{ width: '100%', overflow: 'hidden' }}>
      <Container maxWidth="sm">
      <Typography variant="h3" component="h2">
        {new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()}
    </Typography>
      </Container>
      
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tabledata
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (

                        value =='1' ?  ( <TableCell key={column.id} align={column.align} className={classes.free} onClick={() => book(column.id,row)}>
                          
                        </TableCell>)
                        : value =='2' ?
                          
                          ( <TableCell key={column.id} align={column.align} className={classes.book}>
                           
                        </TableCell>)
                         :

                        <TableCell key={column.id} align={column.align}>
                        { value}
                        </TableCell>
                      
                      );


                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      
    </Paper>
  );
}
