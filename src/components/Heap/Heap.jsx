import React from "react";

const Heap = () => {
  return (
    <div>
      <div className="sort-title">
        <h1>Heap Sort</h1>
      </div>

      <div className="containerr" style={{height: '140px'}}>
        <h2>Visualization Coming Soon...</h2>
      </div>

      <hr />

      <div className="brief-description">
        <h2>Brief Description</h2>
        <p>
          Heap Sort can be thought of as an improved selection sort that uses
          the heap data structure rather than a linear-time search to find the
          maximum or minimum element. It is an in-place sorting algorithm that
          is not stable and has a somewhat slower running time than Quicksort in
          practice.
        </p>
        <p>
          The heapsort algorithm can be divided into two parts. In the first
          step, a heap is built out of the data. The heap is often placed in an
          array with the layout of a complete binary tree. In the second step, a
          sorted array is created by repeatedly removing the largest element
          from the heap (the root of the heap), and inserting it into the array.
          The heap is updated after each removal to maintain the heap property.
          Once all objects have been removed from the heap, the result is a
          sorted array.
        </p>
        <p>
          <span>1.</span>Call the buildMaxHeap() function on the list. Also
          referred to as heapify(), this builds a heap from a list in O(n)
          operations.
        </p>
        <p>
          <span>2.</span>Swap the first element of the list with the final
          element. Decrease the considered range of the list by one.
        </p>
        <p>
          <span>3.</span>Call the siftDown(), also called maxHeapify() function
          on the list to sift the new first element to its appropriate index in
          the heap.
        </p>
        <p>
          <span>4.</span>Go to step (2) unless the considered range of the list
          is one element.
        </p>
      </div>

      <hr />

      <div className="performance">
        <h2>Performance</h2>
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
          Worst-case space complexity: <span>O(1)</span>
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

export default Heap;
