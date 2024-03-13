import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router';
import './css/removeprod.css'
import Home from './home'
import Axios from 'axios';
const removeProd = () => {


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

  const handleRemove = async (e) => {
    e.preventDefault();
    console.log(`My removed data , ProductName = ${data.productName}, qty= ${data.qty}
    lastOrder= ${data.lastOrder}, data_id= ${data._id}`);

    if (
      data.pid !== "" &&
      data.productName !== "" &&
      data.lastOrder !== "" &&
      data.qty !== 0
    ) {
      if (data.pid.length === 3 && data.lastOrder >= "2000" && data.qty >= 1) {
        const updateResponse = await Axios.delete(
          `http://localhost:4000/api/v1/remove/${data._id}`
        );

        if (updateResponse.data) {
          window.alert("Product is removed");
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
      <div id="container">
        <form action="" id="form-group">
          <label htmlFor="">Product Id</label>

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
            disabled={true}
          />

          <label htmlFor="">Quantity</label>
          <input
            type="number"
            placeholder={data.qty}
            name="qty"
            disabled={true}
          />

          <label htmlFor="">Last Order</label>
          <input
            type="text"
            placeholder={data.lastOrder}
            name="lastOrder"
            disabled={true}
          />

          <button type="submit" onClick={handleRemove}>
            Remove
          </button>
        </form>
      </div>
    </>
  );
};

export default removeProd;
