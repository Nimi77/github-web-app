// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import CreateModal from "./Modal";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import "../index.css"

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewRepo = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="header flex justify-between items-center  border-b border-gray-300 text-black py-5  px-12 w-full  sticky top-0 font-inter">
      <h2 className="p-4 flex items-flex-start text-2xl"><Link to="/">Repositories</Link></h2>
      <div className="flex">
        <ul className="testing-error-boundary flex justify-between items-center mx-8 text-md cursor-pointer">
          {/* Test tests the 404 page */}
           <li className="mr-6"><Link to="/404ErrorPage">Test</Link></li>
           {/* Activities tests the error boundary */}
           <li><Link to="/error-boundary">Activities</Link></li>   
        </ul>
        <button
            className="create-btn inline-flex items-center rounded-full bg-white px-8 py-4 h-140 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  transition-transform duration-500 transform hover:translate-x-2"
            onClick={handleNewRepo}
          >
            <AddIcon w={30} h={20} className="hover-white"/>
            Create Repository
          </button>  
      </div>
        

      {/* open modal box */}
      <CreateModal className="heyy"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      ></CreateModal>
    </div>
  );
};

export default Header;
