import React from "react";
import AdminOpenComponent from "../components/AdminOpenComponent";
import ReqBtn from "../components/ReqBtn";
import MainComponent from "../components/MainComponent";
// import AdminOpenFooter from "../app/admin_open/page";
import AdminOpenFooter from "../components/AdminOpenFooter.jsx";
// import AdminOpenComponent from "./AdminOpenComponent";
// import ReqBtn from "./ReqBtn";
// import MainComponent from "./MainComponent";
// import Footer from "./Footer";

const AdminOpen = () => {
  
  var datas

  return <>
  <AdminOpenComponent />
  <MainComponent data={datas}/>
  <ReqBtn />
  <AdminOpenFooter />
  </>
};

export default AdminOpen;
