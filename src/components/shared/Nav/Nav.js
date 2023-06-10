import "./Nav.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const PortfolioNav = () => {
  return (
    <Navbar bg="dark" expand="md" variant="dark" className="header">
      <Container>
        <Navbar.Brand href="#hero">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default PortfolioNav;
