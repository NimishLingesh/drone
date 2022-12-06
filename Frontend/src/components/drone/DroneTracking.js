import React, {useState}  from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import {AsyncTypeahead} from 'react-bootstrap-typeahead';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import { Col, Row } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import _ from 'lodash';
import Autocomplete from "react-google-autocomplete";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Marker from '../user/Marker';
const DroneTracking = () => {
    var m;
    var ms;

    var data = require('./response.json'); 
    var coordinateArray = data.tracking_data;
    const triangleCoords = [];


var setPolygon = (map, maps) => {
    var bermudaTriangle = new maps.Polygon({
        paths: triangleCoords,
        strokeColor: "#000000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35
      });
      bermudaTriangle.setMap(map);

}
    console.log(triangleCoords);

//    const triangleCoords = [{ lat: 25.774, lng: -80.19 },
//     { lat: 18.466, lng: -66.118 },
//     { lat: 32.321, lng: -64.757 },
//     { lat: 25.774, lng: -80.19 }]
    var handleApiLoaded = (map, maps) => {

       m = map;
       ms = maps;
        var bermudaTriangle = new maps.Polygon({
         paths: triangleCoords,
         strokeColor: "#000000",
         strokeOpacity: 0.8,
         strokeWeight: 2,
         fillColor: "#FF0000",
         fillOpacity: 0.35
       });
       bermudaTriangle.setMap(map);
     }
     const getMapOptions = (maps: any) => {
        return {
          disableDefaultUI: true,
          mapTypeControl: true,
          streetViewControl: true,
          styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
        };
      };     

    const uluru = { lat: 37.52409154018564, lng: -121.90598827393447};
  
    const defaultProps = {
        center: uluru,
        zoom: 12
      };


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
            <div style={{ height: '100vh', width: '100%' }}>
         
            <GoogleMapReact
            onClick={ev => {
              triangleCoords.push({lat: ev.lat, lng: ev.lng});
              setPolygon(m,ms)
            }}
      bootstrapURLKeys={{ key: "AIzaSyAc3tTkT5Qmm-A99sarIRLRQsVd0ORfP30"}}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      yesIWantToUseGoogleMapApiInternals
      options={getMapOptions}
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
    >
    
    </GoogleMapReact>
        </div>
          </Container>
        </React.Fragment>
      );
    }

export default DroneTracking;