import React from "react";
import "../../styles/Header.css";
import { Button, IconButton } from "@mui/material";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux-store/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const logoutHandler = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("id");
    navigate('/login')
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="logo" height={"80px"} />
      </div>
      <div className="header__middle">
        <div className="search__mail">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type={"text"} placeholder="search mail" />
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
      <div className="header__leftButton">
        <Button
          variant="outlined"
          sx={{
            color: "white",
            backgroundColor: "orange",
            borderColor: "green",
            borderRadius: "15px",
          }}
          onClick={logoutHandler}
        >
          {" "}
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
