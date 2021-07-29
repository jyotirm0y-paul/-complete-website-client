import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Sidebar2 from '../Sidebar2/Sidebar2';
// import Sidebar from '../Sidebar/Sidebar';

const AllOrderList = () => {

  const [allOrder, setAllOrder] = useState({})
  useEffect(() => {
    fetch('https://enigmatic-mountain-35188.herokuapp.com/allOrders')
    .then(res => res.json())
    .then(data =>setAllOrder(data))
  }, [])


  return (
    <section className="container-fluid row">
    <Sidebar2></Sidebar2>
     { (allOrder.length > 0) &&
      <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
      <h5 className="text-brand">Order List {allOrder.length}</h5>
      <table class="table">
<tr>
  <th>Name</th>
  <th>Price</th>
  <th>Action</th>
</tr>
{
  allOrder.map(order => {
    return (

      <>

        <tbody>
          <tr>
            <td>{order.name}</td>
            <td>{order.price}</td>
          </tr>

        </tbody>

      </>
    )
  })
}


</table>

  </div>}
    
     
</section>
  );
};

export default AllOrderList;