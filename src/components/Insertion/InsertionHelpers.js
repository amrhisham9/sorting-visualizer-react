import { milli } from "./Insertion";

export const createAnimation = (firstIndex, secondIndex, delay) => {
  const bars = document.getElementsByClassName("bar");
  setTimeout(() => {
    const height1 = bars[firstIndex].style.height;
    const height2 = bars[secondIndex].style.height;
    bars[secondIndex].style.height = `${height1}`;
    bars[firstIndex].style.height = `${height2}`;
  }, milli * delay);
};

export const createMinimumBar = (index, delay) => {
  const bars = document.getElementsByClassName("bar");
  setTimeout(() => {
    bars[index].classList.add("minimum");
  }, milli * delay);
};

export const removeMinimumBar = (index, delay) => {
  const bars = document.getElementsByClassName("bar");
  setTimeout(() => {
    bars[index].classList.remove("minimum");
  }, milli * delay);
};

export const createComparisonBars = (fIndex, sIndex, delay) => {
  const bars = document.getElementsByClassName("bar");
  setTimeout(() => {
    bars[fIndex].classList.add("comparison");
    bars[sIndex].classList.add("comparison");
  }, milli * delay);
};

export const removeComparisonBars = (fIndex, sIndex, delay) => {
  const bars = document.getElementsByClassName("bar");
  setTimeout(() => {
    bars[fIndex].classList.remove("comparison");
    bars[sIndex].classList.remove("comparison");
  }, milli * delay);
};

export const createSwappingBars = (fIndex, sIndex, delay) => {
  const bars = document.getElementsByClassName("bar");
  setTimeout(() => {
    bars[fIndex].classList.add("swapp");
    bars[sIndex].classList.add("swapp");
  }, milli * delay);
};

export const removeSwappingBars = (fIndex, sIndex, delay) => {
  const bars = document.getElementsByClassName("bar");
  setTimeout(() => {
    bars[fIndex].classList.remove("swapp");
    bars[sIndex].classList.remove("swapp");
  }, milli * delay);
};

export const createSortedBar = (index, delay) => {
  const bars = document.getElementsByClassName("bar");
  setTimeout(() => {
    bars[index].classList.add("temp2");
  }, milli * delay);
};

export const removeSortedBar = (index) => {
  const bars = document.getElementsByClassName("bar");
  if (bars[index].classList.contains("temp2")) {
    bars[index].classList.remove("temp2");
  }
  if (bars[index].classList.contains("minimum")) {
    bars[index].classList.remove("minimum");
  }
  if (bars[index].classList.contains("comparison")) {
    bars[index].classList.remove("comparison");
  }
  if (bars[index].classList.contains("swapp")) {
    bars[index].classList.remove("swapp");
  }
};
