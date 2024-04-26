// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import CreateModal from "./Modal";
import { Link } from "react-router-dom";
import { AnalyticsOutlined } from "@mui/icons-material";
import GithubIcon from "@mui/icons-material/Github";
import BugReportIcon from "@mui/icons-material/BugReport";
import "../index.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewRepo = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="header flex justify-between items-center  border-b border-gray-300 text-black py-4 px-12 w-full  sticky top-0 font-inter">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <h2 className="px-4 py-2 flex items-flex-start text-xl hover-bg" >
        <Link to="/"><GithubIcon className="h-icon" /> Repositories</Link>
      </h2>
      <div className="flex">
        <ul className="testing-error-boundary flex justify-between items-center mx-8 cursor-pointer">
          {/* tests the error boundary page */}
          <li className="mr-6 test">
            <Link to="/error-boundary" className="hover-bg px-4 py-2"><BugReportIcon className="h-icon"/> Test </Link>
          </li>
          {/*  tests the 404 page boundary */}
          <li>
            <Link to="/404ErrorPage" className="hover-bg px-4 py-2"><AnalyticsOutlined className="h-icon" /> Activities </Link>
          </li>
        </ul>
        <button
          className="create-btn inline-flex items-center rounded-full bg-white px-5 py-3 h-140 font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300  transition-transform duration-500 transform hover:translate-x-2"
          onClick={handleNewRepo}
        >
          Create Repository
        </button>
        {/* This button should appear on small screen */}
        <button
          className="create-btn-sm inline-flex items-center rounded-full px-6 py-2 h-140 font-semibold text-black "
          onClick={handleNewRepo}
        >
          Create
        </button>
      </div>

      {/* open modal box */}
      <CreateModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      ></CreateModal>
    </div>
  );
};

export default Header;
