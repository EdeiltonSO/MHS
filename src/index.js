import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

var http = require("http");
setInterval(function() {
  http.get("http://shmsim.herokuapp.com");
}, 300000); // every 5 minutes (300000)

ReactDOM.render(<App />, document.getElementById("root"));
