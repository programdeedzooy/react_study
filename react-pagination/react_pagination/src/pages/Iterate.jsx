import React, { useState } from "react";

const Iterate = () => {
  const [input, setInput] = useState({ start: 0, end: 0 });
  const [ans, setAns] = useState(0);

  const getValue = (start, end) => {
    let valueIterate = 0;
    console.log(start, end);
    for (let i = start; i <= end; i++) {
      valueIterate += i;
    }
    setAns(valueIterate);
    console.log(ans);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="start"
        onChange={(e) => setInput({ ...input, start: e.target.value })}
      />
      <input
        type="text"
        placeholder="end"
        onChange={(e) => setInput({ ...input, end: e.target.value })}
      />

      <button
        onClick={() => getValue(parseInt(input.start), parseInt(input.end))}
      >
        ANS
      </button>
      <h1>{ans}</h1>
    </div>
  );
};

export default Iterate;
