import React, {useState}  from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import { Col, Row } from 'react-bootstrap';


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

  return (
    <React.Fragment>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Row>   
        <Col>
        <br></br><br></br>
        <Typography variant="h6" gutterBottom>
        Add Plot information
      </Typography><br/><br/><br/>
      <Grid container spacing={3}>
        <Grid item xs={11} sm={6}>
          <TextField
            required
            id="plotName"
            name="plotName"
            label="Plot Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="plotArea"
            name="plotArea"
            label="Area of Plot in Sq.Ft."
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Col>
              <Grid item xs={12} sm={6}>
                
              </Grid>
          </Col>
        </Grid>
        <br></br><br></br></Col></Row>
      </Container>
    </React.Fragment>
  );
}
