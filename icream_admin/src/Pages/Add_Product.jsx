import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import Footer from "../Component/Footer";

function Add_Product() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    image: "",
    name: "",
    description: "",
    price: "",
  });

  const onchange = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
  };

  function validate() {
    var result = true;
    if (formvalue.image == "" || formvalue.image == null) {
      result = false;
      toast.error("Image Field required");
    }
    if (formvalue.name == "" || formvalue.name == null) {
      result = false;
      toast.error("Name Field required");
    }
    if (formvalue.description == "" || formvalue.description == null) {
      result = false;
      toast.error("Description Field required");
    }
    if (formvalue.price == "" || formvalue.price == null) {
      result = false;
      toast.error("Price Field required");
    }
    return result;
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const res = await axios.post(`http://localhost:3000/product`, formvalue);
      // console.log(res);
      if (res.status == 201) {
        toast.success("Add Product Success");
        setFormvalue({...formvalue,image: "",name: "",description: "",price: "",});
      }
    }
  };

  return (
    <>
      <div className="container-scroller">
        <Header />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="page-header">
                <h3 className="page-title">Forms</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Forms</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Basic elements</li>
                  </ol>
                </nav>
              </div>
              <div className="row">
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Product</h4>
                      <p className="card-description">Add Product</p>
                      <form className="forms-sample ">
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Product Image</label>
                          <input type="url" className="form-control" value={formvalue.image} name="image" onChange={onchange} id="exampleInputUsername1" placeholder="Product Image" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Product Name</label>
                          <input type="text" className="form-control" value={formvalue.name} name="name" onChange={onchange} id="exampleInputEmail1" placeholder="Product Name" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Product Description</label>
                          <input type="text" className="form-control" value={formvalue.description} name="description" onChange={onchange} id="exampleInputPassword1" placeholder="Product Description" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputConfirmPassword1">Product Price</label>
                          <input type="number" className="form-control" value={formvalue.price} name="price" onChange={onchange} id="exampleInputConfirmPassword1" placeholder="Product Price" />
                        </div>
                        {/* <div className="form-check form-check-flat form-check-primary">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" />
                            Remember me
                          </label>
                        </div> */}
                        <button type="submit" onClick={onsubmit} className="btn btn-gradient-primary mr-2">Submit</button>
                        <button className="btn btn-light">Cancel</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Add_Product;
