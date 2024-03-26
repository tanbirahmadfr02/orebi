/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { Root } from "postcss";
import RootLayout from "./components/Layout/RootLayout";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import FourZeroFour from "./components/pages/FourZeroFour";
import MyAccount from "./components/pages/MyAccount";
import Cart from "./components/pages/Cart";
import CheckOut from "./components/pages/CheckOut";
let router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signUp" element={<SignUp/>}></Route>
    <Route path="/FourZeroFour" element={<FourZeroFour/>}></Route>
    <Route path="/myaccount" element={<MyAccount/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/checkout" element={<CheckOut/>}></Route>
  </Route>)
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
