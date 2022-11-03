/* eslint-disable no-unused-expressions */
import React from "react";
import ContactHomeCard from "../ContactHomeCard/";

const ContacListSection = ({clients}) => {

  return (
    <>
      {clients ? (
        <div className="pb-[16vh] lg:pb-[20vh]">
          <div className="w-[90vw] lg:w-[80vw] py-[20px] lg:mt-[4vh] container flex flex-col mx-auto items-center justify-center bg-[#F6F6F6] rounded-[33px]">
            <ul className="flex w-[74vw] lg:w-[74vw] flex-col divide divide-y-[3px] divide-white">
              {clients?.map((client) => {
                return <ContactHomeCard client={client} key={client._id} />;
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div className="w-[90vw] lg:w-[80vw] h-[100vh] container flex flex-col mx-auto items-center justify-center bg-F6F6F6 rounded-lg ">
          <img
            className="animate-bounce w-[30px]"
            src="https://res.cloudinary.com/dkagy4g5m/image/upload/v1667411126/wyer/contact_loader_w1vmxz.png"
            alt="contact_loader"
          />
        </div>
      )}
    </>
  );
};

export default ContacListSection;
