import React, {useState, useEffect, useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {fetchDroneListFromDB, fetchDroneListFromDBForOwner} from '../../services/droneService';
import Radio from '@mui/material/Radio';
import { AuthContext } from '../authenticaion/ProvideAuth';


function createData(bookingNumber, droneNumber, date,  charge) {
  return { bookingNumber, droneNumber, charge, date };
}

const rows = [
  createData('1', '8CPA850', '11/10/2021', 16.0 ),
  createData('2', '7YPN393', '11/09/2021', 29.0),
  createData('3', '8AMF954', '11/09/2021', 56.0),
  createData('4', '8AMF954', '10/19/2021', 76.0),
  createData('5', '8AMF954', '10/09/2021', 76.0),
  createData('6', '8AMF954', '10/06/2021', 146.0),
  createData('7', '7MWL676', '09/30/2021', 122.0),
  createData('8', '7MWL676', '09/29/2021', 102.0),
  createData('9', '8AMF954', '09/19/2021', 56.0),
  createData('10','8AMF954', '05/09/2021', 86.0),
  createData('11', '8AMF954', '05/09/2021', 86.0),

];

export default function DroneList(props) {

  const authContext = useContext(AuthContext);
  const [droneList, setDroneList] = useState();
  const [loading, setLoading] = useState(true);
  console.log(props); 
  useEffect(() => {
    if(props.persona === 'owner'){
      const {user} = authContext;
      const {userId} = user;
      fetchDroneListForOwner(userId);
    }
    else{
      fetchDroneListForCustomer(props.booking.droneType);
    }
  }, [])

  const selectDrone = (e) =>{
    const {droneId, droneNumber, model, chargePerHour } = JSON.parse(e.target.value);
    const {setBooking, booking} = props;
    setBooking({
      ...booking,
      droneId,
      model, 
      droneNumber, 
      chargePerHour,
    })
  }

  const fetchDroneListForCustomer = async (type) => {
    const resp = await fetchDroneListFromDB(type);
    if(resp.status === 200){
      const rows = [];
      resp.data.payload.forEach(el => {
        const { droneNumber, droneId, ownerId, type, model, chargePerHour, mileage} = el;
        rows.push({
          droneNumber,
          droneId,
          ownerId, 
          type, 
          model,
          chargePerHour, 
          mileage,
        })
      });
      setDroneList(rows);

      setLoading(false);
    }
    else{
      console.log(resp.data.message);
    }

  }
  const fetchDroneListForOwner = async (id) => {
    const resp = await fetchDroneListFromDBForOwner(id);
    if(resp.status === 200){
      const rows = [];
      console.log(resp.data.payload);
      resp.data.payload.forEach(el => {
        const { droneNumber, droneId, ownerId, type, model, chargePerHour, mileage} = el;
        rows.push({
          droneNumber, 
          droneId,
          ownerId, 
          type, 
          model,
          chargePerHour, 
          mileage,
        })
      });
      setDroneList(rows);

      setLoading(false);
    }
    else{
      console.log(resp.data.message);
    }

  }

  return (
    <>
    {!loading && (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.booking ? (
              <>
              <TableCell>Select</TableCell>
              <TableCell >Drone Number</TableCell>
              </>
            ) : (
            <TableCell >Drone Number</TableCell>
            )}
            <TableCell align="right">Drone Type</TableCell>
            <TableCell align="right">Drone Model</TableCell>
            <TableCell align="right">Charge Per Hour</TableCell>
            <TableCell align="right">Mileage</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {droneList.map((row) => {
            // console.log('ROW', row);
            return(
            <TableRow
              key={row.droneNumber}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {props.booking ? (
                <>
                <Radio value={JSON.stringify(row)} checked={row.droneId === props.booking.droneId} onChange={selectDrone}/>
                <TableCell align="right">{row.droneNumber}</TableCell>
                </>
              ): (
                <TableCell align="right">{row.droneNumber}</TableCell>

              )}
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.model}</TableCell>
              <TableCell align="right">{row.chargePerHour}</TableCell>
              <TableCell align="right">{row.mileage}</TableCell>


            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
    )}
    </>
  );
}