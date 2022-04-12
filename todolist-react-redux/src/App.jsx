import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
// import HomePage from "./pages/HomePage";
// import Home from "./pages/football/Home";
import FormInputs from "./pages/marval/FormInputs";
import 'bootstrap/dist/css/bootstrap.min.css';
import UseCallback from "./pages/useCallback/UseCallback";
import UseMemo from "./pages/useMemo/UseMemo";
import MathFunction from "./pages/HooksExample/MathFunction";
import IntroPage from "./pages/marval/IntroPage";

function App() {
  return (
    <Provider store={store}>
      {/* <HomePage /> */}
      {/* <Home /> */}
      {/* <FormInputs/> */}
      {/* <UseCallback/> */}
      {/* <UseMemo/> */}
      {/* <MathFunction/> */}
      <IntroPage/>
    </Provider>
  );
}

export default App;
