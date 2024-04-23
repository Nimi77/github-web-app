// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Input, Button, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { fetchRepositories } from "../Api/fetchGithubRepo";
import PropTypes from "prop-types";
import "../index.css";
// import CreateModal from "../Components/Modal";

const RepositoriesPage = ({ username }) => {
  const [repositories, setRepositories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const repoPerPage = 5;

  useEffect(() => {
    const getRepositories = async () => {
      setLoading(true);
      try {
        const data = await fetchRepositories(username);
        setRepositories(data);
      } catch (error) {
        console.log("Error fetching repositories", error);
      }
      setLoading(false);
    };
    getRepositories();
  }, [username]);

  const filteredRepos = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredRepos);

  const indexOfLastRepo = currentPage * repoPerPage;
  const indexOfFirstRepo = indexOfLastRepo - repoPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);
  console.log(currentRepos);

  //searchTerm
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === Math.ceil(filteredRepos.length / repoPerPage)
        ? 1
        : prevPage + 1
    );
  };
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Callback function to handle creation of new repository
  // const handleCreateRepository = (newRepo) => {
  //   setRepositories([...repositories, newRepo]);
  // };

  if (loading) return <div>Loading..</div>;

  return (
    <div className="font-inter mt-6">
      <InputGroup mt={2} className="flex items-center justify-center">
        <div pointerEvents="none" className="py-4">
          <SearchIcon color="gray.900" h={12} w={12} />
        </div>
        <Input
          placeholder="Search Repositories.."
          value={searchTerm}
          onChange={handleSearch}
          className="border-b-2 w-2xl bgcolor border-black focus:outline-none focus:border-gray-500 py-2 pl-6"
          _placeholder={{ fontSize: "14px" }}
        />
      </InputGroup>

      {filteredRepos.length > 0 ? (
        <div>
          <div className="repo-top mx-auto max-w-screen-lg grid grid-cols-1 gap-6 md:flex md:flex-wrap md:justify-center md:gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {currentRepos.map((repo) => (
              <div
                key={repo.id}
                className="repo-card flex items-center justify-center mb-2 border border-solid border-gray-200 rounded-lg bg-white shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              >
                <Link to={`/repository/${repo.id}`}>
                  <h3 className="repo-name">{repo.name}</h3>
                </Link>
              </div>
            ))}
          </div>
          <div>
            {filteredRepos.length > repoPerPage && (
              <div className="flex justify-center item-center mt-4 mb-4">
                <Button
                  className="action-btn bg-black text-white px-2 py-2 rounded-full  mr-2 w-1/6 hover:bg-gray-900 font"
                  onClick={previousPage}
                  mt={4}
                >
                  Prev
                </Button>
                <Button
                  className="action-btn bg-black text-white px-2 py-1 rounded-full  w-1/6 hover:bg-gray-900"
                  onClick={nextPage}
                  mt={4}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-max mt-9">
          <p className="text-3xl mb-4">No repositories found.</p>
          <p className="text-md">
            You can try checking your internet connection...
          </p>
        </div>
      )}
    </div>
  );
};
// PropTypes for the component
RepositoriesPage.propTypes = {
  username: PropTypes.string.isRequired,
};

export default RepositoriesPage;
