import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "./header";
import Link from "next/link";
import Footer from "./footer";

export default function Portal(){
    return(
        <Box sx={{ heigth:"100%"}}>
        <Header />
        <Box sx={{ mt:"5%",width:{xs:"75%",sm:"60%",md:"50%"},justifyContent:"center",background:"#D9D9D9",ml:"auto",mr:"auto",pb:"2%",mb:"5%"}}>
            <Typography sx={{ fontSize:"40px",display:"flex",justifyContent:"center",pt:"20px",color:"black" }}>Welcome</Typography>
            <br/>
            <Link href="../club_login" className="bg-transparent hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-black hover:border-transparent rounded-none flex justify-center mr-auto ml-auto mt-2 w-5/6 h-16 mb-5 items-center">Club Login</Link>
            <Link href="../admin_login" className="bg-transparent hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-black hover:border-transparent rounded-none flex justify-center ml-auto mr-auto  w-5/6 h-16 mb-5 items-center">Admin Login</Link>
            <Link href = "../jrlogin" className="bg-transparent hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-black hover:border-transparent rounded-none flex justify-center ml-auto mr-auto w-5/6 h-16 mb-5 items-center">JR Login</Link>
        </Box>
        <Footer />
        </Box>
    )
}