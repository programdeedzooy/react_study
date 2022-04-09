import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
// import HomePage from "./pages/HomePage";
// import Home from "./pages/football/Home";
import FormInputs from "./pages/marval/FormInputs";
import 'bootstrap/dist/css/bootstrap.min.css';
import UseCallback from "./pages/useCallback/UseCallback";
import UseMemo from "./pages/useMemo/UseMemo";

function App() {
  return (
    <Provider store={store}>
      {/* <HomePage /> */}
      {/* <Home /> */}
      {/* <FormInputs/> */}
      {/* <UseCallback/> */}
      <UseMemo/>
    </Provider>
  );
}

export default App;
