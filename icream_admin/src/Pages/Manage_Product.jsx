import React,{ useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from "axios"
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import Footer from "../Component/Footer";

function Manage_Product() {

    useEffect(() => {
        fetch();
    },[]);

    const [alldata,setAlldata] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/product`);
        setAlldata(res.data);
      }
    
      const ondelete= async(id)=>{
        const res = await axios.delete(`http://localhost:3000/product/${id}`);
        if(res.status==200)
        {
          toast.success("Product Remove Success");
          fetch();
        }
      }
      

  return (
    <>
      <div className="container-scroller">
        <Header />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="page-header">
                <h3 className="page-title">Product Data Tables</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Tables</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Data tables</li>
                  </ol>
                </nav>
              </div>
              <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Product Data</h4>
                      <table className="table table-hover">
                        <thead>
                          <tr style={{color:"#9A55FF"}}>
                            <th style={{fontSize:"18px"}}>id</th>
                            <th style={{fontSize:"18px"}}>Image</th>
                            <th style={{fontSize:"18px"}}>Name</th>
                            <th style={{fontSize:"18px"}}>Description</th>
                            <th style={{fontSize:"18px"}}>Price</th>
                            <th style={{fontSize:"18px"}}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            alldata.map((item, index, ent) => {
                              return (
                                <tr>
                                    <td style={{fontSize:"16px"}}>{item.id}</td>
                                    <td><img src={item.image} alt="no" style={{width:"50px", height:"50px", textAlign:'center'}}/></td>
                                    <td style={{fontSize:"16px"}}>{item.name}</td>
                                    <td style={{fontSize:"16px"}}>{item.description}</td>
                                    <td style={{fontSize:"16px"}}>{item.price}</td>
                                    <td>
                                        <button onClick={()=>ondelete(item.id)} className="btn btn-danger btn-sm"><i className="fa fa-trash-o"/></button>
                                    </td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </table>
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
  )
}

export default Manage_Product