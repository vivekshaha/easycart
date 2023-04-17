import { useState } from "react";
import ProjectDetail from "./Product";
import Navbar from "./Navbar";
import Footer from "./Footer";

import ProductList from "./ProductList";
import { Route, Routes, useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import NotFound from "./NotFound";
import { getProductDetail } from "./https";

function App() {
  const localdata = localStorage.getItem("cart");
  const savedCart = JSON.parse(localdata) || {};
  const [cart, setCart] = useState(savedCart);
  const cartDetail = (ProductId, count) => {
    // console.log("productId:", ProductId, "count:", count);
    console.log("pid", ProductId);
    const oldCount = cart[ProductId] || 0;

    const newCart = { ...cart, [ProductId]: oldCount + +count };
    setCart(newCart);
    const savelocal = JSON.stringify(newCart);
    localStorage.setItem("cart", savelocal);
  };
  // console.log(cart);
  // console.log(Object.keys(cart));

  const totalCount = Object.keys(cart).reduce((sum, Pid) => {
    return sum + cart[Pid];
  }, 0);
  const promises = Object.keys(cart).map((a) => {
    return getProductDetail(a);
  });
  const cartData = Promise.all(promises);
  //ti is todo higherer
  cartData.then((a) => {
    console.log(a);
  });

  return (
    <>
      {" "}
      <div className="flex flex-col">
        <Navbar total={totalCount} />
        <Routes>
          <Route index element={<ProductList />} />
          <Route
            path="/products/:id"
            element={<ProductDetail cartDetail={cartDetail} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
