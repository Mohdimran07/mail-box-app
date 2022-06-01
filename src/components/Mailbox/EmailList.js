import axios from "axios";
import React, { useEffect, useState } from "react";
import EmailBody from "./EmailBody";

import "../../styles/Emaillist.css";
import EmailListSetting from "./EmailListSetting";

const EmailList = () => {
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
    <div className="emaillist">
      <EmailListSetting />
      {emails && Object.keys(emails).map((key) => {
          console.log(emails[key])
        return (
            <div className="email-data">
          <EmailBody
            key={emails[key]}
            name={emails[key].To}
            subject={emails[key].Subject}
            message={emails[key].message}
           value = {key}
         
          />
         
      </div>
        );
      })}
      <div>
   
      </div>
    </div>
  );
};

export default EmailList;
