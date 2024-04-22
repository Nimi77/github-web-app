/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RepoDetailsPage from "./Pages/RepoDetailsPage";
import RepositoriesPage from "./Pages/RepositoriesPage";
import ErrorBoundary from "./Pages/ErrorBoundaryPage";
import NotFoundPage from "./Pages/404ErrorPage";
import Header from "./Components/Header";
import "./index.css";

function App() {
  const username = "Nimi77";

  return (
    <Router>
      <div className="flex h-full">
        <div className=" h-screen flex-1 flex flex-col ">
          <Header />
          <div>
            <Routes>
              <Route
                exact
                path="/"
                element={<RepositoriesPage username={username} />}
              />
              <Route path="/repository/:repoId" element={<RepoDetailsPage />} />
              <Route path="/404" element={<NotFoundPage />} />
              <Route
                path="/error-boundary"
                element={
                  <ErrorBoundary>
                    <RepositoriesPage />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/404ErrorPage"
                element={
                  <NotFoundPage>
                    <RepositoriesPage />
                  </NotFoundPage>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
