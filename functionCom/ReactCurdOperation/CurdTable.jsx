import React from 'react'
import { stockData } from './Data'

function CurdTableComponent() {
    return (
        <>
            <di className="text-curd">
                <div><b>CurdTable</b></div>
                <di className="text-curd">
                    <table border="1px" cellspacing="0" cellpadding="5">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Gender</th>
                            <th>Hobbies</th>
                            <th>Address</th>
                        </tr>
                        {stockData.map((item, idx) => (
                            <>
                                <tr>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.lastName}
                                    </td>
                                    <td>
                                        {item.email}
                                    </td>
                                    <td>
                                        {item.city}
                                    </td>
                                    <td>
                                        {item.gender}
                                    </td>
                                    <td>
                                        {item.hobbies}
                                    </td>
                                    <td>
                                        {item.address}
                                    </td>
                                </tr>
                            </>
                        ))}
                    </table>
                </di>
            </di>
        </>
    )
}

export default CurdTableComponent