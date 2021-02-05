import React, { useState } from "react";
import About from "./About/About";
import SortingVisualizer from "./StartSortilizing/SortingVisualizer";
import Home from "./Home/Home";
import Bubble from "./Bubble/Bubble";
import Selection from "./Selection/Selection";
import Insertion from "./Insertion/Insertion";
import Merge from "./Merge/Merge";
import Quick from "./Quick/Quick";
import Heap from "./Heap/Heap";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  const [ArrayLength, setArrayLength] = useState(20);
  const [width, setWidth] = useState(20);
  const [margin, setMargin] = useState(4);

  const handleClickSize5 = () => {
    setArrayLength(5);
    setWidth(50);
    setMargin(7);
  };
  const handleClickSize10 = () => {
    setArrayLength(10);
    setWidth(35);
    setMargin(5.5);
  };
  const handleClickSize20 = () => {
    setArrayLength(20);
    setWidth(20);
    setMargin(4);
  };
  const handleClickSize50 = () => {
    setArrayLength(50);
    setWidth(10);
    setMargin(3);
  };
  const handleClickSize100 = () => {
    setArrayLength(100);
    setWidth(5);
    setMargin(1.75);
  };
  const handleClickSize200 = () => {
    setArrayLength(200);
    setWidth(2);
    setMargin(1.2);
  };

  return (
    <React.Fragment>
      <section>
        <Navbar className="navigation" bg="light" expand="lg">
          <LinkContainer to="/">
            <Navbar.Brand className="brand-name">Sortilizer</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto navs">
              <LinkContainer to="/">
                <Nav.Link className="navigation-link">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="navigation-link">About</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ml-auto navs">
              <NavDropdown
                className="dropdown"
                title="Sorting Algorithms"
                id="basic-nav-dropdown"
              >
                <LinkContainer to="/bubble-sort">
                  <NavDropdown.Item className="dropdown-item">
                    Bubble Sort
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/selection-sort">
                  <NavDropdown.Item className="dropdown-item">
                    Selection Sort
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/insertion-sort">
                  <NavDropdown.Item className="dropdown-item">
                    Insertion Sort
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/merge-sort">
                  <NavDropdown.Item className="dropdown-item">
                    Merge Sort
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/heap-sort">
                  <NavDropdown.Item className="dropdown-item">
                    Heap Sort
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/quick-sort">
                  <NavDropdown.Item className="dropdown-item">
                    Quick Sort
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <NavDropdown
                className="dropdown"
                title="Array Size"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  onClick={handleClickSize5}
                  className="dropdown-speed-item"
                >
                  5
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item
                  onClick={handleClickSize10}
                  className="dropdown-speed-item"
                >
                  10
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item
                  onClick={handleClickSize20}
                  className="dropdown-speed-item"
                >
                  20
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item
                  onClick={handleClickSize50}
                  className="dropdown-speed-item"
                >
                  50
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item
                  onClick={handleClickSize100}
                  className="dropdown-speed-item"
                >
                  100
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item
                  onClick={handleClickSize200}
                  className="dropdown-speed-item"
                >
                  200
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={About} exact path="/about" />
          <Route component={SortingVisualizer} path="/sorting-visualizer" />
          <Route
            component={() => (
              <Bubble length={ArrayLength} width={width} margin={margin} />
            )}
            path="/bubble-sort"
          />
          <Route
            component={() => (
              <Selection length={ArrayLength} width={width} margin={margin} />
            )}
            path="/selection-sort"
          />
          <Route
            component={() => (
              <Insertion length={ArrayLength} width={width} margin={margin} />
            )}
            path="/insertion-sort"
          />
          <Route
            component={() => (
              <Merge length={ArrayLength} width={width} margin={margin} />
            )}
            path="/merge-sort"
          />
          <Route component={Quick} path="/quick-sort" />
          <Route component={Heap} path="/heap-sort" />
        </Switch>
      </section>
    </React.Fragment>
  );
}

export default App;
