import React from 'react'

function CurdFormComponent() {
    return (
        <>
            <di className="text-curd">
                <di>
                    Register Form
                </di>
                <br />
                <di>
                    <form>
                        <label>FirstName :</label>
                        <input type="text" />
                        <label>LastName :</label>
                        <input type="text" />
                        <br />
                        <label>Email :</label>
                        <input type="email" />
                        <label>City :</label>
                        <select placeholder='Select City'>
                            <option ></option>
                        </select>
                        <br />
                        <label>Gender :</label>
                        <input type="radio" />Male
                        <input type="radio" />FeMale
                        {' '}
                        <label>Hobbies :</label>
                        <input type="checkbox" />Reading
                        <input type="checkbox" />Coding
                        <input type="checkbox" />Travel
                        <br />
                        <label>Address :</label>
                        <br />
                        <textarea type="text" />
                    </form>
                    <button>Submit</button>
                </di>
            </di>
        </>
    )
}

export default CurdFormComponent