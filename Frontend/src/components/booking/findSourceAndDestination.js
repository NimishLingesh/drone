import React, {useState}  from 'react';
import { Calendar } from 'antd';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Row } from 'react-bootstrap';


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
<<<<<<< Updated upstream
=======
  const [value, onChange] = useState('10:00');
  

>>>>>>> Stashed changes
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
      <Typography variant="h6" gutterBottom>
        Select Farm and Farmland
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <TextField
            id="source"
            name="source"
            label="Farm Address"
            fullWidth
            required
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
            required
            autoComplete="Drone Type"
            variant="standard"
            onChange={(e) => {setDestination(e)}}
            defaultValue={props.booking ? props.booking.destination : ''}
          />
        </Grid>
        <div>
          
        </div>
<<<<<<< Updated upstream
        <center>
          <Grid item xs={4}>
          
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
=======
          <Row>
            <Grid item xs={12} md={6} lg={6} xl={6} style={{textAlign: 'left'}}>
              <div style={{margin: 60}}>
                <label className="form-check-label">Select Sart time</label><br/>
                <TimePicker required onChange={onChange} name="timestart" value1={value} />
                <br/><br/>
>>>>>>> Stashed changes

                <label className="form-check-label">Select End time</label><br/>
                <TimePicker required onChange={onChange} name="timeend" value2={value} />
                <br/><br/>
        
                <Grid>
                  <label className="form-check-label">Select the Drone Type</label><br/>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.booking ? props.booking.droneType : ''}
                    label="Drone Type"
                    onChange={setDroneType}
                    autoWidth
                    required
                    style={{width:'70%'}}
                  >
                    <MenuItem value={'Mini'}>DJI Mini SE Data collection</MenuItem>
                    <MenuItem value={'Phantom'}>DJI Phantom Pro 4 Surveillence</MenuItem>
                    <MenuItem value={'Agras'}>DJI Agras T20 Payload</MenuItem>
                    </Select>
                  </Grid>
              </div>
            </Grid>

            <Grid item xs={12} md={6} lg={6} xl={6}>
                <Calendar
                fullscreen={false} 
                required
                onPanelChange={(e) => {bookingCalender(e)}}
                id="calender"
                name="calnder"
                label="calender"
                variant="standard"
                // onChange={(e) => {bookingCalender(e)}}
                defaultValue={props.booking ? props.booking.destination : ''}
              />
            </Grid>
          </Row>

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