import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth)

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Nav>
                        <Navbar.Brand as={Link} to="/">Isekai Inventory</Navbar.Brand>
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/inventory">Manage Inventory</Nav.Link>
                            {/* <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link> */}
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/myitems">My Items</Nav.Link>
                                    <Nav.Link as={Link} to="/additem">Add Item</Nav.Link>
                                </>
                            }
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <>
                                        <Nav.Link>{user && user.displayName}</Nav.Link>
                                        <Nav.Link className='btn btn-light text-dark' onClick={() => {
                                            signOut(auth)
                                            localStorage.removeItem('accessToken')
                                        }}>Sign out</Nav.Link>
                                    </>
                                    :
                                    <>
                                        <Nav.Link as={Link} to="login">Log In</Nav.Link>
                                        <Nav.Link className='btn btn-light text-dark' as={Link} to="/signup">Sign Up</Nav.Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;