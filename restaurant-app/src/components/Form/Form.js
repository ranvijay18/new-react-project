import { useState } from "react";
import "./Form.css";
const Form = ({ onAddOrder }) => {

    const [orderDetails, setOrderDetails] = useState({
      orderId: "",
      orderPrice: "",
      dish:"",
      table: ""
    });
    

    const handleSubmit = (e) => {
        e.preventDefault();
      onAddOrder(orderDetails);
        
    }

    const handleChange = (e) => {
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;

        setOrderDetails(values => ({...orderDetails, [name]: value}))
    }
  return (

    <form onSubmit={handleSubmit}>
      <label>Order Id: </label>
    <input type="text" name="orderId" value={orderDetails.orderId} onChange={handleChange}/>
    <label>Order Price: </label>
    <input type="text" name="orderPrice" value={orderDetails.orderPrice} onChange={handleChange} />
    <label>Choose Dish: </label>
    <input type="text" name="dish" value={orderDetails.dish} onChange={handleChange} />
    <label>Table: </label>
    <select name="table" value={orderDetails.table} onChange={handleChange}>
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