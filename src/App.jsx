import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/applayout/AppLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
