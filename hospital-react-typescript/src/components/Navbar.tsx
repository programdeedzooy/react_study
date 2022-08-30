import React from 'react'
import {Navbar,Container,Table  } from "react-bootstrap"
import {Link} from "react-router-dom"
function Navbars() {
  return (
    <div className="navdiv">
    <div className="nav">
  <Navbar bg="light" className="nav">
    <Container>
      <Navbar.Brand >
        <Link to="/HospitalDetails">
        Hospitaldetials
        </Link>
        </Navbar.Brand>
    </Container>
  </Navbar>
  <Navbar bg="light" className="nav">
    <Container>
      <Navbar.Brand href="/DocterDetails">DocterDetails</Navbar.Brand>
    </Container>
  </Navbar>
  <Navbar bg="light" className="nav">
    <Container>
      <Navbar.Brand href="/Appointment">Appoinment</Navbar.Brand>
    </Container>
  </Navbar>
</div>
</div>
  )
}

export default Navbars