import "../style/navbar.css";
// import image from '../image/vivasaya.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function AllDetail() {
  return (
    <>
        <div className="main">
        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me">
            <Nav.Link className="a" href="viewfarmer">View Farmer</Nav.Link>
            <Nav.Link className="a" href="viewsupplier">View Supplier</Nav.Link>
            <Nav.Link className="a" href="login">Logout</Nav.Link>
           
            
          </Nav>
        </Container>

      </Navbar>
        
      
      </div>
    </>
  );
}

export default AllDetail;