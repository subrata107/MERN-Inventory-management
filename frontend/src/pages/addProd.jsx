import { React, useState } from "react";
import "./css/addprod.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const addProd = () => {
  const [data, setdata] = useState({
    pid: "",
    productName: "",
    qty: 0,
    lastOrder: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(data.pid, data.productName, data.lastOrder, data.qty);

    if (
      data.pid !== "" &&
      data.productName !== "" &&
      data.lastOrder !== "" &&
      data.qty !== 0
    ) {
          if (data.pid.length === 3 && data.lastOrder >= "2000" && data.qty >= 1) {
            const addResponse = await axios.post(
              "http://localhost:3000/api/v1/new",
              data
            );

            if (addResponse.data) {
              window.alert("Products are added");
              navigate("/");
            } else {
              window.alert("Oops Something went wrong");
            }
          }
          else{
            window.alert("Please enter valid data")
          }
    } 
    else {
      window.alert("All Fields are mandatory");
    }
  };

  return (
    <>
      <h1>Add your products in the inventory</h1>
      <div id="container">
        <form action="submit" id="form-group">
          <label htmlFor="">Product Id</label>
          <input
            type="text"
            placeholder="C01"
            pattern="[A-Z]{1}[0-9]{1}[1-9]{1}"
            title="its must a 3 alphanumeric code"
            name="pid"
            value={data.pid}
            required
            onChange={(e) =>
              setdata({ ...data, [e.target.name]: e.target.value })
            }
          />
          <label htmlFor="">Product Name</label>
          <input
            type="text"
            placeholder="Car"
            pattern="[A-Z]{1}[a-z]{2-9}"
            title="first letter must be Caps followed by alphabets with max 10 letters "
            name="productName"
            value={data.productName}
            required
            onChange={(e) =>
              setdata({ ...data, [e.target.name]: e.target.value })
            }
          />

          <label htmlFor="">Quantity</label>
          <input
            type="number"
            placeholder="100"
            max={999}
            name="qty"
            value={data.qty}
            required
            onChange={(e) =>
              setdata({ ...data, [e.target.name]: e.target.value })
            }
            title="Quantity >30 & <999"
          />

          <label htmlFor="">Last Order</label>
          <input
            type="text"
            placeholder="2020"
            pattern="[2]{1}[0]{1}[0-2]{1}[0-9]{1}"
            title="Year must be greater than 1999 and less than 2029"
            name="lastOrder"
            value={data.lastOrder}
            required
            onChange={(e) =>
              setdata({ ...data, [e.target.name]: e.target.value })
            }
          />

          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default addProd;
