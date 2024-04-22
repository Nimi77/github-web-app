import { Octokit } from "@octokit/core";

const octokit = new Octokit();

export const fetchRepositories = async (username) => {
  try {
    const response = await octokit.request("GET /users/{username}/repos", {
      username: username,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error.message);
    throw error;
  }
};
