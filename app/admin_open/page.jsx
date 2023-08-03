import React from "react";
import AdminOpenComponent from "./AdminOpenComponent";
import ReqBtn from "./ReqBtn";
import MainComponent from "./MainComponent";
import Footer from "./Footer";

const AdminOpen = () => {
  
  var datas

  return <>
  <AdminOpenComponent />
  <MainComponent data={datas}/>
  <ReqBtn />
  <Footer />
  </>
};

export default AdminOpen;
