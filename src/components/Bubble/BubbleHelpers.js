import { milli } from "./Bubble";

export const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const createAnimation = (firstIndex, secondIndex, delay) => {
  const bars = document.getElementsByClassName("bar");
  setTimeout(() => {
    const height1 = bars[firstIndex].style.height;
    const height2 = bars[secondIndex].style.height;
    bars[secondIndex].style.height = `${height1}`;
    bars[firstIndex].style.height = `${height2}`;
  }, milli * delay);
};

export const createComparisonColor = (firstIndex, secondIndex, delay) => {
  const bars = document.getElementsByClassName("bar");
  setTimeout(() => {
    bars[firstIndex].classList.add("comparison");
    bars[secondIndex].classList.add("comparison");
    console.log("comparisoncolor milli11 = " + milli);
  }, milli * delay);
  console.log("comparisoncolor milli22 = " + milli);
};

export const createSwappingColor = (firstIndex, secondIndex, delay) => {
  const bars = document.getElementsByClassName("bar");
  setTimeout(() => {
    bars[firstIndex].classList.add("swapping");
    bars[secondIndex].classList.add("swapping");
  }, milli * delay);
};

export const removeSwappingColor = (firstIndex, secondIndex, delay) => {
  const bars = document.getElementsByClassName("bar");
  setTimeout(() => {
    bars[firstIndex].classList.remove("swapping");
    bars[secondIndex].classList.remove("swapping");
  }, milli * delay);
};

export const removeComparisonColor = (firstIndex, secondIndex, delay) => {
  const bars = document.getElementsByClassName("bar");
  setTimeout(() => {
    bars[firstIndex].classList.remove("comparison");
    bars[secondIndex].classList.remove("comparison");
  }, milli * delay);
};

export const createSortedBarColor = (index, delay) => {
  const bars = document.getElementsByClassName("bar");
  setTimeout(() => {
    bars[index].classList.add("sorted");
  }, milli * delay);
};

export const removeSortedBarColor = (index) => {
  const bars = document.getElementsByClassName("bar");
  if (bars[index].classList.contains("sorted")) {
    bars[index].classList.remove("sorted");
  }
  if (bars[index].classList.contains("comparison")) {
    bars[index].classList.remove("comparison");
  }
  if (bars[index].classList.contains("swapping")) {
    bars[index].classList.remove("swapping");
  }
};
