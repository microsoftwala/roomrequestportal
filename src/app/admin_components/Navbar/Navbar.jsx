import React from 'react'

const Navbar = () => {
    return (
        <header className="bg-grey">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img className="h-10 w-auto" 
                        src="/images/logo.png"
                        alt="" />
                    </a>
                </div>
                <div className=" lg:flex lg:flex-1 lg:justify-end ">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        LogOut <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;