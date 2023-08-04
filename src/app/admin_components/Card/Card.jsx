import React from 'react'

const Card = ({ nameOfTheEvent, date, hallBooked, request }) => {
  return (
    <div className="bg-gray mx-auto flex max-w-7xl  items-center justify-between p-3 lg:px-8" >
      <li className="flex flex-col py-4 w-full rounded-md shadow-md bg-gray sm:flex-row">
        <div className="px-4 py-2 space-y-2 sm:px-6 md:px-8 sm:w-4/5">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <h3 className="text-md font-bold font-medium ">Name of the Event:</h3>{" "}
            <p className="text-md sm:ml-4">{nameOfTheEvent}</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <h3 className="text-md font-bold font-medium">Date of the Event:</h3>{" "}
            <p className="text-md sm:ml-4">{date.toLocaleDateString()}</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <h3 className="text-md font-bold font-medium ">Hall:</h3>{" "}
            <p className="text-md sm:ml-4">{hallBooked}</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline">
            <h3 className="text-md font-medium font-bold">Request:</h3>{" "}
            <p className="text-md sm:ml-4">{request}</p>
          </div>
        </div>
        <div className="flex items-end sm:itens-center px-4 pb-2">
          <div className="flex items-center">
            <div className='px-4'>
              <button href="" className="bg-transparent hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-black hover:border-transparent rounded-none">
                Open
              </button>
            </div>
            <div className='px-4'>
              <button href="" className="bg-transparent hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-black hover:border-transparent rounded-none">
                Accept
              </button>
            </div>
            <div className='px-4'>
              <button href="" className="bg-transparent hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-black hover:border-transparent rounded-none">
                Reject
              </button>
            </div>
          </div>
        </div>
      </li>


    </div>
  )
}

export default Card