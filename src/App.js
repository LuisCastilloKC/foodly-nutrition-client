import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/user/Login";
import Registration from "./components/user/Registration";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
