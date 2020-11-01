import React from "react";
import Home from "./pages/home";
import "./assets/styles/main.scss";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
