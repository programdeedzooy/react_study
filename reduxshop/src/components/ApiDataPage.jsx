import React from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchdata from "../redux/API/apiActions";
function ApiDataPage() {
  const datas = useSelector((state) => state.api.data);
  const error = useSelector((state) => state.api.error);
  const dispatch = useDispatch();
  let data =
    error == ""
      ? datas.map((val) => {
          return <li>{val.title}</li>;
        })
      : error;
  console.log(`datas`, error);
  return (
    <>
      <div>api call datas: -{data}</div>
      <button onClick={() => dispatch(fetchdata())}>button</button>
    </>
  );
}

export default ApiDataPage;
