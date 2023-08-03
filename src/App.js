import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeleteRecord from "./components/DeleteRecord";
import ChangePassword from "./components/ChangePassword";
import FindSpot from "./components/FindSpot";
import Profile from "./components/Profile";
import Transaction from "./components/Transaction"
import Gcash from "./MoP/Gcash"
import PayPal from "./MoP/PayPal"
import Recommendation from "./components/Recommendation"
import Manage from "./Profile/Manage"
import ForgotPassword from "./Profile/ForgotPassword"
import AdminRegister from "./admin/AdminRegister"
import AdminParking from "./admin/AdminParking"
import OperatorDashboard from "./admin/OperatorDashboard"
import Revenues from "./establishment/Revenues"
import EstablishmentDashboard from "./establishment/EstablishmentDashboard"
import AgentRegistration from "./establishment/AgentRegistration"
import ViewSpace from "./admin/ViewSpace"
import Feedback from "./establishment/Feedback";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/delete" element={<DeleteRecord />} />
          <Route path="/change" element={<ChangePassword />} />
          <Route path="/find" element={<FindSpot />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transact" element={<Transaction />} />
          <Route path="/gcash" element={<Gcash />} />
          <Route path="/paypal" element={<PayPal />} />
          <Route path="/recommend" element={<Recommendation />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/adminRegister" element={<AdminRegister />} />
          <Route path="/adminParking" element={<AdminParking/>} />
          <Route path="/operator" element={<OperatorDashboard/>} />
          <Route path="/revenues" element={<Revenues/>} />
          <Route path="/estDashBoard" element={<EstablishmentDashboard/>} />
          <Route path="/agentRegister" element={<AgentRegistration/>} />
          <Route path="/view" element={<ViewSpace/>} />
          <Route path="/feed" element={<Feedback/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
