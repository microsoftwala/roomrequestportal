import React from "react";
import Header from "./Header";
import Card from "./Card";

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
      {" "}
      <Header clubName="System Coding Club" picName="Priyanka Kokil" />{" "}
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
