import { useSelector } from "react-redux";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import EmailDetails from "./components/Mailbox/EmailDetails";
import SentMails from "./components/Mailbox/SentMails";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./pages/Signup";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn)
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
         {isLoggedIn &&  <Route path="/" element={<Dashboard />} /> }
         {isLoggedIn &&  <Route path="/mailDetails" element={<EmailDetails />} />}
         {isLoggedIn &&  <Route path="/sentMails" element={<SentMails />} />}
          <Route path="*" element={<Navigate to='/login' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
