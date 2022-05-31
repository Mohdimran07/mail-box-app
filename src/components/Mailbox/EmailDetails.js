import React from "react";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PrintIcon from "@mui/icons-material/Print";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../styles/EmailDetails.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

const EmailDetails = () => {
  const mail = useSelector((state) => state.ui.selectedMessage);
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="side-view">
        <Sidebar />
        <div>
          <IconButton>
            <ArrowBackIcon onClick={() => navigate("/")} />
          </IconButton>

          <div className="details__msg">
            <div className="details__header">
              <h4>{mail.subject}</h4>
              <p>{mail.name}</p>
            </div>
            <div className="details__middleheaderRight">
              <IconButton>
                <PrintIcon />
              </IconButton>
              <p>{mail.time}</p>
              <IconButton>
                <StarOutlineIcon />
              </IconButton>
            </div>
          </div>

          <div className="details__body">
            <p>{mail.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailDetails;
