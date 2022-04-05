import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FlipToss from "./FlipToss";
import SeasonMatch from "./SeasonMatch";
import SeasonScore from "./SeasonScore";
import Winner from "./Winner";
function Home() {
  const [numberOfSeason, setNumberOfSeason] = useState(0);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FlipToss />} />
        <Route
          exact
          path="/match"
          element={<SeasonMatch onChangeSeason={setNumberOfSeason} />}
        />
        <Route
          exact
          path="/score"
          element={<SeasonScore numberOfSeason={numberOfSeason} />}
        />
        <Route exact path="/winner" element={<Winner />} />
      </Routes>
    </Router>
  );
}

export default Home;
