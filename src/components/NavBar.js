import React from "react";
import { useSelector } from "react-redux";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { MdAccountCircle } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Cabecalho = () => {
const isAuth = useSelector((state) => state.auth.isAuthenticated)
const email = useSelector((state) => state.auth.email)
  console.log(isAuth);
  console.log(email);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Nav className="flex-grow-1" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Bancos</Nav.Link>
            <Nav.Link href="#action2">Delegacias</Nav.Link>
            <Nav.Link href="#action3">Hospitais</Nav.Link>
            <Nav.Link href="#action4">Parques</Nav.Link>
            <Nav.Link href="#action5">Atrações</Nav.Link>
            <Nav.Link href="#action5">Restaurantes</Nav.Link>
            
            <Link to="/rating">
              <Button variant="primary">Avalie-nos</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <label>{email}</label>
        <Nav.Link href="#action7">
          <IconContext.Provider value={{ color: "black", size: "2em" }}>
            <div>
              <MdAccountCircle />
            </div>
          </IconContext.Provider>
        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
      </Container>
    </Navbar>
  );
};

export default Cabecalho;
