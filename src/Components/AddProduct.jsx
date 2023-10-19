import React, { useState } from "react";
import "./add-product.css";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    Category: "",
    Quantity: "",
    Price: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

const handleSubmit = (event) => {
    event.preventDefault();
    alert(
        `Name: ${formData.Name}, 
         Description: ${formData.Description},
         Category: ${formData.Category},
         Quantity: ${formData.Quantity}, 
         Price: ${formData.Price}`
    );
    console.log('===========ADD PRODUCT DATA==========');
    console.log('Name: ' + formData.Name);
    console.log('Description: ' + formData.Description);
    console.log('Category: ' + formData.Category);
    console.log('Quantity: ' + formData.Quantity);
    console.log('Price: ' + formData.Price);
    console.log('====================================');
};


  return (
    <form onSubmit={handleSubmit} className="add-product">
      <h1 className="add-product__title">Add Product</h1>
      <label className="add-product__text" htmlFor="Name">
        Name:
      </label>
      <input
        type="text"
        id="Name"
        className="add-product__input"
        name="Name"
        value={formData.Name}
        onChange={handleChange}
      />
         <br/>
      <label className="add-product__text" htmlFor="Description">
        Description:
      </label>
      <input
        type="text"
        id="Description"
        className="add-product__input"
        name="Description"
        value={formData.Description}
        onChange={handleChange}
      />
         <br/>
      <label className="add-product__text" htmlFor="Category">
        Category:
      </label>
      <input
        type="text"
        id="Category"
        className="add-product__input"
        name="Category"
        value={formData.Category}
        onChange={handleChange}
      />
         <br/>
      <label className="add-product__text" htmlFor="Quantity">
        Quantity:
      </label>
      <input
        type="number"
        id="Quantity"
        className="add-product__input"
        name="Quantity"
        value={formData.Quantity}
        onChange={handleChange}
      />
        <br/>
      <label className="add-product__text" htmlFor="Price">
        Price:
      </label>
      <input
        type="number"
        id="Price"
        className="add-product__input"
        name="Price"
        value={formData.Price}
        onChange={handleChange}
      />
         <br/>
      <button className="add-product__button" type="submit">
        Submit
      </button>
    </form>
  );
}
