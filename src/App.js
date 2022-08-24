import React, { useEffect } from "react"
import { useDispatch } from "react-redux"


import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./components/user/Login";
import Registration from "./components/user/Registration";
import { loadUser } from "./store/actions/authActions"

function App() {
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(loadUser)
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className="flex justify-center">
        <nav>
          <Link to="/login">Login</Link> | {" "}
          <Link to="/signup">Signup</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
