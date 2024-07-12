import { Button, Container, Image, ListGroup, Nav, Navbar, NavItem, NavLink } from "react-bootstrap";

const SideBar = () => {
    return (
            <Navbar>
                <Container className="flex-column align-items-start">
                    <Navbar.Brand href="#">
                        <Image
                            src="assets/logo/logo.png"
                            alt="Spotify Logo"
                            width="131"
                            height="40"
                        />
                    </Navbar.Brand>
                    <Button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <Nav>
                            <ListGroup>
                                <NavItem>
                                    <Nav.Link
                                        className="nav-item nav-link d-flex align-items-center"
                                        href="#">
                                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                                    </Nav.Link>
                                </NavItem>
                                <NavItem>
                                    <Nav.Link
                                        className="nav-item nav-link d-flex align-items-center"
                                        href="#">
                                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                                    </Nav.Link>
                                </NavItem>
                                <NavItem>
                                    <div className="input-group mt-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-outline-secondary btn-sm h-100">
                                                GO
                                            </button>
                                        </div>
                                    </div>
                                </NavItem>
                            </ListGroup>
                        </Nav>
                    </div>
                </Container>
                <div className="nav-btn">
                    <Button className="btn signup-btn" type="button">Sign Up</Button>
                    <Button className="btn login-btn" type="button">Login</Button>
                    <NavLink href="#">Cookie Policy</NavLink> |
                    <NavLink href="#"> Privacy</NavLink>
                </div>
            </Navbar>
    )
}

export default SideBar