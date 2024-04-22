// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Octokit } from "@octokit/core";

const octokit = new Octokit();

const RepoDetailsPage = () => {
  const { repoId } = useParams();
  const [repository, setRepository] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      try {
        setLoading(true);
        const response = await octokit.request(
          "GET /repositories/{repository_id}",
          {
            repository_id: repoId,
          }
        );
        setRepository(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching repository details:", error);
      }
      setLoading(false);
    };
    fetchRepoDetails();
  }, [repoId]);

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleDateString();
  };

  if (loading) return <div>Loading...</div>;
  if (!repository) return <div>Repository not found!</div>;

  return (
    <div className="inter flex flex-col  h-screen items-center justify-center ">
      <div className="w-full max-w-xl mx-auto md:max-w-30rem bg-white text-black shadow-lg rounded-lg p-10 mt-8">
        <p className="text-md-d font-bold mb-2 capitalize pb-1 ">
          {repository.name}
        </p>
        <p className="repo-info">
          Description: {repository.description || "No Description Provided"}
        </p>

        <div className="repo-info flex flex-row justify-between items-center mt-8 border-b-2 border-gray-200 pb-2">
          <p>Stars: {repository.stargazers_count}</p>
          <p>Forks: {repository.forks_count}</p>
          <p className="text-blue">
            Language: {repository.language || "Unable to specify language"}
          </p>
        </div>
        <div className="my-8">
          <p className="mb-4 text-xl">Created at: {formatDate(repository.created_at)}</p>
          <p className="text-xl">Updated at: {formatDate(repository.updated_at)}</p>
        </div>
      </div>
    </div>
  );
};

export default RepoDetailsPage;
