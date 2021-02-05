import React, { useState, useEffect } from "react";
import "../SortingVisualizer.css";

function SortingVisualizer() {
  const [mainArray, setMainArray] = useState([]);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = [];
    for (var i = 0; i < 20; i++) {
      newArray.push(randomIntFromInterval(20, 250));
    }
    setMainArray(newArray);
  };

  return (
    <div>
      <div className="sort-title">
        <h1>Sorting Visualizer</h1>
      </div>

      <div className="containerr">
        {mainArray.map((item, idx) => {
          return (
            <div className="bar" key={idx} style={{ height: `${item}px` }} />
          );
        })}
      </div>

      <div className="margin-top">
        <div className="color-key-item">
          <span>Please Choose a Sorting Algorithm, and Size of the Array.</span>
        </div>
      </div>

      <div className="buttons-div" style={{marginTop: '12px'}}>
        <button disabled className="buttons-unsorted">
          Generate New Array
        </button>
        <button disabled className="buttons-unsorted">
          Sortilize!
        </button>
      </div>
    </div>
  );
}
export default SortingVisualizer;
