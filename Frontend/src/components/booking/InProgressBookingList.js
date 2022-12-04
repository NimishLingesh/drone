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


    return (
        <>
        {!loading && (
        <>
        {inProgressBookings.length > 0 ? (
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    {(user.persona === 'admin' || user.persona === 'owner' )&& (<TableCell >User Id</TableCell>)}
                    {(user.persona === 'admin' || user.persona === 'owner' )&& (<TableCell align="right" >User Name</TableCell>)}
                    {(user.persona === 'admin' || user.persona === 'owner' )&& (<TableCell align="right" >Source</TableCell>)}
                    {(user.persona === 'customer' )&& (<TableCell >Source</TableCell>)}
                    <TableCell align="right">Destination</TableCell>
                    <TableCell align="right">Drone Number</TableCell>
                    {(user.persona === 'admin' ||user.persona === 'customer')&& (<TableCell align="right">Status</TableCell>)}
    
                </TableRow>
                </TableHead>
                <TableBody>
                {inProgressBookings.map((row) => (
                    <TableRow
                    key={row.bookingId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    {(user.persona === 'admin'|| user.persona === 'owner'  )&& (<TableCell component="th" scope="row">{row.userId}</TableCell>)}
                    {(user.persona === 'admin' || user.persona === 'owner' )&& (<TableCell align="right"> {row.fname} </TableCell>)}
                    {(user.persona === 'admin' || user.persona === 'owner' )&& (<TableCell align="right"> {row.source} </TableCell>)}
                    {(user.persona === 'customer' )&& (<TableCell component="th" scope="row"> {row.source} </TableCell>)}
                    <TableCell align="right">{row.destination}</TableCell>
                    <TableCell align="right">{row.droneId}</TableCell>
                    {(user.persona === 'admin' ||user.persona === 'customer')&& (<TableCell style={{color:' green'}}align="right">{row.status}</TableCell>)}
                    
    
    
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