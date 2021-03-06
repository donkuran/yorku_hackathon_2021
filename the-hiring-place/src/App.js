import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Settings from "./components/pages/settingsPage";
import Footer from "./components/shared/footer";
import Homepage from "./components/pages/homepage";
import SignIn from "./components/pages/signIn";
import SignUp from "./components/pages/signUp"
import PrivateRoute from "./helpers/privateRoute";
import GradNotifications from "./components/pages/gradNotifications";
import GradProfilePage from "./components/pages/gradProfilePage";
import RecrProfilePage from "./components/pages/recrProfilePage";
import RecrSearchPage from "./components/pages/recrSearchPage";
import RecrSearchResults from "./components/pages/recrSearchResults";
import GradProfileView from "./components/pages/gradProfileView";
import GradWorkPreference from "./components/pages/gradWorkPreference";
import GradAbout from "./components/pages/gradAbout";
import GradInterests from "./components/pages/gradInterests";
import gradEducation from "./components/pages/gradEducation";
import gradSkills from "./components/pages/gradSkills";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/gradNotifications" component={GradNotifications} />
        <Route path="/recrSearchResults" component={RecrSearchResults} />
        <Route path="/recrSearchPage" component={RecrSearchPage} />
        <Route path="/gradProfileView" component={GradProfileView} />
        <Route path="/gradWorkPreference" component={GradWorkPreference} />
        <Route path="/gradAbout" component={GradAbout} />
        <Route path="/gradInterests" component={GradInterests} />
        <Route path="/gradEducation" component={gradEducation} />
        <Route path="/gradSkills" component={gradSkills} />
        {/* Route For Dev */}
        <Route path="/gradProfilePage" component={GradProfilePage} />
        {/* Route For Dev */}
        <Route path="/recrProfilePage" component={RecrProfilePage} />
        <Route path="/settingsPage" component={Settings} />
        <Route exact path="/" component={Homepage} />
        <PrivateRoute path="/submissions">
          <GradProfilePage path="/gradProfilePage" />
          <RecrProfilePage path="/recrProfilePage" />
        </PrivateRoute>
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
      <Footer year={new Date().getFullYear()} />
    </BrowserRouter>
  );
}

export default App;
