import React from "react";
import { useState, useEffect } from "react";
import timeEventsManager from "time-events-manager";
import {
  createAnimation,
  createMinimumBar,
  removeMinimumBar,
  createComparisonBars,
  removeComparisonBars,
  createSwappingBars,
  removeSwappingBars,
  createSortedBar,
  removeSortedBar,
} from "./InsertionHelpers";
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

const Insertion = (props) => {
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
    let z = 0;
    const barr = document.getElementsByClassName("bar");

    while (z < mainArray.length) {
      removeSortedBar(z);
      z++;
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

  const insertionSort = (arr) => {
    var i;
    var j;
    var temp;
    for (i = 1; i < arr.length; i++) {
      createMinimumBar(i, delay++);
      j = i;
      while (j > 0) {
        //loon el compare
        removeMinimumBar(j, delay++);
        createComparisonBars(j, j - 1, delay++);

        if (arr[j - 1] > arr[j]) {
          //loon el swap
          removeComparisonBars(j, j - 1, delay++);

          temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;
          createSwappingBars(j, j - 1, delay++);
          createAnimation(j, j - 1, delay++);
          removeSwappingBars(j, j - 1, delay++);
          j -= 1;
        } else {
          removeComparisonBars(j, j - 1, delay++);
          j -= 1;
        }
        removeMinimumBar(i, delay++);
      }
    }

    let z = 0;
    while (z < mainArray.length) {
      createSortedBar(z, delay++);
      z++;
    }
    setTimeout(() => {
      setMainArray([...mainArray]);
    }, milli * delay++);
  };

  return (
    <div>
      <div className="sort-title">
        <h1>Insertion Sort</h1>
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
          <span>Element wanting to know its Location</span>
        </div>
        <div className="color-key-item">
          <div className="color-key-comparing"></div>
          <span>Comparing with Previous Element</span>
        </div>
        <div className="color-key-item">
          <div className="color-key-red"></div>
          <span>Swapping with Previous Element</span>
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
        <button className="buttons" onClick={() => insertionSort(mainArray)}>
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
            Insertion Sort is a simple sorting algorithm that iterates through
            an array and at each iteration it removes one element from the
            array, finds the location it belongs to in the sorted list and
            inserts it there, repeating until no elements remain in the unsorted
            list. It is an in-place, stable sorting algorithm that is
            inefficient on large input arrays but works well for data sets that
            are almost sorted. It is more efficient in practice compared to
            other quadratic sorting algorithms like bubble sort and selection
            sort.
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
            Best-case time complexity: <span>O(n)</span>
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

export default Insertion;
