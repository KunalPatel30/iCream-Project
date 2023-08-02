import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from "axios"
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import Footer from "../Component/Footer";

function Manage_Contact() {

  useEffect(() => {
    fetch();
  },[]);

  const [alldata,setAlldata] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/contact`);
    setAlldata(res.data);
  }

  const ondelete = async(id)=> {
    const res = await axios.delete(`http://localhost:3000/contact/${id}`);
    if(res.status==200)
    {
      toast.success("Contact Delete Success");
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
                <h3 className="page-title">Contact Data Tables</h3>
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
                      <h4 className="card-title">Contact Data</h4>
                      <table className="table table-hover">
                        <thead>
                          <tr style={{color:"#9A55FF"}}>
                            <th style={{fontSize:"18px"}}>id</th>
                            <th style={{fontSize:"18px"}}> Name</th>
                            <th style={{fontSize:"18px"}}> Email</th>
                            <th style={{fontSize:"18px"}}> Subject</th>
                            <th style={{fontSize:"18px"}}> Message</th>
                            <th style={{fontSize:"18px"}}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            alldata.map((item, index, ent) => {
                              return (
                                <tr>
                                  <td style={{fontSize:"16px"}}>{item.id}</td>
                                  <td style={{fontSize:"16px"}}>{item.name}</td>
                                  <td style={{fontSize:"16px"}}>{item.email}</td>
                                  <td style={{fontSize:"16px"}}>{item.subject}</td>
                                  <td style={{fontSize:"16px"}}>{item.message}</td>
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
  );
}

export default Manage_Contact;
