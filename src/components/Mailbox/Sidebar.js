import React from 'react';
import { Button } from '@mui/material'
import Sidebaroptions from './Sidebaroptions';
import '../../styles/Sidebar.css'
import { useDispatch } from 'react-redux';
import { uiActions } from '../../redux-store/Ui-Slice';

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div>
            <Button className='compose__btn' onClick={() => dispatch(uiActions.openToSendMsg())} >compose</Button>
          
      <Sidebaroptions  title="Inbox"  isActive={true} />
      <Sidebaroptions  title="Unread"  />
      <Sidebaroptions  title="Starred"  />
      <Sidebaroptions  title="Drafts"  />
      <Sidebaroptions  title="Sent"  />
    </div>
  )
}

export default Sidebar
