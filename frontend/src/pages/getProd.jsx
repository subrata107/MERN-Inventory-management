import React, { useEffect, useState } from "react";
import "./css/getprod.css";
import Axios from "axios";
import Home from "./home"

const getProd = () => {
  const [finalData, setFinalData] = useState([]);

  const onLoadData = async () => {
    const response = await Axios("http://localhost:4000/api/v1/products");
    setFinalData(response.data.productlist);
  };
  useEffect(() => {
    onLoadData();
  }, []);
  return (
    <>
    <Home/>
    {/* <h1>Your Products</h1> */}
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

export default getProd;
