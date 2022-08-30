import React, { useEffect } from "react";
import {Navbar,Container,Table  } from "react-bootstrap"
import {BrowserRouter as Router,Routes,Route,Link  } from "react-router-dom"
  
import "./App.css"
import HospitalDetails from "./pages/HospitalDetails";
import DocterDerials from "./pages/DocterDerials";
import Appointment from "./pages/Appointment";
const App = () => {


  
return (
  <div className="navdiv">
   

<Router>
<div className="nav">
  <Navbar bg="light" className="nav">
    <Container>
      <Navbar.Brand >
        <Link to="/">
        Hospitaldetials
        </Link>
        </Navbar.Brand>
    </Container>
  </Navbar>
  <Navbar bg="light" className="nav">
    <Container>
      <Navbar.Brand >
      <Link to="/DocterDetails">
        DocterDetails
        </Link>
        </Navbar.Brand>
    </Container>
  </Navbar>
  <Navbar bg="light" className="nav">
    <Container>
      <Navbar.Brand>
        <Link to="/Appointment">
        Appoinment
        </Link>
        </Navbar.Brand>
    </Container>
  </Navbar>
</div>

  <Routes>
    <Route path="/" element={<HospitalDetails/>}/>
    <Route path="/DocterDetails" element={<DocterDerials/>}/>
    <Route path="/Appointment" element={<Appointment/>} />
  </Routes>
</Router>

</div>

);
}

export default App;