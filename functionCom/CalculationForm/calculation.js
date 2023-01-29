import React, { useState } from "react";
function CalculationFormComponent() {
    const [numberSetOne, SetNumberSetOne] = useState();
    const [numberSetTwo, SetNumberSetTwo] = useState();
    const [selection, setSelection] = useState("select");
    const [isChecked, setChecked] = useState(null);
    const [mutiValue, setMultiValue] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handlerFirstNumber = (event) => {
        let numberOneValue = event.target.value;
        SetNumberSetOne(parseFloat(numberOneValue));
    }

    const handlerSecondNumber = (e) => {
        let numberTwoValue = e.target.value;
        SetNumberSetTwo(parseFloat(numberTwoValue));
    }

    const handlerSelection = (e) => {
        let optionSelectionValue = e.target.value;
        setSelection(optionSelectionValue);
    }

    const handleCheck = (e) => {
        let updatedList = e.currentTarget.checked;
        setChecked(updatedList);
    }

    const handleSubmit = () => {
        setErrorMessage(null)
        let resultValue;
        if (!isChecked) {
            setErrorMessage("pleace select checkbox")
        }
        else if (selection === "select") {
            setErrorMessage("Plase fill all fields")
        }
        else if (numberSetOne === "" && numberSetTwo === "") {
            setErrorMessage("Plase fill")

        }
        else if (selection === "sum") {
            resultValue = numberSetOne + numberSetTwo;
        }
        else if (selection === "sub") {
            resultValue = numberSetOne - numberSetTwo;
        }
        else if (selection === "mul") {
            resultValue = numberSetOne * numberSetTwo;
        }
        else if (selection == "div") {
            resultValue = numberSetOne / numberSetTwo;
        }
        setMultiValue(resultValue);

    }

    return (
        <>
            <div className="alert-error">
                {errorMessage}
            </div>
            <div className="form-calculation">
                <div>
                    firstname: <input type='text' placeholder="firstname" onChange={(e) => handlerFirstNumber(e)} /><br></br>
                    secondname: <input type='text' placeholder="secondname" onChange={(e) => handlerSecondNumber(e)} /><br></br>
                    opertion:<select onChange={(e) => handlerSelection(e)}>
                        <option value="select">select one</option>
                        <option value="sum">sum</option>
                        <option value="sub">sub</option>
                        <option value="mul">mul</option>
                        <option value="div">div</option>
                    </select>
                    <input type="checkbox" onChange={(e) => handleCheck(e)} />
                    result:<input type='text' placeholder="result" value={mutiValue ? mutiValue : ""} />
                </div>
                <div className="btn">
                    <button style={{ fontsize: '30px' }} onClick={handleSubmit}>result</button>
                </div>
            </div>
        </>
    )
}
export default CalculationFormComponent;