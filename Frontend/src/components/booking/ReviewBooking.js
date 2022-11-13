import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BookingList from '../drone/DroneList';

const ReviewBooking = (props) => {

    const {booking} = props;
    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {/* <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead> */}
            <TableBody>
                <TableRow
                    key={booking.source}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="booking">
                        Course
                    </TableCell>
                    <TableCell align="right">{booking.source}</TableCell>
                </TableRow>
                <TableRow
                    key={booking.destination}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="booking">
                        Destination
                    </TableCell>
                    <TableCell align="right">{booking.destination}</TableCell>
                </TableRow>
                <TableRow
                    key={booking.droneType}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="booking">
                        Type
                    </TableCell>
                    <TableCell align="right">{booking.droneType}</TableCell>
                </TableRow>
                <TableRow
                    key={booking.droneId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="booking">
                        Number
                    </TableCell>
                    <TableCell align="right">{booking.droneNumber}</TableCell>
                </TableRow>
                <TableRow
                    key={booking.model}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="booking">
                        Model
                    </TableCell>
                    <TableCell align="right">{booking.model}</TableCell>
                </TableRow>
                <TableRow
                    key={booking.chargePerHour}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="booking">
                        Charge Per Day
                    </TableCell>
                    <TableCell align="right">{booking.chargePerHour}</TableCell>
                </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default ReviewBooking;