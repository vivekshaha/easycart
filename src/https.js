import axios from "axios";
// import { allData } from "./API";

export function getProducts() {
  return axios.get("https://dummyjson.com/products").then((response) => {
    return response.data.products;
  });
}
export function getProductDetail(id) {
  return axios.get("https://dummyjson.com/products/" + id).then((data) => {
    return data.data;
  });
}
export function postlogin(email, password) {
  return axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      // console.log(response);
      return response;
    });
}
export function postsignup(email, password, name) {
  return axios
    .post("https://myeasykart.codeyogi.io/signup", {
      email: email,
      password: password,
      fullName: name,
    })
    .then((response) => {
      // console.log(response);
      return response;
    });
}
export function getuser(token) {
  return axios
    .get("https://myeasykart.codeyogi.io/me", {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      // console.log(response);
      return response;
    });
}
