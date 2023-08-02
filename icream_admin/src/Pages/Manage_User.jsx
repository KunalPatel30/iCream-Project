import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import Footer from "../Component/Footer";


function Manage_User() {

  useEffect(() => {
    fetch();
  }, []);

  const [alldata, setAlldata] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/user`);
    setAlldata(res.data);
  }

  const ondelete= async(id)=>{
    const res = await axios.delete(`http://localhost:3000/user/${id}`);
    if(res.status==200)
    {
      toast.success("User Delete Success");
      fetch();
    }
  }

  const onstatuschanger = async(id) => {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    if(res.data.status == "Block")
    {
      const res = await axios.patch(`http://localhost:3000/user/${id}`,{status:"Unblock"});
      if(res.status == 200)
      {
        toast.success("User Unblock Success");
        fetch();
      }
    }
    else
    {
      const res = await axios.patch(`http://localhost:3000/user/${id}`,{status:"Block"});
      if(res.status == 200)
      {
        toast.success("User Block Success");
        fetch();
      }
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
                <h3 className="page-title">User Data Tables</h3>
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
                      <h4 className="card-title">User Data</h4>
                      <table className="table table-hover">
                        <thead>
                          <tr style={{color:"#9A55FF"}}>
                            <th style={{fontSize:"18px"}}>id</th>
                            <th style={{fontSize:"18px"}}>Name</th>
                            <th style={{fontSize:"18px"}}>Email</th>
                            <th style={{fontSize:"18px"}}>Mobile</th>
                            <th style={{fontSize:"18px"}}><i className=" fa fa-edit"/> Status</th>
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
                                  <td style={{fontSize:"16px"}}>{item.mobile}</td>
                                  {/* <td style={{fontSize:"16px"}}>{item.status}</td> */}
                                  <td><button onClick={()=>{onstatuschanger(item.id)}} className="btn btn-danger btn-xs"><i className="fa fa-user"/>{" "}{item.status}</button></td>
                                  <td><button onClick={()=>{ondelete(item.id)}} className="btn btn-danger btn-xs"><i className="fa fa-trash-o"/></button></td>
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

export default Manage_User;
