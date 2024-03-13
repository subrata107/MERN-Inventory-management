import React from "react";
import { useNavigate } from "react-router";

const home = () => {
  const navigate = useNavigate();

  const NavigateToGet = () => navigate("/products");

  const navigateToAdd = () => navigate("/new");

  const navigateToUpdate = () => navigate(`/update`);

  const navigateToRemove = () => navigate(`/remove`);

  return (
    <>
      <h1>Inventory Management</h1>
      <br />
      <br />
      <div id="actionContainer">
        <button onClick={NavigateToGet}>Your Products</button>
        <button onClick={navigateToAdd}>Add product</button>
        <button onClick={navigateToUpdate}>Update Product</button>
        <button onClick={navigateToRemove}>Remove product</button>
      </div>
    </>
  );
};

export default home;
