import { createContext, useEffect, useState } from "react";
import ProjectDetail from "./Product";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductList from "./ProductList";
import { Route, Routes, useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import NotFound from "./NotFound";
import { getProductDetail, getuser } from "./https";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgetPass from "./ForgetPass";
import Cart from "./Cartlist";
// import Hoctesting from "./Hoctesting";
import CartPage from "./CartPage";
import Dashboard from "./Dashboard";
import Loading from "./Loading";
import UserRoute from "./UserRoute";
import AuthRoute from "./AuthRoute";

function App() {
  const localdata = localStorage.getItem("cart");
  const savedCart = JSON.parse(localdata) || {};
  const [cart, setCart] = useState(savedCart);
  const [user, setUser] = useState(undefined);
  const [userloading, setUserloading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getuser(token).then((response) => {
        setUser(response.data);
        setUserloading(false);
      });
    } else {
      setUserloading(false);
    }
  }, []);

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
  // console.log("app is called");
  // Reading Total count
  const totalCount = Object.keys(cart).reduce((sum, Pid) => {
    return sum + cart[Pid];
  }, 0);
  if (userloading) {
    <Loading />;
  }

  return (
    <>
      <div className="flex flex-col ">
        <Navbar total={totalCount} />
        {/* <Login /> */}
        <div className="px-8 max-w-7xl bg-gray-dark grow">
          <Routes>
            <Route
              index
              element={
                <UserRoute user={user}>
                  <ProductList />
                </UserRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <UserRoute user={user}>
                  <CartPage cart={cart} updatecart={updatecart} />
                </UserRoute>
              }
            />
            <Route
              path="/dash"
              element={
                <UserRoute user={user}>
                  <Dashboard setUser={setUser} user={user} />
                </UserRoute>
              }
            />
            <Route
              path="/login"
              element={
                <AuthRoute user={user}>
                  <Login setUser={setUser} />
                </AuthRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthRoute user={user}>
                  <SignUp setUser={setUser} />
                </AuthRoute>
              }
            />
            <Route
              path="/forgetpass"
              element={
                <AuthRoute user={user}>
                  <ForgetPass />
                </AuthRoute>
              }
            />
            <Route
              path="/products/:id"
              element={
                <UserRoute user={user}>
                  <ProductDetail cartDetail={cartDetail} />
                </UserRoute>
              }
            />
            {/* <Route path="/hoc" element={<Hoctesting />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
