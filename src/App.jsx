import { createContext, useEffect, useState } from "react";
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
// import Hoctesting from "./Hoctesting";
import CartPage from "./CartPage";
import Dashboard from "./Dashboard";
import Loading from "./Loading";
import UserRoute from "./UserRoute";
import AuthRoute from "./AuthRoute";
export const UserContext = createContext();

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
        <UserContext.Provider value={{ user, setUser }}>
          <Navbar total={totalCount} />
          {/* <Login /> */}
          <div className="px-8 max-w-7xl bg-gray-dark grow">
            <Routes>
              <Route
                index
                element={
                  <UserRoute>
                    <ProductList />
                  </UserRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <UserRoute>
                    <CartPage cart={cart} updatecart={updatecart} />
                  </UserRoute>
                }
              />
              <Route
                path="/dash"
                element={
                  <UserRoute>
                    <Dashboard />
                  </UserRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <AuthRoute>
                    <Login />
                  </AuthRoute>
                }
              />
              <Route
                path="/signup"
                element={
                  <AuthRoute>
                    <SignUp />
                  </AuthRoute>
                }
              />
              <Route
                path="/forgetpass"
                element={
                  <AuthRoute>
                    <ForgetPass />
                  </AuthRoute>
                }
              />
              <Route
                path="/products/:id"
                element={
                  <UserRoute>
                    <ProductDetail cartDetail={cartDetail} />
                  </UserRoute>
                }
              />
              {/* <Route path="/hoc" element={<Hoctesting />} /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
