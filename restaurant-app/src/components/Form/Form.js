import { useEffect, useState } from "react";
import "./Form.css";
const Form = () => {

    const [orderDetails, setOrderDetails] = useState({});
   let details = []
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(orderDetails);
        // const jsonString = JSON.stringify(orderDetails);
        // localStorage.setItem("orderDetails", jsonString)
    }
    useEffect(() => {
        details = [{...orderDetails}];
        console.log(details)
      },[handleSubmit])

    const handleChange = (e) => {
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;

        setOrderDetails(values => ({...orderDetails, [name]: value}))
    }
  return (

    <form onSubmit={handleSubmit}>
      <label>Order Id: </label>
    <input type="text" name="orderId" onChange={handleChange}/>
    <label>Order Price: </label>
    <input type="text" name="orderPrice" onChange={handleChange} />
    <label>Choose Dish: </label>
    <input type="text" name="dish" onChange={handleChange} />
    <label>Table: </label>
    <select name="table" onChange={handleChange}>
        <option>--Select--</option>
        <option>Table 1</option>
        <option>Table 2</option>
        <option>Table 3</option>
    </select>
    <button>Order Now</button>
    </form>

  )
}

export default Form;