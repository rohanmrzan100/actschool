import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import "react-full-page-scroller/dist/index.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-tailwind/react";

import { store } from "./store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
