import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
// import HomePage from "./pages/HomePage";
import Home from "./pages/football/Home";
function App() {
  return (
    <Provider store={store}>
      {/* <HomePage /> */}
      <Home />
    </Provider>
  );
}

export default App;
