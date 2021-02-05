import React from "react";
import { useState, useEffect } from "react";
import timeEventsManager from "time-events-manager";
import {
  createSwappingBars,
  removeSwappingBars,
  createSwappingOneBar,
  createMinimumBar,
  removeMinimumBar,
  createComparisonBar,
  removeComparisonBar,
  createAnimation,
  removeSortedBarColor,
} from "./SelectionHelpers";
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
export var milli = 400;

const Selection = (props) => {
  const classes = useStyles();
  const [mainArray, setMainArray] = useState([]);
  const [arrayLength, setArrayLength] = useState(props.length);
  const [stateWidth, setStateWidth] = useState(props.width);
  const [margin, setMargin] = useState(props.margin);

  var delay = 1;
  timeEventsManager.timeoutCollection.removeAll();

  const handleChange = (e, newMilli) => {
    milli = newMilli;
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
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
    for (var j = 0; j < arrayLength; j++) {
      removeSortedBarColor(j);
    }
    const newArray = [];
    for (var i = 0; i < arrayLength; i++) {
      newArray.push(randomIntFromInterval(20, 250));
    }
    setMainArray(newArray);
  };

  const settingState = (arr, delay) => {
    setTimeout(() => {
      setMainArray(arr);
    }, milli * delay);
  };

  const selectionSort = (arr) => {
    for (var i = 0; i < arr.length; i++) {
      var min = i;

      createMinimumBar(min, delay++);

      for (var j = i + 1; j < arr.length; j++) {
        createComparisonBar(j, delay++);

        if (arr[j] < arr[min]) {
          removeMinimumBar(min, delay++);

          min = j;

          createMinimumBar(min, delay++);
        }

        removeComparisonBar(j, delay++);
      }

      if (min !== i) {
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;

        createSwappingBars(min, i, delay++);
        createAnimation(min, i, delay++);
        removeSwappingBars(min, i, delay++);
        createSwappingOneBar(i, delay++);
      } else {
        createSwappingOneBar(i, delay++);
      }
    }
    //setMainArray([...arr]);
  };

  return (
    <div>
      <div className="sort-title">
        <h1>Selection Sort</h1>
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
          <span>Minimum</span>
        </div>
        <div className="color-key-item">
          <div className="color-key-comparing"></div>
          <span>Compare with Minimum</span>
        </div>
        <div className="color-key-item">
          <div className="color-key-red"></div>
          <span>Swapping</span>
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
        <button className="buttons" onClick={() => selectionSort(mainArray)}>
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
            Selection Sort is an in-place comparison sorting algorithm that
            divides the input list into two parts: the sublist of items already
            sorted, which is built up from left to right at the front (left) of
            the list, and the sublist of items remaining to be sorted that
            occupy the rest of the list. Initially, the sorted sublist is empty
            and the unsorted sublist is the entire input list. The algorithm
            proceeds by finding the smallest element in the unsorted sublist,
            exchanging (swapping) it with the leftmost unsorted element (putting
            it in sorted order), and moving the sublist boundaries one element
            to the right.
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
            Worst-case time complexity:{" "}
            <span>
              O(n<sup>2</sup>)
            </span>
          </p>
          <p>
            Average time complexity:{" "}
            <span>
              O(n<sup>2</sup>)
            </span>
          </p>
          <p>
            Best-case time complexity:{" "}
            <span>
              O(n<sup>2</sup>)
            </span>
          </p>
          <p>
            Worst-case space complexity: <span>O(1)</span>
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

export default Selection;
