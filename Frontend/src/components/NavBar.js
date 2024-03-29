import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const NavBar = () => {

    const history = useHistory();
    const redirectToDashboard = () => {
        history.push('/Dashboard');
    }

    return(
        <div >
            <Navbar className="nav" expand="lg">
            <Container>
            <Navbar.Brand onClick={redirectToDashboard} type="button"> 
                <span className="logoText"><i class='fas fa-helicopter'></i>Drone-Verse</span>
            </Navbar.Brand>
            </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;