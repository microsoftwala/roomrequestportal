import React from "react";
import clsx from "clsx";

const Card = ({ nameOfTheEvent, date, hallBooked, request, status }) => {
  return (
    <li className="flex flex-col py-4 rounded-md shadow-md bg-club_prevrequests-card-bg text-club_prevrequests-card-text sm:flex-row">
      <div className="px-4 py-2 space-y-2 sm:px-6 md:px-8 sm:w-4/5">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <h3 className="text-sm font-medium uppercase">Name of the Event:</h3>{" "}
          <p className="text-lg sm:ml-4">{nameOfTheEvent}</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <h3 className="text-sm font-medium uppercase">Date of the Event:</h3>{" "}
          <p className="text-lg sm:ml-4">{date.toDateString()}</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <h3 className="text-sm font-medium uppercase">Hall Booked:</h3>{" "}
          <p className="text-lg sm:ml-4">{hallBooked}</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline">
          <h3 className="text-sm font-medium uppercase">Request:</h3>{" "}
          <p className="text-lg sm:ml-4">{request}</p>
        </div>
      </div>
      <div className="flex items-end px-4 pb-4">
        <div className="flex items-center">
          <h3 className="text-sm font-medium uppercase">Status:</h3>{" "}
          <p
            className={clsx(
              "ml-4 text-lg",
              status === "Pending" && "text-yellow-800",
              status === "Approved" && "text-green-600"
            )}
          >
            {status}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Card;
