import { useState } from "react"

function DropDrownComponent() {

    const [set, setValue] = useState([{ name: "nandu" }, { name: "kishore" },{name:"vishwanath"}]);
    const handlerChange = (e) => {
        let student = e.target.value;
        setValue([...set,{ name: student }])
    }
    return (
        <>
            {/* dropwdown value to update with the help of input fields  */}
            <input onBlur={(e) => handlerChange(e)} />
            <br />
            <select>
                {set.map((items) => {
                    return <option>
                        {items.name}
                    </option>
                })}

            </select>

        </>
    )
}
export default DropDrownComponent;