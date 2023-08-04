// "use client"
import { Box } from "@mui/material";
import React,{ useState } from "react";
import Image from "next/image";
import iiitdmLogo from "../../public/iiitdm.webp"

export default function ClubLoginHeader(){
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
    return(
        <Box sx={{display:"flex",mt:"30px",height:"120px"}}>
            <Box sx={{ borderRadius:"50%" ,width:"130px" ,ml:"2%",flexWrap:"wrap",mr:"2%", display:"block"  }} className="flex justify-center pt-2 pb-2">
            <Image
            src={iiitdmLogo}
            alt="IIITDM Logo"
            />
            </Box>
            <Box className="w-5/6 text-club-previous-requests-header-text mr-10 ml-10 flex justify-center p-10 items-center" sx={{ backgroundColor:"#D9D9D9" }}>
                <h1 style={{ fontSize:"20px"}}>{collegename}</h1>
            </Box>
        </Box>
    )
}