import React, { useState } from "react";

export const PagePagination = ({ pageCount }) => {
  const [page, setPage] = useState(1);
  const [pageTrans, setPageTrans] = useState(1);
  const [disableButton, setDisableButton] = useState({
    nextButton: false,
    backButton: true,
  });
  let arrayOfPagination = [];

  for (let i = 0; i < pageCount; i++) {
    arrayOfPagination.push({ display: i + 1, value: i + 1 });
  }

  let arrayOfPage = [];

  const setValues = (i) => {
    setPage(arrayOfPagination[i - 1].value);
    if (i <= 1) {
      setDisableButton({ ...disableButton, backButton: true });
    } else if (i === pageCount) {
      setDisableButton({ ...disableButton, nextButton: true });
    } else {
      setDisableButton({
        ...disableButton,
        backButton: false,
        nextButton: false,
      });
    }
    if (page > 4) {
      setPageTrans(i - 4);
    }
  };

  for (let i = pageTrans; i < pageTrans + 4; i++) {
    arrayOfPage.push(
      <button key={arrayOfPagination[i - 1].value} onClick={() => setValues(i)}>
        {arrayOfPagination[i - 1].display}
      </button>
    );
  }

  //function Next
  const Next = () => {
    if (page === pageCount - 1) {
      setDisableButton({ ...disableButton, nextButton: true });
    } else {
      setDisableButton({ ...disableButton, backButton: false });
    }
    if (page >= 4) {
      setPageTrans((pre) => pre + 1);
    }
    setPage((pre) => pre + 1);
  };

  //function back
  const Back = () => {
    if (page <= 2) {
      setDisableButton({ ...disableButton, backButton: true });
    } else {
      setDisableButton({ ...disableButton, nextButton: false });
    }
    if (page > 4) {
      setPageTrans((pre) => pre - 1);
    }
    setPage((pre) => pre - 1);
  };

  console.log("-------------------");
  console.log("page", page);
  console.log("pageTrans", pageTrans);
  console.log("-------------------");
  return (
    <div>
      <h1>Current Page Number : {page}</h1>
      <h1>Total Page Number : {pageCount}</h1>
      <button onClick={Back} disabled={disableButton.backButton}>
        BACK
      </button>
      {arrayOfPage}
      <button onClick={Next} disabled={disableButton.nextButton}>
        NEXT
      </button>
    </div>
  );
};

export default PagePagination;
