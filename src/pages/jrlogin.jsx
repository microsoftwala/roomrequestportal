// "use client"
import { Box, Typography } from "@mui/material";
import React from "react";
// import Header from "./header";
import Link from "next/link";
// import Footer from "./footer";
import JRLoginFooter from "../components/jrLoginFooter";
import JRLoginHeader from "../components/jrLoginHeader";
export default function Login(){

    const [login,setLogin] = React.useState({
        email:"",
        password:""
    })
    var name,value;
    const Handlelogininput = (e)=>{
        name = e.target.name
        value = e.target.value
        console.log(name,value)
        setLogin({...login, [name]:value})
    }

    const Postdata = async(e)=>
    {
        e.preventDefault()
        const{ email,password }=login
        console.log(email,password)
        const link = 'https://api.sheety.co/5d30ad2c5b720283d5479987e6348e9d/jrLogin/sheet1'
        const params = {
          sheet1: login
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

    return(
        <Box>
        <JRLoginHeader />
        <Box sx={{ mt:"5%",width:{xs:"75%",sm:"60%",md:"50%"},justifyContent:"center",background:"#D9D9D9",ml:"auto",mr:"auto",pb:"2%",mb:"5%"}}>
            <Typography sx={{ fontSize:"40px",display:"flex",justifyContent:"center",pt:"20px" }}>Login</Typography>
            <br/>
            <form onSubmit={Postdata}>
                <label className="pl-5 text-2xl">Username</label>
                <br />
                <input type="email" required className="bg-transparent hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-black hover:border-transparent rounded-none ml-5 w-5/6" name="email" onChange={Handlelogininput}/>
                <br />
                <label className="pl-5 text-2xl">Password</label>
                <br />
                <input type="text" required className="bg-transparent hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-black hover:border-transparent rounded-none ml-5 w-5/6" name="password" onChange={Handlelogininput}/>
                <br/>
                <button type="submit" className="bg-transparent hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-black hover:border-transparent rounded-none flex justify-center mr-auto ml-auto mt-10">Login button</button>
            </form>
            <Typography className="flex justify-center m-auto text-2xl">or</Typography>
            <button className="bg-transparent hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-black hover:border-transparent rounded-none flex justify-center ml-auto mr-auto ">Sign in through Google</button>
            <Box sx={{ml:{xs:"50%",sm:"60%",md:"70%"},fontSize:"14px",textDecoration:"underlined",mt:"5%"}}><Link href="" >Forgotten Password ?</Link></Box>
        </Box>
        <JRLoginFooter />
        </Box>
    )
}