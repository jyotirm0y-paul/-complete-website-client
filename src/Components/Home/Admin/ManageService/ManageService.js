import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Sidebar2 from '../Sidebar2/Sidebar2';

const ManageService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://enigmatic-mountain-35188.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  const deleteProduct = (event, id) =>{
    console.log(id)
    fetch(`https://enigmatic-mountain-35188.herokuapp.com/delete/${id}`,{
      method:'DELETE'
    })
      .then(res => res.json())
    .then(data => {
      if (data) {
        event.target.parentNode.style.display = "none";
      }
      console.log(data);
    })
  }
  return (
    <section className="container-fluid row">
    <Sidebar2></Sidebar2>
    <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>

    <table class="table">
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        {
          services.map(service => {
            return (

              <>

                <tbody>
                  <tr>
                    <td>{service.sName}</td>
                    <td>{service.price}</td>
                    <td><button onClick={()=> deleteProduct(event, service._id)}>delete</button></td>
                  </tr>

                </tbody>

              </>
            )
          })
        }


      </table>
      
    </div>
</section>
  );
};

export default ManageService;