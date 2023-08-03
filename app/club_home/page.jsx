import React from "react";
import Header from "./Header";
import Card from "./Card";
import ReqBtn from "./Reqbtn";
import Link from 'next/link'
import FacName from "./FacName";

const data = [
    {
        nameOfTheEvent: "name1",
        date: new Date(),
        hallBooked: "H01",
        request:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores provident dignissimos eaque quidem consectetur voluptas exercitationem rerum dolorum. Expedita sint beatae itaque reprehenderit eum dolorum in eos sit magni.",
        status: "Pending",
    },
    {
        nameOfTheEvent: "name2",
        date: new Date(),
        hallBooked: "H02",
        request:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores provident dignissimos eaque quidem consectetur voluptas exercitationem rerum dolorum. Expedita sint beatae itaque reprehenderit eum dolorum in eos sit magni.",
        status: "Pending",
    },
    {
        nameOfTheEvent: "name3",
        date: new Date(),
        hallBooked: "H03",
        request:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores provident dignissimos eaque quidem consectetur voluptas exercitationem rerum dolorum. Expedita sint beatae itaque reprehenderit eum dolorum in eos sit magni.",
        status: "Approved",
    },
];

export const metadata = {
    title: "Previously requested",
    description: "Find all your previous room requests here",
};

const page = () => {
    return (
        <>
            <nav
                className="navbar flex justify-between items-center py-3 px-4"
                >
                <div className="flex items-center">
                    <div className="college-logo w-20 h-20 border-2 border-black rounded-full mr-2"></div>
                    <span>College Name</span>
                </div>
                <div>
                    <a href="#">Logout</a>
                </div>
            </nav>
            {" "}
            <div className='bg-white divide-black'>
        <FacName />
        <hr className='bg-black' />
      </div>
      <div className='bg-white divide-black'>
        {/* <ReqBtn/> */}

        <div className="flex flex-wrap justify-center sm:justify-between max-w-7xl mx-auto p-6 lg:px-8">
                <div className='bg-white py-2.5 mb-5'>
                <a href="../newrequest" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-20 rounded-none" style={{width:"50%"}}>
                  New Requests
                </a>
                </div>
                
                <div className='bg-white py-2.5'>
                <Link href="../club_prevrequests" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-20 rounded-none" style={{width:"50%"}}>
                    Previous Requests
                </Link>
                </div>
            </div>


        <hr className='bg-black' />
      </div>
            <div className="px-4 pt-4 pb-12 sm:px-6 md:px-8">
                <h2 className="text-3xl text-club-previous-requests-header-text dark:text-dark-club-previous-requests-header-text">
                    Previous Hall Bookings
                </h2>
               
                <ul className="mt-4 space-y-4">
                    {data.map((item, index) => (
                        <Card key={index} {...item} />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default page;
