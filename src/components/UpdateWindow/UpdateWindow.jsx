import React, { useContext } from "react";
import style from "./UpdateWindow.module.css";
import { Context } from "../../context/Context";

function PopUp() {
  const {
    setUpdateDetailsPopup,
    productDetails,
    setProductDetails,products, setProducts
  } = useContext(Context);

  // handling the change in the input fields and storing in the state to update the data

  function handleChange(e) {
    const { id, value } = e.target;
    setProductDetails((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  // handling the update button and updating the data in the table and showing the alert message when the data is updated successfully and also printing updated data in the console .
  
  function handleUpdate(id) {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productDetails),
    })
      .then((res) => res.json())
      .then((updatedProduct) => {
        setProducts(products.map((product) => (product.id === id ? updatedProduct : product)));
        setUpdateDetailsPopup(false);
        alert("Product Updated Successfully");
        console.log(updatedProduct);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  }

  return (
    <div className={style.container}>
      <div className={style.box}>
        <h4
          className={style.closeBtn}
          onClick={() => setUpdateDetailsPopup(false)}
        >
          &#10008;
        </h4>
        <div className={style.detailsContainer}>
          <h1>Update Product Details</h1>
          <div className={style.inputContainer}>
            <div className={style.inputFilds}>
              <input
                value={productDetails.title}
                type="text"
                placeholder="Product Title"
                id="title"
                onChange={handleChange}
              />
            </div>
            <div className={style.inputFilds}>
              <textarea
                value={productDetails.description}
                type="text"
                placeholder="Product Description"
                id="description"
                onChange={handleChange}
              />
            </div>
            <div className={style.inputFilds}>
              <input
                value={productDetails.price}
                type="text"
                placeholder="Product Price"
                id="price"
                onChange={handleChange}
              />
            </div>
            <div className={style.inputFilds}>
              <input
                value={productDetails.category}
                type="text"
                placeholder="Product Category"
                id="category"
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                onClick={() => handleUpdate(productDetails.id)}
                className={style.btn}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
