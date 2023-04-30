import React from "react";

function Touch() {
  return (
    <div>
      <div
        style={{ background: `white no-repeat top left, #1E1E1E` }}
        className=" flex flex-col justify-center items-center"
      >
        <div className=" flex flex-col justify-center items-center h-[100vh] w-[100%]" style={{ background: `url(imageHand.png) no-repeat center, #1E1E1E` }}>
          <div className="flex text-[#10D876] text-2xl justify-center items-center ">
            Our contact info
          </div>
          <div className="flex text-white text-4xl font-railway font-bold justify-center items-center ">
            Get in touch with us
          </div>
          <div className="flex text-white text-2xl justify-center items-center ">
            LOrem ipsum mnfjrf djcvbds
          </div>
          <button className="w-fit mx-4 px-4 h-fit font-railway justify-center mt-4 text-xl items-center text-white font-bold rounded-lg space-x-4 bg-[#10D876] flex py-2">
            <p>Connect Now</p>
            <img src="./imageIcon.png"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Touch;
