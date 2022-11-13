import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Card } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const DroneDetails = props => {

  const {drone, setDrone} = props;

  const handleFormChange = (e,field) => {
    setDrone({
      ...drone,
      [field]: e.target.value,
    })
  }


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add drone details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="droneNumber"
            name="droneNumber"
            label="Drone Number"
            fullWidth
            autoComplete="Drone Type"
            variant="standard"
            onChange={(e)=>handleFormChange(e,'droneNumber')}
            defaultValue={drone ? drone.droneNumber: ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="droneModel"
            name="droneModel"
            label="Drone Model"
            fullWidth
            autoComplete="Drone Model"
            variant="standard"
            onChange={(e)=>handleFormChange(e,'model')}
            defaultValue={drone ? drone.model: ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="chargesPerDay"
            name="chargesPerDay"
            label="Your expected charges: $"
            fullWidth
            autoComplete="Your expected charges: $"
            variant="standard"
            onChange={(e)=>handleFormChange(e,'chargePerHour')}
            defaultValue={drone ? drone.chargePerHour: ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="mileage"
            name="Mileage"
            label="Mileage of you drone"
            fullWidth
            autoComplete="Mileage of you drone"
            variant="standard"
            onChange={(e)=>handleFormChange(e,'mileage')}
            defaultValue={drone ? drone.mileage: ''}
          />
        </Grid>
        <Grid item xs={12}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.drone? props.drone.type : ''}
            label="Drone Type"
            onChange={(e)=>handleFormChange(e,'type')}
            autoWidth
            style={{width:'30%'}}
          >
            <MenuItem value={'Sedan'}>Sedan</MenuItem>
            <MenuItem value={'Hatchback'}>Hatchback</MenuItem>
            </Select>
          </Grid>
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

export default DroneDetails;