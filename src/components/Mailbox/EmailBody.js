import React from 'react';
import '../../styles/EmailBody.css'
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { uiActions } from '../../redux-store/Ui-Slice';

const EmailBody = ({ name, subject, message}) => {
      const dispatch = useDispatch();
      const navigate = useNavigate();
    const openMail = () => {
        dispatch(uiActions.openMessage({
            name, message, subject
        }))
         navigate("/mailDetails")
    }
  return (
    <div className='emailbody' onClick={openMail}>
        <div className='emailbody__left'>
            <CheckBoxOutlineBlankIcon />
          <h4>{name}</h4>
        </div>
        <div className='emailbody__middle'>
            <div className='emailbody__middle__msg'>
               <p>
                   <b>{subject}</b>{message}
               </p>
            </div>
        </div>
      
    </div>
  )
}

export default EmailBody
