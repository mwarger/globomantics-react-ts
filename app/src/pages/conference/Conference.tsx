import * as React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { AddSession } from "./sessions/AddSession";
import { Sessions } from "./sessions/Sessions";
import { Session } from "./sessions/Session";
import "./style-sessions.css";
import { Speakers, Speaker } from "./Speakers";
import { AboutUs } from "./AboutUs";
import { Navigation } from "./Navigation";
import ErrorBoundary from "./ErrorBoundary";

export function Conference() {
  const { path } = useRouteMatch();

  return (
    <ErrorBoundary>
      <Switch>
        <Route path={`${path}/sessions/new`}>
          <AddSession />
        </Route>
        <Route path={`${path}/sessions/:session_id`}>
          <Session />
        </Route>
        <Route path={`${path}/speakers/:speaker_id`}>
          <Speaker />
        </Route>
        <Route path={`${path}/speakers`}>
          <Speakers />
        </Route>
        <Route path={`${path}/sessions`}>
          <Sessions />
        </Route>
        <Route path={`${path}/about`}>
          <AboutUs />
        </Route>
        <Route path={`${path}`}>
          <Navigation />
        </Route>
      </Switch>
    </ErrorBoundary>
  );
}
