import React ,{useState, useEffect} from "react";
import { useParams } from "react-router";
                                   
import "./css/updateprod.css";
import Axios from "axios";

import Select from "react-select";
// import {finalData} from './home'
import error from "./error";

const updateProd = () => {
  const params = useParams();

console.log(params.id)  

  return (
    <>
      <h1>Update your products in the inventory</h1>
      <div id="container">
        <form action="" id="form-group">
          <label htmlFor="">Product Name</label>

          {/* for dropdown */}
          {/* <Select options={finalData}></Select> */}
{/* 
          <select>
            
            {finalData.map((item) => (
              <option key={item}>{item.productName}</option>
            ))}
          
          </select> */}

          <label htmlFor="">Product Id</label>
          <input
            type="text"
            // placeholder={finaldata.ProductName}
            name="productName"
            // value={finaldata.ProductName}
            required
          />

          <label htmlFor="">Quantity</label>
          <input type="number" placeholder="100" name="qty" />

          <label htmlFor="">Last Order</label>
          <input type="text" placeholder="2020" name="lastOrder" />

          {/* <button type="submit" onClick={handleSubmit}> */}
          <button>Update</button>
        </form>
      </div>
    </>
  );
};

export default updateProd;
