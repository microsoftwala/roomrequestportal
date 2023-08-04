import { Box } from '@mui/material';
import React from 'react'

const MainComponent = () => {
    return (
        <div className="bg-gray-300 w-11/12 flex flex-col justify-center ml-auto mr-auto mt-5">
            <div className='NameofEvent border border-black p-5 flex '>
                <span className='w-1/6 mr-3'>Name of the Event :</span>
                <input type='text' className='bg-gray-300 border border-black w-full'></input>
            </div>

            <div>
                <Box className='w-full mt-5' sx={{display:{xs:"block",sm:"flex",md:"flex"}}}>
                    <Box className='flex' sx={{ flexDirection:{xs:"row",sm:"column",md:"column"},width:{xs:"100%",sm:"33.3%",md:"33.3%"} }}>
                        <span className='ml-3 flex items-center'>Date of the event</span>
                        <input type='text' className='bg-gray-300 border border-black rounded-2xl mt-3 w-2/3 flex justify-center ml-3'></input>
                    </Box>

                    <Box className='flex' sx={{ flexDirection:{xs:"row",sm:"column",md:"column"},width:{xs:"100%",sm:"33.3%",md:"33.3%"} }}>
                        <span className='ml-3 flex items-center'>Time of the event</span>
                        <input type='text' className='bg-gray-300 border border-black rounded-2xl mt-3 w-2/3 flex justify-center ml-3'></input>
                    </Box>

                    <Box className='flex' sx={{ flexDirection:{xs:"row",sm:"column",md:"column"},width:{xs:"100%",sm:"33.3%",md:"33.3%"} }}>
                        <span className='ml-3 flex items-center'>Event Room</span>
                        <input type='text' className='bg-gray-300 border border-black rounded-2xl mt-3 w-2/3 flex justify-center ml-3'></input>
                    </Box>

                </Box>
                <Box className='flex w-full flex-col mt-5' >
                        <span className='ml-3 flex items-center '>Number of People Attending</span>
                        <input type='text' className='bg-gray-300 border border-black rounded-2xl mt-3 w-2/3 flex justify-center ml-3'></input>
                    </Box>
            </div>
            <div className='flex flex-col m-6'>
            <span>Request</span>
                        <input type='text' className='bg-gray-300 border border-black  mt-3 w-fit-content h-20'></input>
            </div>
        </div>
    )
}

export default MainComponent;