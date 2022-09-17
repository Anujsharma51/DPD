import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatedPage from "../pages/CreatedPage";
import ViewPage from "../pages/ViewPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CreatedPage />}></Route>
      <Route path="/view" element={<ViewPage />}></Route>
    </Routes>
  );
};

export default AllRoutes;
