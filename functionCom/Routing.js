import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import GridFormCom from "./Form/GridForm";
import AddressPopup from "./Address/Address";
import AddQualificationPopup from "./Qualification/AddQualification";


function RoutingPage() {

    return (
        <>
            <center><h2 style={{ paddingLeft: 20, textDecoration: 'text' }}>suissebase</h2></center>
            <nav>
                
                <Link to="/employeform" style={{ paddingLeft: 20, textDecoration: 'text', color: 'blue' }}><b>RegistrationForm</b></Link>&emsp;
                <Link to="/employeaddress" style={{ paddingLeft: 20, textDecoration: 'text', color: 'blue' }}><b>AddressForm</b></Link>&emsp;
                <Link to="/employequalification" style={{ paddingLeft: 20, textDecoration: 'text', color: 'blue' }}><b>QualificationForm</b></Link>&emsp;
                <Routes>
                    <Route path="/employeform" element={<GridFormCom />} />
                    <Route path="/employeaddress" element={<AddressPopup />} />
                    <Route path="/employequalification" element={<AddQualificationPopup />} />
                </Routes>
            </nav>
            <br />

        </>

    )
}
export default RoutingPage;