import React from 'react'

const ReqBtn = () => {
    return (
        // <div className='bg-white divide-black mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global'>
        <div className='w-11/12 ml-auto mr-auto'>
            <div className="flex flex-wrap justify-center sm:justify-between max-w-7xl mx-auto p-6 lg:px-8">
                <div className='bg-white py-2.5'>
                <button href="" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-20 rounded-none mr-3">
                    Accept
                </button>
                </div>
                <div className='bg-white py-2.5'>
                <button href="" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-20 rounded-none">
                   Reject
                </button>
                </div>
                <div className='bg-white py-2.5'>
                <button href="" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-20 rounded-none">
                   Commment
                </button>
                </div>
            </div>
         </div>
    )
}

export default ReqBtn