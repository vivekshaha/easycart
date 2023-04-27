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
import Alert from "./Alert";
import { AlertContext } from "./Context";
import UserProvider from "./Provider/UserProvider";
import AlertProvider from "./Provider/AlertProvider";
import CartProvider from "./Provider/CartProvider";

function App() {
  return (
    <>
      <div className="flex flex-col ">
        <AlertProvider>
          <UserProvider>
            <CartProvider>
              <Navbar />
              <Alert />
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
                        <CartPage />
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
                        <ProductDetail />
                      </UserRoute>
                    }
                  />
                  {/* <Route path="/hoc" element={<Hoctesting />} /> */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
            </CartProvider>
          </UserProvider>
        </AlertProvider>
      </div>
    </>
  );
}

export default App;
