import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users/';

export const getUser = async (username) => {
  const response = await axios.get(`${GITHUB_API_URL}${username}`, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
    },
  });
  return response.data;
};
