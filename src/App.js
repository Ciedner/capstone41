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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
