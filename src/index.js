import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppContext } from "./components/context/context";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>,
  document.getElementById("root")
);
