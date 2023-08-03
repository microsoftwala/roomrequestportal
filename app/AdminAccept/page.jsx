import React from "react";
import AdminAcceptComponent from "./AdminAcceptComponent";

const AdminAccept = () => {
  const data = [
    {
      name: "Event Name 1",
      date: "Event Date 1",
      hall: "Event Hall 1",
      request: "Event Request 1",
      clubName: "Club Name 1",
      PIC: "PIC 1",
    },
    {
      name: "Event Name 2",
      date: "Event Date 2",
      hall: "Event Hall 2",
      request: "Event Request 2",
      clubName: "Club Name 2",
      PIC: "PIC 2",
    },
    {
      name: "Event Name 3",
      date: "Event Date 3",
      hall: "Event Hall 3",
      request: "Event Request 3",
      clubName: "Club Name 3",
      PIC: "PIC 3",
    },
  ];
  return <AdminAcceptComponent data={data} />;
};

export default AdminAccept;
