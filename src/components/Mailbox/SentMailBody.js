import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import "../../styles/EmailBody.css";

const SentMailBody = ({ name, message, subject }) => {
  return (
    <div className='sentmails'>
    <div className='sentmails__left'>
        <CheckBoxOutlineBlankIcon />
      <p>{name}</p>
    </div>
    <div className='sentmails__middle'>
    <div className="sentmails__middle__msg">
     <p>
       <b>{subject}</b>
       {message}
     </p>
   </div>
    </div>
 </div>
  );
};

export default SentMailBody;
