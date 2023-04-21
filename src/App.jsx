import { useState } from "react";
import ProjectDetail from "./Product";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductList from "./ProductList";
import { Route, Routes, useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import NotFound from "./NotFound";
import { getProductDetail } from "./https";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgetPass from "./ForgetPass";
import Cart from "./Cart";
import Hoctesting from "./Hoctesting";

function App() {
  const localdata = localStorage.getItem("cart");
  const savedCart = JSON.parse(localdata) || {};
  const [cart, setCart] = useState(savedCart);

  // Adding cart  detail in id and no format
  const cartDetail = (ProductId, count) => {
    // console.log("productId:", ProductId, "count:", count);
    const oldCount = cart[ProductId] || 0;
    const newCart = { ...cart, [ProductId]: oldCount + +count };
    updatecart(newCart);
  };
  function updatecart(data) {
    setCart(data);
    const savelocal = JSON.stringify(data);
    localStorage.setItem("cart", savelocal);
  }

  console.log("app is called");
  // Reading Total count
  const totalCount = Object.keys(cart).reduce((sum, Pid) => {
    return sum + cart[Pid];
  }, 0);

  return (
    <>
      <div className="flex flex-col ">
        <Navbar total={totalCount} />
        {/* <Login /> */}
        <div className="px-8 max-w-7xl bg-gray-dark grow">
          <Routes>
            <Route index element={<ProductList />} />
            <Route
              path="/cart"
              element={<Cart cart={cart} updatecart={updatecart} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgetpass" element={<ForgetPass />} />
            <Route
              path="/products/:id"
              element={<ProductDetail cartDetail={cartDetail} />}
            />
            <Route path="/hoc" element={<Hoctesting />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
