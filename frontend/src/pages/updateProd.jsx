import React, { useState, useEffect } from "react";
import "./css/update-removeprod.css";
import Axios from "axios";
import { useNavigate } from "react-router";
import Home from "./home"

const updateProd = () => {
  const [finalData, setFinalData] = useState([]);
  let selectedItem = "";
  let [data, setData] = useState({
    pid: "",
    productName: "",
    qty: 0,
    lastOrder: "",
  });

  const navigate =useNavigate();
  const onLoadData = async () => {
    const response = await Axios("http://localhost:4000/api/v1/products");
    setFinalData(response.data.productlist);
  };
  useEffect(() => {
    onLoadData();
  }, []);

  const handleDropdownChange = (event) => {
   
    selectedItem = event.target.value;
    
    for (let i = 0; i < finalData.length; i++) {
      if (selectedItem === finalData[i].pid) {
        setData(finalData[i]);
        console.log(`my final Data ${data}`);
        break;
      } else continue;
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(`My updated data , ProductName = ${data.productName}, qty= ${data.qty}
    lastOrder= ${data.lastOrder}, data_id= ${data._id}`);

    if (
      data.pid !== "" &&
      data.productName !== "" &&
      data.lastOrder !== "" &&
      data.qty !== 0
    ) {
      if (data.pid.length === 3 && data.lastOrder >= "2000" && data.qty >= 1) {
        const updateResponse = await Axios.put(
          `http://localhost:4000/api/v1/update/${data._id}`,
          data
        );

        if (updateResponse.data) {
          window.alert("Products are updated");
          navigate("/products");
        } else {
          window.alert("Oops Something went wrong");
        }
      } else {
        window.alert("Please enter valid data");
      }
    } else {
      window.alert("All Fields are mandatory");
    }
  };
  return (
    <>
    <Home/>
    <br />
      <div id="container">
        <form action="" id="form-group">
          <label htmlFor="">Product Id</label>

          {/* for dropdown */}
          {/* <Select options={finalData}></Select> */}

          <select className="selectDrop" onChange={handleDropdownChange}>
            {finalData.map((item) => (
              <option key={item}>{item.pid}</option>
            ))}
          </select>
          <label htmlFor="">Product Name</label>
          <input
            type="text"
            placeholder={data.productName}
            name="productName"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            
          />

          <label htmlFor="">Quantity</label>
          <input
            type="number"
            placeholder={data.qty}
            name="qty"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />

          <label htmlFor="">Last Order</label>
          <input
            type="text"
            placeholder={data.lastOrder}
            name="lastOrder"
            // value=""
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />

          <button type="submit" onClick={handleUpdate}>
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default updateProd;
