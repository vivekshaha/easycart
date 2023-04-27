import axios from "axios";
// import { allData } from "./API";

export function getProducts(sortBy, page, search, sortType) {
  let params = {};
  if (sortBy) {
    params.sortBy = sortBy;
  }
  if (page) {
    params.page = page;
  }
  if (search) {
    params.search = search;
  }
  if (sortType) {
    params.sortType = sortType;
  }
  return axios
    .get("https://myeasykart.codeyogi.io/products", {
      params,
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
}
export function getProductDetail(id) {
  return axios
    .get("https://myeasykart.codeyogi.io/product/" + id)
    .then((data) => {
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

export function getProductbyId(ids) {
  const commaSepratedIds = ids.join();
  return axios
    .get("https://myeasykart.codeyogi.io/products/bulk", {
      params: {
        ids: commaSepratedIds,
      },
    })
    .then((response) => response.data);
}

export function saveCart(cart) {
  console.log("savecart api is calles");
  return axios
    .post(
      "https://myeasykart.codeyogi.io/carts",
      { data: cart },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
    .then((response) => response.data);
}
export function getCart() {
  return axios
    .get("https://myeasykart.codeyogi.io/carts", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((response) => response.data);
}
