import DetailForm from "../DetailForm/DetailForm";
import "./User.css";
import { useState } from "react";



const User = () => {

    const [user, setUser] = useState([]);

     const handleData = (data) => {
        setUser(prevData => {
            const updateData = [...prevData];
            updateData.unshift(data);
            return updateData;
        })
     }

     return(
        <div>
        <DetailForm getData={handleData}/>
        <div className="user-list">
            {user.map((ele, index) => (
               <ul key={index}>
               <li>{ele.username} ({ele.age} year old) {ele.college}</li>
               </ul>
            ))}
        </div>
        </div>
     )
}

export default User;