import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

var http = require("http");
setInterval(function() {
  http.get("http://shmsim.herokuapp.com");
}, 100000); // every 1 minutes e pouco (100000)

ReactDOM.render(<App />, document.getElementById("root"));
