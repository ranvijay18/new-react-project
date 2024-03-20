
import "./Table.css";


const Table = ({ orders, onDeleteOrder }) => {

const handleDelete = (e) => {
      onDeleteOrder(e.target.id);
    };

   return(
     
         <div className="table">
           <div className="table-order">
            <h1>Table 1</h1>
            {orders.map((ele, index) => {

      if(ele.table === "Table 1")
       return  <li key={index}>{ele.orderId}: {ele.dish} {ele.orderPrice} <button id={ele.orderId} onClick={handleDelete}>Delete Order</button></li>
      })}
           </div>
           <div className="table-order">
           <h1>Table 2</h1>
           {orders.map((ele, index) => {
           if(ele.table === "Table 2")
           return  <li key={index}>{ele.orderId}: {ele.dish} {ele.orderPrice} <button id={ele.orderId} onClick={handleDelete}>Delete Order</button></li>
      })}
           </div>
           <div className="table-order">
           <h1>Table 3</h1>
           {orders.map((ele, index) => {
             if(ele.table === "Table 3")
             return  <li key={index}>{ele.orderId}: {ele.dish} {ele.orderPrice} <button id={ele.orderId} onClick={handleDelete}>Delete Order</button></li>
      })}
           </div>
         </div>
     
   )
}

export default Table;