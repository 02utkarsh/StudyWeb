import "./App.css";
import { Route,Routes } from "react-router-dom";
import  {Home} from "./pages/Home"
import { Navbar } from "./components/Navbar";
import Login  from "./pages/Login";
import Signup  from "./pages/Signup";
import OpenRoute from "./components/core/auth/OpenRoute"
import { Forgetpassword } from "./pages/Forgetpassword";
import { Updatepassword } from "./pages/Updatepassword";
import { Verifyemail } from "./pages/Verifyemail";
import {About} from "./pages/About";
// import { Myprof } from "./pages/Myprof";
import { Myprofiles } from "../src/components/core/Dashboard/Myprofiles"
import { PrivateRoute } from "./components/core/auth/PrivateRoute";
import { Error } from "./pages/Error";
import { Dashboard } from "./pages/Dashboard";
import Settings from "./components/core/Dashboard/Settings/index"
import { Enrolledcourses } from "./components/core/Dashboard/EnrolledCourses";
import Cart, {cart} from "../src/components/core/Dashboard/Cart/index"
function App() {
  return (
    <div className="flex flex-col w-screen min-h-screen  font-inter ">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
    <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
    <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <Forgetpassword />
            </OpenRoute>
          }
        />
        <Route
          path="updatepassword/:id"
          element={
            <OpenRoute>
              <Updatepassword />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <Verifyemail/>
            </OpenRoute>
          }
        />
        <Route
          path="about"
          element={
            <OpenRoute>
              <About/>
            </OpenRoute>
          }
        />
      
      <Route
          element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
           }
      >
      <Route
          path="dashboard/my-profile"
          element={<Myprofiles/> }
      />
      <Route
          path="dashboard/enrolled-courses"
          element={<Enrolledcourses/> }
      />
      <Route
          path="dashboard/Settings"
          element={<Settings/> }
      />
      <Route
          path="dashboard/Cart"
          element={<Cart/> }
      />
      </Route>
      
      
      <Route
          path="dashboard/my-profile"
          element={<Myprofiles/> }
      />
      <Route
          path="*"
          element={<Error/> }
      />
      


    </Routes>
      {/* <Route path="/login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} /> */}
    {/* </Routes> */}
    </div>
  );
}

export default App;
