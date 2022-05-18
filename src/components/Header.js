import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import swal from 'sweetalert';
const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">To Do</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            {
                                user ? <button
                                    onClick={async () => {
                                        await signOut(auth)
                                        swal("log out ", "Log out successFul", "success")
                                    }}
                                    className='btn btn-link'
                                >Signout </button> : <>
                                    <Nav.Link as={Link} to="/login">Login </Nav.Link>
                                    <Nav.Link as={Link} to="/register">Register</Nav.Link></>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;