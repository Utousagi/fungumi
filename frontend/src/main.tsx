import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./style/global.scss";
import "@arco-design/web-react/dist/css/arco.css";
import { Provider } from "react-redux";
import reduxStore from "@/redux/reduxStore";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
