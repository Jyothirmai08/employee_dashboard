import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Employee_Dashboard_Integration from "./Components/Employee Dashboard Integration/Employee_Dashboard_Integration";
import Employee_Dashboard from "./Components/Employee Dashboard/Employee_Dashboard";
import Employee_Signin from "./Components/Employee Signin/Employee_Signin";
import Employee_login from "./Components/Employee Signin/Employee_login";





function App() {
  return (

    <>

      <Router>

        <Routes>
          <Route path="/employee" element={<Employee_login />} />
          <Route path="/signup" element={<Employee_Signin />} />
          <Route path="/dashboardint" element={<Employee_Dashboard_Integration />} />
          <Route path="/Dashboard" element={<Employee_Dashboard />} />

        </Routes>
      </Router>
    </>



  );
}

export default App;
