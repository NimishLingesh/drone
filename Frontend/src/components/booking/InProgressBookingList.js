import React, {useState, useEffect, useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AuthContext } from '../authenticaion/ProvideAuth';
import {fechInProgressBookings} from '../../services/bookingService';

// function createData(bookingNumber, droneNumber, date,  charge) {
//   return { bookingNumber, droneNumber, charge, date };
// }

// const rows = [
//   createData('1', '8CPA850', '11/10/2021', 16.0 ),
//   createData('2', '7YPN393', '11/09/2021', 29.0),
//   createData('3', '8AMF954', '11/09/2021', 56.0),
//   createData('4', '8AMF954', '10/19/2021', 76.0),
//   createData('5', '8AMF954', '10/09/2021', 76.0),
//   createData('6', '8AMF954', '10/06/2021', 146.0),
//   createData('7', '7MWL676', '09/30/2021', 122.0),
//   createData('8', '7MWL676', '09/29/2021', 102.0),
//   createData('9', '8AMF954', '09/19/2021', 56.0),
//   createData('10','8AMF954', '05/09/2021', 86.0),
//   createData('11', '8AMF954', '05/09/2021', 86.0),

// ];

const InProgressBookingList = props => {


    const authContext = useContext(AuthContext);
    const {user} = authContext;
    const [inProgressBookings, setInProgressBookings] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getInProgressBookings();
    },[])

    const getInProgressBookings = async () => {
        setLoading(true);
        const {userId, persona} = user;
        const resp = await fechInProgressBookings(userId, persona);
        if(resp.status === 200){
            setInProgressBookings(resp.data.payload);
            setLoading(false);
        }
        else{
            console.log(resp.data.message);
        }
    }

    //   const selectBooking = (e) =>{
    //     const {droneId,model, chargePerHour } = JSON.parse(e.target.value);
    //     console.log("Booking selected", JSON.parse(e.target.value));
    //     const {setBooking, booking} = props;
    //     setBooking({
    //       ...booking,
    //       droneId,
    //       model, 
    //       chargePerHour,
    //     })
    //   }

    //   const fetchDroneList = async (type) => {
    //     const resp = await fetchDroneListFromDB(type);
    //     console.log(resp);
    //     if(resp.status === 200){
    //       console.log(resp.data.payload);
    //       const rows = [];
    //       resp.data.payload.forEach(el => {
    //         const { droneId, ownerId, type, model, chargePerHour, mileage} = el;
    //         rows.push({
    //           droneId,
    //           ownerId, 
    //           type, 
    //           model,
    //           chargePerHour, 
    //           mileage,
    //         })
    //       });
    //       setDroneList(rows);

    //       setLoading(false);
    //     }
    //     else{
    //       console.log(resp.data.message);
    //     }

    //   }

    return (
        <>
        {!loading && (
        <>
        {inProgressBookings.length > 0 ? (
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    {(user.persona === 'admin' )&& (<TableCell >User Id</TableCell>)}
                    {(user.persona === 'admin' )&& (<TableCell align="right" >User Name</TableCell>)}
                    <TableCell align="right">Source</TableCell>
                    <TableCell align="right">Destination</TableCell>
                    <TableCell align="right">Drone Number</TableCell>
                    <TableCell align="right">Status</TableCell>
    
                </TableRow>
                </TableHead>
                <TableBody>
                {inProgressBookings.map((row) => (
                    <TableRow
                    key={row.bookingId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    {(user.persona === 'admin' )&& (<TableCell component="th" scope="row">{row.userId}</TableCell>)}
                    {(user.persona === 'admin' )&& (<TableCell align="right"> {row.fname} </TableCell>)}
                    <TableCell align="right"> {row.source} </TableCell>
                    <TableCell align="right">{row.destination}</TableCell>
                    <TableCell align="right">{row.droneId}</TableCell>
                    <TableCell style={{color:' green'}}align="right">{row.status}</TableCell>
    
    
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        ) : (
            <span>No Bookings in Progress</span>
        )
        }
        
        </>
        )}
        </>
    );
}

export default InProgressBookingList;