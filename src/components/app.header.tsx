'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import NavDropdown from 'react-bootstrap/NavDropdown';

const AppHeader = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
        <Link href={"/"} className="nav-link">
          CAPTAINZX
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Link href={"/facebook"} className="nav-link">
                <span>Facebook</span>
              </Link>
              <Link href={"/youtube"} className="nav-link">
                <span>youtube</span>
              </Link>
              <Link href={"/tiktok"} className="nav-link">
                <span>tiktok</span>
              </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;