import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeComponents from "./components/CakeComponents";

function App() {
  return (
    <>
      <Provider store={store}>
        <CakeComponents />
      </Provider>
    </>
  );
}

export default App;
