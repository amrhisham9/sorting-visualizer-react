import React from "react";
import { useState, useEffect } from "react";
import timeEventsManager from 'time-events-manager';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { ThemeProvider } from "@material-ui/core";
import theme from "../theme";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

const useStyles = makeStyles({
  root: {
    width: 150,
    fontFamily: "Open Sans Condensed",
    margin: "auto",
  },
});
var milli = 400;
const Merge = (props) => {
  const classes = useStyles();
  const [mainArray, setMainArray] = useState([]);
  const [arrayLength, setArrayLength] = useState(props.length);
  const [stateWidth, setStateWidth] = useState(props.width);
  const [margin, setMargin] = useState(props.margin);
  var delay = 1;
  timeEventsManager.timeoutCollection.removeAll();
  

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleChange = (e, newMilli) => {
    milli = newMilli;
  };

  useEffect(() => {
    resetArray();
  }, []);

  useEffect(() => {
    setArrayLength(props.length);
  }, [props.length]);


  useEffect(() => {
    setStateWidth(props.width);
  }, [props.width]);

  useEffect(() => {
    setMargin(props.margin);
  }, [props.margin]);

  const resetArray = () => {
    const newArray = [];
    for (var i = 0; i < arrayLength; i++) {
      newArray.push(randomIntFromInterval(20, 250));
    }
    setMainArray(newArray);
  };

  const resetArraySecond = () => {
    let j = 0;
    const barReset = document.getElementsByClassName("bar");

    while (j < mainArray.length) {
      barReset[j].style.backgroundColor = "#b1b493";
      j++;
    }

    const newArray = [];
    for (var i = 0; i < arrayLength; i++) {
      newArray.push(randomIntFromInterval(20, 250));
    }
    setMainArray(newArray);
  };

  const mergeSort = () => {
    const animations = getMergeSortAnimations(mainArray);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "#ffd700" : "#00bcd4";

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, milli * delay++);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, milli * delay++);
      }
    }
   

    let j = 0;
    const barr = document.getElementsByClassName("bar");
    setTimeout(() => {
      while (j < mainArray.length) {
        barr[j].style.backgroundColor = "#07031a";
        j++;
      }
    }, milli * delay++);
    setTimeout(() => {
      setMainArray([...mainArray]);
    }, milli * delay++);
  };

  function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }

  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(
      auxiliaryArray,
      middleIdx + 1,
      endIdx,
      mainArray,
      animations
    );
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }

  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  return (
    <div>
      <div className="sort-title">
        <h1>Merge Sort</h1>
      </div>

      <div className="containerr">
        {mainArray.map((item, idx) => {
          return (
            <Bounce duration={2000}>
            <div
              className="bar"
              key={idx}
              style={{
                height: `${item}px`,
                width: `${stateWidth}px`,
                marginLeft: `${margin}px`,
                marginRight: `${margin}px`,
              }}
            />
            </Bounce>
          );
        })}
      </div>

      <div className="color-key-div">
        <div className="color-key-item">
          <div className="color-key-swapping"></div>
          <span>Comparing</span>
        </div>
        <div className="color-key-item">
          <div className="color-key-comparing"></div>
          <span>Overwrite from Auxiliary Array</span>
        </div>
        <div className="color-key-item">
          <div className="color-key-sorted"></div>
          <span>Sorted</span>
        </div>
      </div>

      <div style={{ paddingTop: "25px" }}>
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <Slider
              defaultValue={milli}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={100}
              marks
              min={50}
              max={800}
              onChange={handleChange}
            />
            <Typography id="discrete-slider" gutterBottom>
              Delay in ms
            </Typography>
          </div>
        </ThemeProvider>
      </div>

      <div className="buttons-div">
        <button className="buttons" onClick={resetArraySecond}>
          Generate New Array
        </button>
        <button className="buttons" onClick={() => mergeSort()}>
          Sortilize!
        </button>
      </div>

      <hr />

      <div className="brief-description">
      <Fade duration={2000}>
        <h2>Brief Description</h2>
        </Fade>
        <Fade left duration={2000}>
        <p>
          Merge Sort is an efficient, stable sorting algorith that makes use of
          the divide and conquer strategy. Conceptually the algorithm works as
          follows:
        </p>
        
        <p>
          <span>1.</span> Divide the unsorted list into n sublists, each
          containing one element(a list of one element is considered sorted)
        </p>
        <p>
          <span>2.</span> Repeatedly merge sublists to produce new sorted
          sublists until there is only one sublist remaining. This will be the
          sorted list.
        </p>
        </Fade>
      </div>

      <hr />

      <div className="performance">
      <Fade duration={2000}>
        <h2>Performance</h2>
        </Fade>
        <Fade left duration={2000}>
        <p>
          Worst-case time complexity: <span>O(n log n)</span>
        </p>
        <p>
          Average time complexity: <span>O(n log n)</span>
        </p>
        <p>
          Best-case time complexity: <span>O(n log n)</span>
        </p>
        <p>
          Worst-case space complexity: <span>O(n)</span>
        </p>
        </Fade>
      </div>
      <footer className="footer">
        <p>
          Designed & Built by{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/amr-hisham-668a211a5"
          >
            Amr Hisham
          </a>
          , 2020.
        </p>
      </footer>
    </div>
  );
};

export default Merge;
