import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./views/pages/Login";
import Register from "./views/pages/Register";
import Dashboard from "./views/pages/Dashboard";
import Tasks from "./views/pages/Tasks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;