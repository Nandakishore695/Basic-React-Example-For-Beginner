import React, { useState } from "react";


function RegForm() {
    const [formData, setFormData] = useState({
        userName: "",

    })
    // const [setvalue, setSetValue] = useState();

    const SubmitSingUp = (e) => {
        e.preventDefault();
             
    }

    return (
        <>
            <center>
                <h3>Sign Up Form</h3>
                <hr />
                <form onSubmit={SubmitSingUp} autoComplete="off">
                    <label><b>Firstname: </b></label>
                    <input placeholder="Firstname" value={formData.userName} onChange={(e) => setFormData(e.target.value)} />
                    <br />
                    <label><b>Surname: </b></label>
                    <input placeholder="Firstname" />
                    <br />
                    <label><b>Mobile number or email address: </b></label>
                    <input placeholder="Firstname" />
                    <br />
                    <label><b>New password: </b></label>
                    <input placeholder="Firstname" />
                    <br />
                    <label><b>Date of birth: </b></label>
                    <input type="date" />
                    <br />
                    <label><b>Gender: </b></label>
                    <input type="radio" value="Male" name="gender" /> Male
                    <input type="radio" value="Female" name="gender" /> Female
                    <input type="radio" value="Other" name="gender" /> Other

                    <br />
                    <p>People who use our service may have uploaded <br />
                        your contact information to suissebase. <a href="https://suissebase.ch/">Learn more</a></p>
                    <button>Sign Up</button>
                </form>
            </center>
        </>
    )
}
export default RegForm;