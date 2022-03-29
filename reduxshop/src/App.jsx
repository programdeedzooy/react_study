import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppleStore from "./components/AppleStore";
import OrangeStore from "./components/OrangeStore";
import ApiDataPage from "./components/ApiDataPage";
function App() {
  return (
    <Provider store={store}>
      <AppleStore />
      <OrangeStore />
      <ApiDataPage />
    </Provider>
  );
}

export default App;
