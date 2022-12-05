import React, {useState}  from 'react';
import { Calendar } from 'antd';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import TimePicker from 'react-time-picker';
import MenuItem from '@mui/material/MenuItem';

export default function FindSourceAndDestination(props) {

  
  const setSource = (e) => {
    const { booking, setBooking} = props;
    setBooking(
      {
        ...booking,
        source: e.target.value,
      }
    );
  }
  const setDestination = (e) => {
    const { booking, setBooking} = props;
    setBooking(
      {
        ...booking,
        destination: e.target.value,
      }
    );
  }
  const setDroneType = (e) => {
    const { booking, setBooking} = props;
    setBooking(
      {
        ...booking,
        droneType: e.target.value,
      }
    );
  }
  const [value, onChange] = useState('10:00');

  const bookingCalender = () => {
    const onPanelChange = (value, mode) => {
      console.log(value.format('YYYY-MM-DD'), mode);
    };
    return (
      <div className="site-calendar-demo-card">
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    );
  };

  return (
    <React.Fragment>
  
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <TextField
            id="source"
            name="source"
            label="Farm"
            fullWidth
            autoComplete="Source"
            variant="standard"
            onChange={(e) => {setSource(e)}}
            defaultValue={props.booking ? props.booking.source : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="destination"
            name="destination"
            label="Farmland"
            fullWidth
            autoComplete="Drone Type"
            variant="standard"
            onChange={(e) => {setDestination(e)}}
            defaultValue={props.booking ? props.booking.destination : ''}
          />
        </Grid>
        <div>
          
        </div>
        <center>
          <Grid item xs={4}>
          <div style={{margin: 30}}>
            <TimePicker onChange={onChange} value={value} />
          </div>
          <Calendar
            fullscreen={false} 
            onPanelChange={(e) => {bookingCalender(e)}}
            id="calender"
            name="calnder"
            label="calender"
            variant="standard"
            // onChange={(e) => {bookingCalender(e)}}
            defaultValue={props.booking ? props.booking.destination : ''}
          />
          </Grid>
        </center>

        <Grid item xs={12}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.booking ? props.booking.droneType : ''}
          label="Drone Type"
          onChange={setDroneType}
          autoWidth
          style={{width:'30%'}}
        >
          <MenuItem value={'Mini'}>DJI Mini SE Data collection</MenuItem>
          <MenuItem value={'Phantom'}>DJI Phantom Pro 4 Surveillence</MenuItem>
          <MenuItem value={'Agras'}>DJI Agras T20 Payload</MenuItem>
          </Select>
        </Grid>
        
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pickupDate"
            name="pickupDate"
            label="Pick-up date"
            fullWidth
            autoComplete="Pick-up date"
            variant="standard"
          />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="time"
            name="time"
            label="Time"
            fullWidth
            autoComplete="Time"
            variant="standard"
          />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dropoffDate"
            name="dropoffDate"
            label="Drop-off date"
            fullWidth
            autoComplete="Drop-off date"
            variant="standard"
          />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="time"
            name="time"
            label="Time"
            fullWidth
            autoComplete="Time"
            variant="standard"
          />
        </Grid> */}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="I confirm that I am 21 years old or over."
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}