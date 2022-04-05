import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FlipToss from "./FlipToss";
import SeasonMatch from "../pages/SeasonMatch";
import SeasonScore from "./SeasonScore";
function Home() {
  const [numberOfSeason, setNumberOfSeason] = useState(0);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <FlipToss />
        </Route>
        <Route exact path="/match">
          <SeasonMatch onChangeSeason={setNumberOfSeason} />
        </Route>
        <Route exact path="/score">
          <SeasonScore numberOfSeason={numberOfSeason} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Home;
