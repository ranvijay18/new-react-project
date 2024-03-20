import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Table from './components/UI/Table/Table';

function App() {

  const [orders, setOrders] = useState([]);

  const addOrder = (formData) => {
    setOrders([...orders, formData]);
  };

  const deleteOrder = (id) => {
       setOrders(orders.filter((ele) => ele.orderId !== id));
       console.log(orders);
  }


  useEffect(() => {
    localStorage.setItem('Orders', JSON.stringify(orders));
  },[orders, deleteOrder])

  return (
   <>
   <h1>Restaurant App</h1>
   <Form onAddOrder={addOrder} />
      <Table orders={orders}  onDeleteOrder={deleteOrder} />
   </>
  );
}

export default App;

