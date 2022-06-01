import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar';
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import '../../styles/SentMails.css'
import axios from 'axios';

import SentMailBody from './SentMailBody';


const SentMails = () => {
    const [emails, setEmails] = useState([]);
  useEffect(() => {
    const string = localStorage.getItem("id");
    let email = string.replace(/[&,+()$~%@.'":*?<>{}]/g, "");
    axios
      .get(`https://userdatamailbox-default-rtdb.firebaseio.com/${email}.json`)
      .then((res) => {
        console.log(res.data);
        setEmails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Header />
      <div className='sideView-menu'>
       <Sidebar />
       <div>
       {emails && Object.keys(emails).map((key) => {
        //   console.log(emails[key])
        return (
           <SentMailBody
            key={emails[key]}
            name={emails[key].To}
            subject={emails[key].Subject}
            message={emails[key].message}
        />
        
        );
      })}
     </div>
     </div>
       </div>
  )
}

export default SentMails


