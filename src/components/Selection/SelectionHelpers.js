import { milli } from "./Selection";

export const createSwappingBars = (fIndex, sIndex, delay) => {
  const bars = document.getElementsByClassName("bar");
  setTimeout(() => {
    bars[fIndex].classList.remove("minimum");
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

export const createSwappingOneBar = (fIndex, delay) => {
  const bars = document.getElementsByClassName("bar");
  setTimeout(() => {
    bars[fIndex].classList.add("temp2");
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

export const createComparisonBar = (index, delay) => {
  const bars = document.getElementsByClassName("bar");
  setTimeout(() => {
    bars[index].classList.add("comparison");
  }, milli * delay);
};

export const removeComparisonBar = (index, delay) => {
  const bars = document.getElementsByClassName("bar");
  setTimeout(() => {
    bars[index].classList.remove("comparison");
  }, milli * delay);
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

export const removeSortedBarColor = (index) => {
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
