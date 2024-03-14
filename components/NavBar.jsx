import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "next/image";


const NavbarComponent = () => {
  return (
    <Navbar expand="lg" bg='dark' data-bs-theme="dark" className='text-light' >
    <Container>
      <Navbar.Brand className='text-light'  href="/">
      <Image
          className=""
          src="/avi.svg"
          alt="Next.js Logo"
          width={60}
          height={60}
          priority
          
        />
      </Navbar.Brand>
      <Navbar.Toggle className='text-light'  aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='text-light'  id="basic-navbar-nav">
        <Nav  className="me-auto text-light">
          <Nav.Link className="mx-3" href="/">Home</Nav.Link>
          <Nav.Link className="mx-3" href="/projects">Projects</Nav.Link>
          <Nav.Link className="mx-3" href="/certificates">Certificates</Nav.Link>
          <Nav.Link className="mx-3" href="">Resume</Nav.Link>
          <Nav.Link className="mx-3" href="/contact">Contact</Nav.Link>
          {/* <NavDropdown className='text-light'  title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item className='text-light' href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item className='text-light'  href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item className='text-light'  href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className='text-light' href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavbarComponent;
