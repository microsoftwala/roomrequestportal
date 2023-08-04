import Link from "next/link";
import React,{useEffect, useState} from "react";
// import cookies from "cookies"


const IntialState = {
    nameofevent: '',
    date: '',
    starttime: '',
    endtime: '',
    noofpeople: '',
    staffchoice: '',
    request: ''
  }
  
const AdminPendingComponent = (props) => {

    const [form, setform] = useState(IntialState);
    var datas = [];

    const [Data,setData] = useState([])

    const handlechange = (e) => {
  
      setform({
        ...form,
        [e.target.name]: e.target.value
      })
      console.log(form);
    }
    useEffect(()=>{
        // const link = 'https://api.sheety.co/9f8b541cea9377651b9327d784fa4fe3/untitledSpreadsheet/sheet1'
    //     fetch(link)
    //     .then((response) => {
    //       response.json().then((data) => {
    //         let size = Object.keys(data.sheet1).length
    //         let au = data.sheet1
    //         for(let i=0;i<size;i++)
    //         {
    //           let name = au[i]['nameofevent']
    //           let date = au[i]['date']
    //           let hall = au[i]['noofpeople']
    //           let request = au[i]['request']
    //           datas.push({
    //             name: name,
    //             date: date,
    //             hall: hall,
    //             request: request,
    //             clubName: "Club Name 1",
    //             PIC: "PIC 1",
    //           })
    //          }
    //       setData([...datas])
    //       });
    //   });
    //     const { data } = props;
    //   var theData = datas;
    },[])
    const { data } = props;
     var theData = data
     const [d,setd]=useState({});
     
     
     console.log(d)
    //  theData.map((response)=>console.log(response))
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
            <div className="container px-4 p-3">
                <div className="faculity-name">
                    <h3 className="my-2 text-lg">(Faculity Name)</h3>
                </div>
                <div className="line-separator w-full h-px bg-black"></div>
                <div>
                    <h2 className="my-2 mt-3 text-xl font-semibold">Pending Requests</h2>
                    <div className="cards">

                        {theData.map((data,index) =>

                            <div
                                key={index}
                                className="card flex items-center p-3 flex-col md:flex-row mb-3"
                                style={{ backgroundColor: "#80808080" }}
                            >
                                <div className="w-full md:w-3/5 pl-3">
                                    <p className="mb-3">
                                        Name of the Event:
                                        <span className="event-name">{data.name}</span>
                                    </p>
                                    <p className="mb-3">
                                        Date of the Event:{" "}
                                        <span className="event-date">{data.date}</span>
                                    </p>
                                    <p className="mb-3">
                                        Hall: <span className="event-hall">{data.hall}</span>
                                    </p>
                                    <p className="mb-3">
                                        Request:{" "}
                                        <span className="event-request">{data.request}</span>
                                    </p>
                                </div>
                                <div className="w-full md:w-3/5 mt-2">
                                    <div className="club-details p-1 px-5 pl-6 border-black border-2 rounded-full">
                                        <p>
                                            Club Name:{" "}
                                            <span className="club-name">{data.clubName}</span>
                                        </p>
                                        <p>
                                            PIC: <span className="pic">{data.PIC}</span>
                                        </p>
                                    </div>
                                    <div className="flex items-end sm:itens-center px-4 pb-2 mt-7">
                                        <div className="flex items-center">
                                            <div className='px-4'>
                                                <Link href="" className="bg-transparent hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-black hover:border-transparent rounded-none" onClick={(d)=>{
                                                    setd(data)
                                                }}>
                                                    Open
                                                </Link>
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
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPendingComponent;
