import React from "react";
// import the library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faHistory } from "@fortawesome/free-solid-svg-icons";

let count = 0; // starting point of 0

function countIncrease() {
  console.log("Counter has increased by 1");
  count = count + 1;
  document.getElementById("counterDisplay").innerText = count;
}

function countDecrease() {
  console.log("Counter has decreased by 1");
  count = count - 1;
  document.getElementById("counterDisplay").innerText = count;
}

function countReset() {
  console.log("Counter has been reset to 0");
  document.getElementById("counterDisplay").innerText = 0;
}

function Counter() {
  return (
    <div>
      <div class="counterWrapper">
        <div className="container">
          <div class="row">
            <div class="col text-center">
              <h1>My Counter App</h1>
              <h2 id="counterDisplay">0</h2>
            </div>
          </div>
          <div class="row">
            <div class="col text-center">
              <button className="btn btn-main mr-2" onClick={countIncrease}>
                Increase <FontAwesomeIcon icon={faPlus} />
              </button>
              <button className="btn btn-main" onClick={countDecrease}>
                decrease <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col text-center">
              <button class="btn btn-reset" onClick={countReset}>
                Reset <FontAwesomeIcon icon={faHistory} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
