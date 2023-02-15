import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import App from "./App";
import GlobalStyles from "./global/globalStyles";
import router from "./router";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Provider store={store}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Provider>
  </>,
);
