import React from "react";

const Quick = () => {
  return (
    <div>
      <div className="sort-title">
        <h1>Quick Sort</h1>
      </div>

      <div className="containerr" style={{ height: "140px" }}>
        <h2>Visualization Coming Soon...</h2>
      </div>

      <hr />

      <div className="brief-description">
        <h2>Brief Description</h2>
        <p>
          Quick Sort is an efficient, in-place sorting algorith that in practice
          is faster than MergeSort and HeapSort. However, it is not a stable
          sorting algorithm, meaning that the relative positioning of equal sort
          items is not preserved.Quicksort is a divide and conquer algorithm.
          Quicksort first divides a large array into two smaller sub-arrays: the
          low elements and the high elements. Quicksort can then recursively
          sort the sub-arrays. The steps are:
        </p>
        <p>
          <span>1.</span> Pick an element, called a pivot, from the array. This
          is usually done at random.
        </p>
        <p>
          <span>2.</span> Move pivot element to the start of the array.
        </p>
        <p>
          <span>3.</span> Partitioning: reorder the array so that all elements
          with values less than the pivot come before the pivot, while all
          elements with values greater than the pivot come after it (equal
          values can go either way). After this partitioning, the pivot is in
          its final position. This is called the partition operation.
        </p>
        <p>
          <span>4.</span> Recursively apply the above steps to the sub-array of
          elements with smaller values and separately to the sub-array of
          elements with greater values.
        </p>
        <p>
          The base case of the recursion is an array of size zero or one, which
          are sorted by definition.
        </p>
      </div>

      <hr />

      <div className="performance">
        <h2>Performance</h2>
        <p>
          Worst-case time complexity:{" "}
          <span>
            O(n<sup>2</sup>)
          </span>
        </p>
        <p>
          Average time complexity: <span>O(n log n)</span>
        </p>
        <p>
          Best-case time complexity: <span>O(n log n)</span>
        </p>
        <p>
          Worst-case space complexity: <span>O(log n)</span>
        </p>
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

export default Quick;
