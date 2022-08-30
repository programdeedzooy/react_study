import React from "react";
import PagePagination from "../components/PagePagination";

const Pageview = () => {
  return (
    <div>
      <h1> Pageview</h1>
      <PagePagination pageCount={7} />
    </div>
  );
};

export default Pageview;
