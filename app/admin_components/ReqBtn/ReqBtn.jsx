import React from 'react'

const ReqBtn = () => {
    return (
        // <div className='bg-white divide-black mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global'>
            <div className="flex flex-wrap justify-center sm:justify-between max-w-7xl mx-auto p-6 lg:px-8">
                <div className='bg-white py-2.5'>
                <button href="" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-20 rounded-none">
                    Pending Requests
                </button>
                </div>
                <div className='bg-white py-2.5'>
                <button href="" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-20 rounded-none">
                    Approved Requests
                </button>
                </div>
                <div className='bg-white py-2.5'>
                <button href="" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-20 rounded-none">
                    Rejected Requests
                </button>
                </div>
            </div>
        // </div>
    )
}

export default ReqBtn