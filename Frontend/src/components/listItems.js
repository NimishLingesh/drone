import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaidIcon from '@mui/icons-material/Paid';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
export const mainListItems = (persona) => {
  console.log(persona);
  return(
    <div>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText style={{color: 'Black'}} primary="Dashboard" />
      </ListItem>
      
      <ListItem button component={Link} to="/profile">
        <ListItemIcon>
          <AssignmentIndIcon />
        </ListItemIcon>
              <ListItemText style={{color: 'Black'}} primary="Profile" />
          </ListItem>


      <Link to={{
      pathname: '/pricing',
      state: {
        persona: 'customer'
      }}}>
          <ListItem button>
            <ListItemIcon>
              <PaidIcon />
            </ListItemIcon>
            <ListItemText style={{color: 'Black'}} primary="Payment Plans" />
          </ListItem>
      </Link>

      <Link to={{
      pathname: '/searchDrone',
      state: {
        persona: 'customer'
      }}}>
      <ListItem button >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText style={{color: 'Black'}} primary="Book Drone Service" />
      </ListItem>
      </Link>


      {(persona === 'admin') && (
      <Link to={{
        pathname: '/BookingList',
        state: {
          persona: 'owner'
        }}}>
        <ListItem button >
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText style={{color: 'Black'}} primary="Your Asset Bookings" />
        </ListItem>
        </Link>
      )}
      
      <Link to={{
      pathname: '/BookingList',
      state: {
        persona: 'customer'
      }}}>
      <ListItem button >
        <ListItemIcon>
          <LibraryBooksIcon/>
        </ListItemIcon>
        <ListItemText style={{color: 'Black'}} primary="All Bookings" />
      </ListItem>
      </Link>

      <Link to={{
      pathname: '',
      state: {
        persona: 'customer'
      }}}>
      <ListItem button >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText style={{color: 'Black'}} primary="Service Report" />
      </ListItem>
      </Link>
      
      
      {(persona === 'admin' )&& (
        <ListItem button component={Link} to='/AddDrone'>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText style={{color: 'Black'}} primary="Add a Drone" />
      </ListItem>
      )}
      {(persona === 'admin') && (
        <ListItem button component={Link} to='/DroneList'>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText style={{color: 'Black'}} primary="View Assets" />
      </ListItem>
      )}
      {persona === 'admin' && (
        <ListItem button component={Link} to='/AdminAnalysis'>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
          <ListItemText style={{color: 'Black'}} primary="Business Trends" />
        </ListItem>
      )}

    </div>
  )};

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText style={{color: 'Black'}} primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText style={{color: 'Black'}} primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText style={{color: 'Black'}} primary="Year-end sale" />
    </ListItem>
  </div>
);