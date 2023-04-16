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
