import { useState } from "react";
export default function ValidationTeams() {
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessageValidation, setErrorMessageValidation] = useState(null);

  const handleIAgree = (event) => {
    setIsChecked(event.currentTarget.checked);
  };

  const handleNext = () => {
    if (!isChecked) {
      setErrorMessageValidation(
        "Please click the checkbox after reading and agreeing to the Terms of Service before proceeding."
      );
    } else {
      setErrorMessageValidation(null);
    }
  };
  return (
    <>
      <center>
        <h4>{errorMessageValidation}</h4>
        <span>
          <input type="checkbox" onChange={handleIAgree} />
          <b>I have read the Terms and Conditions</b>
        </span>
        <br />
        <button onClick={handleNext}>Next</button>
      </center>
    </>
  );
}
