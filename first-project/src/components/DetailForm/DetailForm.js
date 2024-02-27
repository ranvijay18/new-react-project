import "./DetailForm.css"
import { useState } from "react";

const DetailForm = (props) => {

    const [input, setInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        setInput(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getData(input);
    }

    return(
        <div className="detail-card">
            <form className="detail-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <br />
           <input type="text" name="username" onChange={handleChange} size="63" />
           <br />
           <label htmlFor="age">Age</label>
           <br />
           <input type="number" onChange={handleChange} name="age" />
           <br />
           <label htmlFor="college">College</label>
           <br />
           <input type="text" onChange={handleChange} name="college" size="63"/>
           <br />
           <button type="submit">Add User</button>
           </form>
        </div>
    )
}


export default DetailForm;


