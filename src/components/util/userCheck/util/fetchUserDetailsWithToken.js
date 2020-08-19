import axios from "axios";

export default async (token) => {
  let response = await axios({
    method: "POST",
    url: `${process.env.REACT_APP_API_URI}/user/refresh`,
    data: {token:token},
  });
  return response.data;
};
