// src/App.js
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Routes,
  useLocation,
} from "react-router-dom";
import sidebarContent from "./components/sidebar/sidebarContent";
import Sidebar from "./components/sidebar/Sidebar";

import "./App.css";
import TopBar from "./components/navbar/Topbar";
import CreateDataset from "./components/dataset/CreateDataset";
import { ReactComponent as Group2 } from "./assets/group2.svg";
import { ReactComponent as Group } from "./assets/group.svg";
import Settings from "./components/settings/Settings";
import GetMainImage from "./GetMainImage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <GetMainImage />
        <Sidebar sideBarData={sidebarContent} />
        <div className="top-bar">
          <TopBar />
        </div>
        <div className="main-content">
          <Routes>
            <Route exact path="/datasets" element={<CreateDataset />} />
            <Route exact path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
