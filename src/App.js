import Layout from "./Layout";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = { <Layout></Layout> }>
            <Route index element = { <Login></Login> }></Route>
            <Route path = "/signup" element = { <Signup></Signup> } ></Route>
            <Route path = "/profile" element = { <Profile></Profile> }></Route>
            <Route path = "/home" element = { <Home></Home> }></Route>
            <Route path = "/sidebar" element = { <Home></Home>}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App