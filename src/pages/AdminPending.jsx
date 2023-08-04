"use client"
import React,{useState} from "react";
import AdminPendingComponent from "../components/AdminPendingComponent";

const IntialState = {
  nameofevent: '',
  date: '',
  starttime: '',
  endtime: '',
  noofpeople: '',
  staffchoice: '',
  request: ''
}

const AdminPending = () => {



  
  var datas = [
    {
      name: "name",
                  date: "date",
                  hall: "hall",
                  request: "request",
                  clubName: "Club Name 1",
                  PIC: "PIC 1",
    },
    {
      name: "name",
                  date: "date",
                  hall: "hall",
                  request: "request",
                  clubName: "Club Name 1",
                  PIC: "PIC 2",
    }
  ];
  const [form, setform] = useState(IntialState);


  const handlechange = (e) => {

    setform({
      ...form,
      [e.target.name]: e.target.value
    })
    console.log(form);
  }

  
    // const link = 'https://api.sheety.co/5d30ad2c5b720283d5479987e6348e9d/clubRequest1/sheet1'
    
  
  //   fetch(link)
  //   .then((response) => {
  //     response.json().then((data) => {
  //       let size = Object.keys(data.sheet1).length
  //       let au = data.sheet1
  //       // console.log(typeof(au),data.sheet1[0]['nameofevent'])

  //       for(let i=0;i<size;i++)
  //       {
  //         let name = au[i]['nameofevent']
  //         let date = au[i]['date']
  //         let hall = au[i]['noofpeople']
  //         let request = au[i]['request']
  //         // let clubName = au.sheet1[i]['']
  //         // let PIC = au.sheet1[i]
  //         datas.push({
  //           name: name,
  //           date: date,
  //           hall: hall,
  //           request: request,
  //           clubName: "Club Name 1",
  //           PIC: "PIC 1",
  //         })
  //       }
  //     });
  // });
    // console.log(datas)

  return <AdminPendingComponent data = {datas}/>;
};

export default AdminPending;
