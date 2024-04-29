import React, { useContext, useEffect, useState } from "react";
import style from "./Products.module.css";
import { Context } from "../../context/Context";
import PopUp from "../PopUp/PopUp";
import UpdateWindow from "../UpdateWindow/UpdateWindow";

function Products() {
  const {
    products,
    setProducts,
    showPopUp,
    setShowPopUp,
    setProductDetails,
    updateDetailsPopup,
    setUpdateDetailsPopup,
    searchQuery,
    setSearchQuery,
    categoryFilter,
    setCategoryFilter,
    titleFilter,
    setTitleFilter
  } = useContext(Context);

  // logic to show the popup window when view button is clicked
  function handleViewClick(clickedId) {
    setShowPopUp(true);
    setProductDetails(clickedId);
  }

  // fetching the data from the api and storing in the state to show the data in the table
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // handling the delete button and deleting the data from the table and showing the alert message

  function handleDelete(id) {
    const newProducts = products.filter((product) => product.id !== id.id);
    setProducts(newProducts);
    alert(id.title + "\n Is Deleted Successfully");
  }

  // handling the update button and showing the popup window with the data of the clicked row and updating the data in the table when the update button is clicked and showing the alert message when the data is updated successfully .

  function handleUpdate(product) {
    setUpdateDetailsPopup(true);
    setProductDetails(product);
  }

  // getting the unique categories from the data and storing in the state to show in the dropdown.

  const categories = [...new Set(products.map((product) => product.category))];

  // handling the category dropdown and filtering the data based on the category and title and storing in the state to show in the table.

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
  };

  // filtering the data based on the category and title and showing in the table.

  const filteredProducts = products.filter((product) => {
    if (categoryFilter && titleFilter) {
      return (
        product.category.toLowerCase() === categoryFilter.toLowerCase() &&
        product.title.toLowerCase().includes(titleFilter.toLowerCase())
      );
    } else if (categoryFilter) {
      return product.category.toLowerCase() === categoryFilter.toLowerCase();
    } else if (titleFilter) {
      return product.title.toLowerCase().includes(titleFilter.toLowerCase());
    } else {
      return true;
    }
  });
  return (
    <>
      <div className={style.productContainer}>
        <h1>Producta Table</h1>
        <div className={style.inputContainer}>
          <div className={style.inputFilds}>
            <input type="text" placeholder="Find Products"  value={titleFilter}
              onChange={handleTitleChange} />
          </div>
        </div>
        <div className={style.inputContainer}>
          <div className={style.inputFilds}>
          <select value={categoryFilter} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          </div>
        </div>
        <div className={style.tables}>
          {filteredProducts.length > 0 && (
            <table className="table table-bordered">
              <tr>
                <th> Product Title</th>
                <th> Product Price</th>
                <th> Product Description</th>
                <th> Product Category</th>
                <th> Product Action</th>
              </tr>
              {filteredProducts.map((product) => {
                return (
                  <tr key={product.id}>
                    <td style={{ minWidth: "200px", padding: "20px 0" }}>
                      {product.title.slice(0, 15)}...
                    </td>
                    <td style={{ minWidth: "100px" }}>${product.price}</td>
                    <td style={{ minWidth: "300px" }}>
                      {product.description.slice(0, 50)}...
                    </td>
                    <td style={{ minWidth: "200px" }}>{product.category}</td>
                    <td style={{ minWidth: "200px" }}>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleViewClick(product)}
                      >
                        View
                      </button>
                      <button
                        className="btn btn-info"
                        onClick={() => handleUpdate(product)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(product)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          )}
        </div>
      </div>
      {showPopUp && <PopUp />}
      {updateDetailsPopup && <UpdateWindow />}
    </>
  );
}

export default Products;
