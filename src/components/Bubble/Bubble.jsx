import React from "react";
import { useState, useEffect } from "react";
import "../SortingVisualizer.css";
import {
  randomIntFromInterval,
  createAnimation,
  createComparisonColor,
  createSwappingColor,
  removeSwappingColor,
  removeComparisonColor,
  createSortedBarColor,
  removeSortedBarColor,
} from "./BubbleHelpers";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { ThemeProvider } from "@material-ui/core";
import theme from "../theme";
import timeEventsManager from "time-events-manager";
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

const Bubble = (props) => {
  const classes = useStyles();
  const [mainArray, setMainArray] = useState([]);
  const [arrayLength, setArrayLength] = useState(props.length);
  const [stateWidth, setStateWidth] = useState(props.width);
  const [margin, setMargin] = useState(props.margin);
  var delay = 1;

  //removes any saved timeouts from the animation that was occuring.

  timeEventsManager.timeoutCollection.removeAll();

  //changes the milli variable when the slider's value change

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

  //resets the array on refresh

  const resetArray = () => {
    const newArray = [];
    for (var i = 0; i < arrayLength; i++) {
      newArray.push(randomIntFromInterval(20, 240));
    }
    setMainArray(newArray);
  };

  //resets the array on generate new array button click (to remove the colors of the sorted bars).

  const resetArraySecond = () => {
    for (var j = 0; j < arrayLength; j++) {
      removeSortedBarColor(j);
    }

    const newArray = [];
    for (var i = 0; i < arrayLength; i++) {
      newArray.push(randomIntFromInterval(20, 240));
    }

    setMainArray(newArray);
  };

  //sets the state after the whole animation has finished

  const settingState = (arr, delay) => {
    setTimeout(() => {
      setMainArray(arr);
    }, milli * delay);
  };

  //bubble sort function

  const bubbleSort = (arr) => {
    for (var j = arr.length - 1; j > 0; j--) {
      for (var i = 0; i < j; i++) {
        createComparisonColor(i, i + 1, delay++);

        if (arr[i + 1] < arr[i]) {
          var temp = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = temp;
          createSwappingColor(i, i + 1, delay++);
          createAnimation(i, i + 1, delay++);
        }
        removeSwappingColor(i, i + 1, delay++);
        removeComparisonColor(i, i + 1, delay++);
      }
      createSortedBarColor(j, delay++);
    }
    createSortedBarColor(0, delay++);

    settingState([...arr], delay++);
  };

  return (
    <div>
      <div className="sort-title">
        <h1>Bubble Sort</h1>
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
          <div className="color-key-comparing"></div>
          <span>Comparing</span>
        </div>
        <div className="color-key-item">
          <div className="color-key-swapping"></div>
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

        <button className="buttons" onClick={() => bubbleSort(mainArray)}>
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
            Bubble Sort is a simple sorting algorithm that repeatedly steps
            through the list, compares adjacent elements and swaps them if they
            are in the wrong order.The pass through the list is repeated until
            the list is sorted. The algorithm, which is a comparison sort, is
            named for the way smaller or larger elements "bubble" to the top of
            the list. Although the algorithm is simple, it is too slow and
            impractical for most problems.
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
export default Bubble;
