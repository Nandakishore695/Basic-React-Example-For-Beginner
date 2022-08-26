import React, { useState } from "react";

function RegForm() {
    const [userName, setUserName] = useState();
    const [surName, setSurName] = useState();
    const [emailMobile, setEmailMobile] = useState();
    const [password, setPassword] = useState();
    const [date, setDate] = useState();
    const [gender, setGender] = useState();

    const [fieldData, setFieldData] = useState();
    const obj = { userName, surName, emailMobile, password, date, gender };
    const SubmitSingUp = (e) => {
        e.preventDefault();

        setFieldData(obj)
        console.log(obj);
        e.target.reset();
    }

    //value={inputField.userName}
    return (
        <>
            <center>
                <h3>Sign Up Form</h3>
                <hr />
                <form onSubmit={SubmitSingUp} autoComplete="off">
                    <label><b>Firstname: </b></label>
                    <input placeholder="Firstname" name={userName} onChange={(e) => setUserName(e.target.value)} />
                    <br />
                    <label><b>Surname: </b></label>
                    <input placeholder="Firstname" name={surName} onChange={(e) => setSurName(e.target.value)} />
                    <br />
                    <label><b>Mobile number or email address: </b></label>
                    <input placeholder="mobile no or email" name={emailMobile} onChange={(e) => setEmailMobile(e.target.value)} />
                    <br />
                    <label><b>New password: </b></label>
                    <input type="tel|email" placeholder="password" name={password} onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <label><b>Date of birth: </b></label>
                    <input type="date" name={date} onChange={(e) => setDate(e.target.value)} />
                    <br />
                    <label><b>Gender: </b></label>
                    <input type="radio" value="Male" name={gender} onChange={(e) => setGender(e.target.value)} /> Male
                    <input type="radio" value="Female" name={gender} onChange={(e) => setGender(e.target.value)} /> Female
                    <input type="radio" value="Other" name={gender} onChange={(e) => setGender(e.target.value)} /> Other
                    <br />
                    <p>People who use our service may have uploaded <br />
                        your contact information to suissebase. <a href="https://suissebase.ch/">Learn more</a></p>
                    <button>Sign Up</button>
                </form>
                <br />
                <div>
                    <table border="1" className="infoData">
                        <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>Surname</th>
                            <th>Mobile number or email address</th>
                            <th>password</th>
                            <th>Date of birth</th>
                            <th>Gender</th>
                        </tr>
                        </thead>
                        {/* {obj.map((item, index) => {
                           <tr key={index}>
                                <td>{item.userName}</td>
                                <td>{item.surName}</td>
                                <td>{item.emailMobile}</td>
                            </tr>
                        })
                        }; */}
                    </table>
                </div>
            </center>
        </>
    )
}
export default RegForm;

// const fieldName = e.target.getAttribute("name");
//         const fieldValue = e.target.value;
//         const newFormData = {...fieldData};
//         newFormData[fieldName]=fieldValue;

