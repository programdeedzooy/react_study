import React, { useEffect } from "react";
import {Navbar,Container,Table  } from "react-bootstrap"
import {BrowserRouter as Router,Routes,Route  } from "react-router-dom"
  
import "./App.css"
import HospitalDetails from "./pages/HospitalDetails";
import DocterDerials from "./pages/DocterDerials";
import Appointment from "./pages/Appointment";
const App = () => {


  
return (
  <div className="navdiv">
    <div className="nav">
  <Navbar bg="light" className="nav">
    <Container>
      <Navbar.Brand href="/HospitalDetails">Hospitaldetials</Navbar.Brand>
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
<div>

<Router>
  <Routes>
    <Route path="/HospitalDetails" element={<HospitalDetails/>}/>
    <Route path="/DocterDetails" element={<DocterDerials/>}/>
    <Route path="/Appointment" element={<Appointment/>} />
  </Routes>
</Router>

</div>

  </div>
);
}

export default App;