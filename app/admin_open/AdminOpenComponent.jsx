import React from "react";
import { Box } from '@mui/material';


const AdminOpenComponent = () => {
   
   
    return (
        <div className="main">
            <nav
                className="navbar flex justify-between items-center py-3 px-4"
                style={{ backgroundColor: "#80808080;" }}
            >
                <div className="flex items-center">
                    <div className="college-logo w-20 h-20 border-2 border-black rounded-full mr-2"></div>
                    <span>College Name</span>
                </div>
                <div>
                    <a href="#">Logout</a>
                </div>
            </nav>

            <div className="p-4 flex  w-full">
             <Box className='flex md:flex-row sm:flex-row justify-center w-1/2 xs-flex-col'>
                <div className="w-1/2 flex items-center">
                    <h3 className="ml-2 mt-2 text-lg">(Faculity Name)</h3>
                </div>
                <div className="w-1/2 flex items-center">
                    <h3 className="ml-2 mt-2 text-lg ">(Club Name)</h3>
                </div>
            </Box>

            <Box className='flex md:flex-row sm:flex-row justify-center w-1/2 xs:flex-col'>
                <div className="w-1/2 flex items-center">
                    <h3 className="ml-2 mt-2 text-lg">(PIC Name)</h3>
                </div>
                <div className="w-1/2 flex items-center">
                    <h3 className="ml-2 mt-2 text-lg">(Date and time of request sent)</h3>
                </div>
                </Box>
                
               
            </div>
            <div className="line-separator w-full h-px bg-black"></div>
        </div>
    );
};

export default AdminOpenComponent;
