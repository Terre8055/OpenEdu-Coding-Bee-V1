import React from "react";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Frontend from "./Component/Courses/Frontend/Frontend";
import Backend from "./Component/Courses/Backend/Backend";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import Home from "./Component/Homepage/Home";
import ErrorPage from "./Component/Error/errorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element = {<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register"  element = {<Register />}></Route>
        <Route path="/frontend" element = {<Frontend/>}></Route>
        <Route path="/backend" element = {<Backend />}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
