import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/home.css";
import Axios from "axios";
import UpdateProd from "./updateProd";
// import {type} from '../App'

const home = () => {
  // let id = "fsofsdiofnoi8w42782";

  const navigate = useNavigate();

  const navigateToAdd = () => {
    navigate("/new");
  };

  const navigateToUpdate = ( ) => {
    navigate(`/update`);
  };

  const navigateToRemove = () => {
    navigate(`/remove`);
    
  };
  const [finalData, setFinalData] = useState([]);

  async function onLoadData() {
    const response = await Axios("http://localhost:3000/api/v1/products");
    setFinalData(response.data.productlist);
  }

  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <>
      <h1>Inventory Management</h1>
      <br />
      <br />
      <div id="actionContainer">
        <button onClick={navigateToAdd}>Add product</button>
        <button onClick={navigateToUpdate}>Update Product</button>
        <button onClick={navigateToRemove}>Remove product</button> 
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Product id</th>
              <th>Product Name</th>
              <th>Quatity</th>
              <th>Last Order</th>
          
            </tr>
          </thead>
          <tbody>
            {finalData.map((item, index) => (
              <tr key={index}>
                <td>{item.pid}</td>
                <td>{item.productName}</td>
                <td>{item.qty}</td>
                <td>{item.lastOrder}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default home;
