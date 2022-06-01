import React from 'react';
import { Button } from '@mui/material'
import Sidebaroptions from './Sidebaroptions';
import '../../styles/Sidebar.css'
import { useDispatch } from 'react-redux';
import { uiActions } from '../../redux-store/Ui-Slice';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
            <Button className='compose__btn' onClick={() => dispatch(uiActions.openToSendMsg())} >compose</Button><br />
          
      <Button type='button' onClick={() => navigate('/')}>Inbox</Button>
      <Sidebaroptions  title="Unread"  />
      <Sidebaroptions  title="Starred"  />
      <Sidebaroptions  title="Drafts"  />
      <Sidebaroptions  title="Sent"  />
      <Button className='sent__btn' type="button" onClick={() => navigate('/sentMails')} >Send</Button>
    </div>
  )
}

export default Sidebar
