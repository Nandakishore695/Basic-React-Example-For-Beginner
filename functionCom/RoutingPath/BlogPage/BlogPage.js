import React from 'react'
import { Link, Outlet, } from "react-router-dom";

export default function BlogComponent() {

    const item = [
        { id: 1, name:"Loudest Mid-Range Bluetooth Speaker" },
        { id: 2, names:"Loudest Lower Mid-Range Bluetooth Speaker"}

    ]
    return (
        <div>
            <h1>Table of Contents</h1>
            {item.map((val,idx) => (<div key={idx.id}>
                <Link to={`mid-range/${val.id}`} >{val.name}</Link>
                <Link to={`lower-range/${val.id}`} >{val.names}</Link>&emsp;
            </div>))}
        </div>
    )
}