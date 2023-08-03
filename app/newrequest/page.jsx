"use client";

import React, { useState } from "react";
import "./newrequest.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { Box, Button, Typography } from "@mui/material";

const IntialState = {
  nameofevent: '',
  date: '',
  starttime: '',
  endtime: '',
  noofpeople: '',
  staffchoice: '',
  request: ''
}

function page() {
  const [collegename, setCollegename] = React.useState("");
  function Collegename() {
    if (window.innerWidth > 700) {
      setCollegename(
        "Indian Institue of Information and Technology design and Manufacturing, Kancheepuram"
      );
    } else {
      setCollegename("IIITDM, Kancheepuram");
    }
  }

  React.useEffect(() => {
    Collegename();
    addEventListener('resize', Collegename)
    return () => removeEventListener('resize', Collegename)
  }, []);


  const [form, setform] = useState(IntialState);


  const handlechange = (e) => {

    setform({
      ...form,
      [e.target.name]: e.target.value
    })
    console.log(form);
  }

  const submitform = async (e) => {
    e.preventDefault();
    console.log(form)
    const link = 'https://api.sheety.co/5d30ad2c5b720283d5479987e6348e9d/clubRequest1/sheet1'
    const params = {
      sheet1: form
    }
    // await axios.post(`${link}`,params);
    await fetch(`${link}`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  return (
    <div style={{ backgroundColor: "white" }} className="mb-10">
      <form>
        <div
          className="flex justify-between pb-3"
          style={{ backgroundColor: "#D9D9D9" }}
        >
          <div className="flex ml-5 w-full">
            <img src="iiitdm.webp" className="mt-5 flex flex-wrap" />
            <br />
            <Typography
              
              className="m-auto ml-5 mr-4"
              sx={{
                fontSize: "18px",
                display: { xs: "block", md: "flex", sm: "flex" },
              }}
            >
              {collegename}
            </Typography>
          </div>
          <button className="flex text-2xl mt-auto mb-auto mr-5">LogOut</button>
        </div>
        <Box className="flex justify-flex-start w-1/2 mt-10">
          <div className="text-2xl ml-5 mr-20">(Club Name)</div>
          <div className="text-2xl">(PIC name)</div>
        </Box>
        <hr
          style={{
            color: "black",
            backgroundColor: "black",
            height: "2px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        />

        <div className="">
          <div className="flex flex-col w-full">
            <p
              className="w-11/12 flex ml-auto mr-auto"
              style={{ fontSize: "22px" }}
            >
              Name of the event
          {/* <textarea className='namebox' name="nameofevent"  /> */}
            </p>
            <textarea
              className="w-11/12 h-12 mt-3 flex ml-auto mr-auto"
              style={{ backgroundColor: "#D9D9D9" }}
              name="nameofevent"
              onChange={handlechange}
            />
          </div>

          <div className="flex w-full mt-5 justify-evenly">
            <div className="w-11/12 flex">
              <div className="flex w-1/3">
                <p className="flex items-center" style={{ fontSize: "20px" }}>
                  Date
                </p>
              </div>

              <div className="flex w-1/3">
                <p style={{ fontSize: "20px" }}>Start Time</p>
              </div>

              <div className="flex w-1/3">
                <p style={{ fontSize: "20px" }}>End time</p>
              </div>
            </div>
          </div>

          <div className="flex w-full mt-3 justify-evenly">
            <div className="w-11/12 flex">
              <div className="flex w-1/3">
                <input
                onChange={handlechange}
                  type="date"
                  name="date"
                  className="h-12 w-5/6"
                  style={{ backgroundColor: "#D9D9D9" }}
                />
                <CalendarMonthIcon className="w-1/6 flex items-center h-12" />
              </div>

              <div className="flex w-1/3">
                <input
                onChange={handlechange}
                  type="time"
                  name="starttime"
                  className="h-12 w-5/6"
                  style={{ backgroundColor: "#D9D9D9" }}
                />
              </div>

              <div className="flex w-1/3">
                <input
                onChange={handlechange}
                  type="time"
                  name="endtime"
                  className="h-12 w-full"
                  style={{ backgroundColor: "#D9D9D9" }}
                />
              </div>
            </div>
          </div>

          <div className="flex w-full mt-5 justify-evenly">
            <div className="w-11/12 flex">
              <div className="flex w-1/2">
                <p className="flex items-center" style={{ fontSize: "20px" }}>
                  Number of people expecting
                </p>
              </div>

              <div className="flex w-1/2 ml-5">
                <p className="flex items-center" style={{ fontSize: "20px" }}>
                  Available halls(Dropdown)
                </p>
                <div className="new"></div>
              </div>
            </div>
          </div>

          <div className="flex w-full mt-3 justify-evenly">
            <div className="w-11/12 flex">
              <div className="flex w-1/2">
                <textarea
                onChange={handlechange}
                name="noofpeople"
                  className="h-12 w-5/6"
                  style={{ backgroundColor: "#D9D9D9" }}
                />
              </div>

              <div className="flex w-1/2">
                <textarea
                onChange={handlechange}
                name='staffchoice'
                  className="h-12 w-5/6"
                  style={{ backgroundColor: "#D9D9D9" }}
                />
                <ArrowDropDownCircleIcon
                  className="w-1/6 flex items-center h-12"
                  style={{ backgroundColor: "#D9D9D9" }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full mt-5">
            <p
              className="w-11/12 flex ml-auto mr-auto"
              style={{ fontSize: "22px" }}
            >
              Staff choice(if other that technical affairs club)
            </p>
            <textarea
              className="w-11/12 h-12 mt-3 flex ml-auto mr-auto"
              name='staffchoice'
              onChange={handlechange}
              style={{ backgroundColor: "#D9D9D9" }}
            />
          </div>

          <div className="flex flex-col w-full mt-5">
            <p
              className="w-11/12 flex ml-auto mr-auto"
              style={{ fontSize: "22px" }}
            >
              Request
            </p>
            <textarea
            onChange={handlechange}
            name="request"
              className="w-11/12 h-24 mt-3 flex ml-auto mr-auto"
              style={{ backgroundColor: "#D9D9D9" }}
            />
          </div>

          <div className="m-7 flex justify-center">
            <Button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-20 rounded-none"
              sx={{ width: { xs: "200px", sm: "250px", md: "450px" } }}
              onClick={submitform}
            >
              Submit Request
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default page;
