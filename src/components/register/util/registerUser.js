import axios from "axios";
export default ({ name, username, password, confirmPassword, email }) => {
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_API_URI}/user/register`,
    data: { name, username, email, password, confirmPassword },
  })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
      return { err: "there was an error" };
    });
};
