/* eslint-disable no-unused-vars */
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import FormLayout from "./components/FormLayout";
import Login from "./pages/Login";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Signup from "./pages/Signup.jsx";
import Search from "./pages/Search.jsx";
import { RequireAuth, NotRequireAuth } from "./routes/routes";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FormLayout />}>
          <Route
            path="/login"
            element={
              <NotRequireAuth>
                <Login />
              </NotRequireAuth>
            }
          />
          <Route
            path="/signup"
            element={
              <NotRequireAuth>
                <Signup />
              </NotRequireAuth>
            }
          />
        </Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/search/:query"
          element={
            <RequireAuth>
              <Search />
            </RequireAuth>
          }
        />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;