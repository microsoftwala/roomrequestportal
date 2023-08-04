import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import iiitdmLogo from "../../public/iiitdm.webp"

export default function PortalLandingHeader(){
    return(
        <Box sx={{display:"flex",mt:"30px",height:"120px"}}>
             <Box sx={{ borderRadius:"50%" ,width:"130px" ,ml:"2%",display:"flex",flexWrap:"wrap",mr:"2%",backgroundColor:"#D9D9D9"  }} className="flex justify-center pt-2 pb-2">
            <Image
            src={iiitdmLogo}
            alt="IIITDM Logo"
            />
            </Box>
            <Box className="w-5/6 text-club-previous-requests-header-text mr-10 ml-10 flex justify-center p-10" style={{ backgroundColor:"#D9D9D9" }}>
                <h1 className="text-4xl">College name</h1>
            </Box>
        </Box>
    )
}