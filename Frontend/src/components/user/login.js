import React, {useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {signin} from '../../services/authenticationService';
import { AuthContext } from '../authenticaion/ProvideAuth';
import { useHistory } from 'react-router-dom';
import Radio from '@mui/material/Radio';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {

  const authContext = useContext(AuthContext);

  const {setUser, setAuthState, updateLocalStorage} = authContext;
  const history = useHistory();


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var customer = data.get('customer');
    var droneOwner = data.get('droneOwner');
    var admin = data.get('admin');
    var persona;
    if (customer === 'on') persona = "customer";
    if (droneOwner === 'on') persona = "droneOwner";
    if (admin === 'on') persona = "admin";
    // eslint-disable-next-line no-console

    const response = await signin({
      email: data.get('email'),
      password: data.get('password'),
      persona:data.get('persona'),
    })
    if(response.status === 200){
      console.log(response.data.payload.data[0]);
      setUser(response.data.payload.data[0]);
      setAuthState(true)
      updateLocalStorage(response.data.payload.data[0], "token")
      setTimeout(()=>{
        history.push('/Dashboard');
      }, 500);
    }
    else{
      setAuthState(false);
      console.log('Error', response);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Box align='left'>
                <Typography component="h1" variant="h4" >
                  Sign in
                </Typography>
            </Box>


            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

           

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{
                  backgroundColor: '#1c3f60'}}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}