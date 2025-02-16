import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Componant/Admin/Dashboard/Admin";
import Dashboard from "./Componant/HR/Dashboard/Dashboard";
import SignIn from "./Componant/Login";
import Register from "./Componant/Register";
import Employees from "./Componant/Admin/Employees/Employees";
import EditE from "./Componant/Admin/Employees/EditE";
import Info from "./Componant/Admin/Employees/Info";
import AddE from "./Componant/Admin/Employees/AddE";
import Noti from "./Componant/Admin/Noti/Noti";
import Leave from "./Componant/Admin/Leave/Leave";
import AddL from "./Componant/Admin/Leave/AddL";
import EditL from "./Componant/Admin/Leave/EditL";

function App() {
  const LoggedInAdmin = localStorage.getItem("Admin");
  const LoggedIn = localStorage.getItem("HR");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={LoggedIn ? <Dashboard /> : <SignIn />} />
          <Route index element={LoggedInAdmin ? <Admin /> : <SignIn />} />
          <Route path="login" element={<SignIn />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="/admin">
            <Route index element={<Admin />} />
            <Route path="employee" element={<Employees />} />
            <Route path="addemployee" element={<AddE />} />
            <Route path="employee/edit/:id" element={<EditE />} />
            <Route path="employee/info/:id" element={<Info />} />
            <Route path="leave" element={<Leave />} />
            <Route path="addleave" element={<AddL />} />
            <Route path="leave/edit/:id" element={<EditL />} />
            <Route path="noti" element={<Noti />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
