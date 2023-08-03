import React from "react";

const AdminAcceptComponent = (props) => {
  //   const { data } = props;
  const theData = props.data;
  theData.map((data) => {console.log(data.name)});
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
          <h2 className="my-2 mt-3 text-xl font-semibold">Approved Requests</h2>
          <div className="cards">
            {theData.map((index, data) => 
              <div
                key={index}
                className="card flex items-center p-3 flex-col md:flex-row mb-3"
                style={{ backgroundColor: "#80808080" }}
              >
                <div className="w-full md:w-3/5">
                  <p>
                    Name of the Event:{" "}
                    <span className="event-name">{data.name}</span>
                  </p>
                  <p>
                    Date of the Event:{" "}
                    <span className="event-date">{data.date}</span>
                  </p>
                  <p>
                    Hall: <span className="event-hall">{data.hall}</span>
                  </p>
                  <p>
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
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAcceptComponent;
