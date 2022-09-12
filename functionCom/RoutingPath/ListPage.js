import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { Button } from 'antd';

export default function ListComponent() {
    
    return (
        <div>
            <b>Brand Speaker</b>
            <ul><li><Link to="ahujabrand">AHUJA</Link></li>
                <li><Link to="jblbrand">JBL</Link></li>
                <li><Link to="technobrand">TECHNO</Link></li>
                <li><Link to="paudiobrand">P AUDIO </Link></li>
                <Outlet />
            </ul>
            &emsp;
            <Link to="/homepage"><Button>Home</Button></Link>

        </div >
    )
}
