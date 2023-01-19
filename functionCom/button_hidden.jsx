import "./styles.css";
import { useState } from "react";

export default function App() {
  const [current, setCurrent] = useState(false);

  const handleProcessPrevious = () => {
    setCurrent(false);
  };
  const handleNext = () => {
    setCurrent(true);
  };
  return (
    <>
      <div>
        {current ? (
          <button className="title-green" onClick={handleProcessPrevious}>
            Cancel
          </button>
        ) : null}
        <button className="title-green" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
}