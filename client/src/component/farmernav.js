import "../style/navbar.css";
// import image from '../image/vivasaya.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Farmnav() {
  return (
    <>
        <div className="main">
        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me">
            <Nav.Link className="a" href="cropadvertise">CROP Advertise</Nav.Link>
            <Nav.Link className="a" href="cropstatus">Crop Status</Nav.Link>
            <Nav.Link className="a" href="login">Logout</Nav.Link>      

          </Nav>
        </Container>
      </Navbar> 
      </div>
    </>
  );
}

export default Farmnav;