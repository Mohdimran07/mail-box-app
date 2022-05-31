import React from "react";
import Composemail from "../Mailbox/Composemail";
import Header from "../Mailbox/Header";
import Sidebar from "../Mailbox/Sidebar";
import "../../styles/Dashboard.css";
import { useSelector } from "react-redux";
import EmailList from "../Mailbox/EmailList";


const Dashboard = () => {
  const openMsg = useSelector((state) => state.ui.sendMessageIsOpen);

  return (
    <div>
      <Header />
      <div className="side-view">
        <Sidebar />
      
        <EmailList />

        {openMsg && <Composemail />}
      </div>
    </div>
  );
};

export default Dashboard;
