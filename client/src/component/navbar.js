import "../style/navbar.css";
import image from '../image/vivasaya.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function HyperLink() {
  return (
    <>
      
       <div className="navmain">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me">
            <Nav.Link className="a" href="/">Home</Nav.Link>
            <Nav.Link className="a" href="#about">About Us</Nav.Link>
            <Nav.Link className="a" href="#contact">Contact</Nav.Link>
            <Nav.Link className="a" href="login">Login</Nav.Link>
          </Nav>
        </Container>

      </Navbar>
        
      
      </div>
    </>
  );
}

export default HyperLink;