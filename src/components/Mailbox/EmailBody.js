import React from "react";
import "../../styles/EmailBody.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uiActions } from "../../redux-store/Ui-Slice";
import axios from "axios";

const EmailBody = ({ name, message, subject, value }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openMail = () => {
    dispatch(
      uiActions.openMessage({
        name,
        message,
        subject,
      })
    );
    navigate("/mailDetails");
  };

  const DeleteHandler = (e, id) => {
    e.preventDefault();
    console.log(id);
    const string = localStorage.getItem("id");
    let email = string.replace(/[&,+()$~%@.'":*?<>{}]/g, "");
    axios
      .delete(
        `https://userdatamailbox-default-rtdb.firebaseio.com/${email}/${id}.json`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="emailbody">
      <div className="emailbody__left" onClick={openMail}>
        <CheckBoxOutlineBlankIcon />
        <h4>{name}</h4>
      </div>
      <div className="emailbody__middle">
        <div className="emailbody__middle__msg">
          <p>
            <b>{subject}</b>
            {message}
          </p>
        </div>
      </div>
      <div className="emailbody__right">
        <IconButton>
          <DeleteIcon onClick={(e) => DeleteHandler(e, value)}></DeleteIcon>
        </IconButton>
      </div>
    </div>
  );
};

export default EmailBody;
