import React, { useState } from "react";
function CurdFormComponent() {
    const cityNameList = ["Assam", "Bangalore", "Chennai", "Delhi", "Hyderabad"]
    const [isChecked, setChecked] = useState(null);
    const [fName, setFirstName] = useState("");
    const [lName, setLastName] = useState("");
    const [emailName, setEmail] = useState("");
    const [cityName, setCity] = useState("");
    const [addressName, setAddress] = useState("");
    const [genderName, setGender] = useState("");

    const handleCheck = (event) => {
        let checkBoxSelection = event.currentTarget.checked;
        setChecked(checkBoxSelection);
    }
    const handleSubmit = () => {
        let object = { firstName: fName, lastName: lName, email: emailName, city: cityName, gender: genderName, address: addressName }
        console.log(object);
    }
    let ciytNames = cityNameList.map((item, idx) => {
        <li key={idx}>
            {item}
        </li>
    })
    return (
        <>
            <di className="text-curd">
                <di>
                    Register Form
                </di>
                <br />
                <di>
                    <form >
                        <label>FirstName :</label>
                        <input type="text" name="name" onChange={(e) => setFirstName(e.target.value)} />
                        <label>LastName :</label>
                        <input type="text" lname="lname" onChange={(e) => setLastName(e.target.value)} />
                        <br />
                        <label>Email :</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} />
                        <label>City :</label>
                        <select placeholder='Select City' onChange={(e) => setCity(e.target.value)}>
                            <option>{ciytNames}</option>
                        </select>
                        <br />
                        <label >Gender :</label>
                        <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />Male
                        <input type="radio" name="gender" value="FeMale" onChange={(e) => setGender(e.target.value)} />FeMale
                        {' '}
                        <label>Hobbies :</label>
                        <input type="checkbox" />Reading
                        <input type="checkbox" />Coding
                        <input type="checkbox" />Travel
                        <br />
                        <label>Address :</label>
                        <br />
                        <textarea type="text" onChange={(e) => setAddress(e.target.value)} />
                    </form>
                    <button onClick={handleSubmit}>Submit</button>
                    <input type="checkbox" onChange={(e) => handleCheck(e)} />
                    <label>I agree to the Terms and Conditions</label>
                    <br />
                </di>
            </di>
        </>
    )
}
export default CurdFormComponent
