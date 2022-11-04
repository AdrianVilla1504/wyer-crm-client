/* eslint-disable no-unused-expressions */
import React from "react";

import { Link } from "react-router-dom";

import ContactHomeCard from "../ContactHomeCard/";

const ContacListSection = ({ clients }) => {
  return (
    <>
      {clients ? (
        <div className="flex flex-col justify-center items-center pb-[16vh] lg:pb-[20vh]">
          <div className="w-[90vw] lg:w-[80vw] py-[20px] lg:mt-[4vh] container flex flex-col mx-auto items-center justify-center bg-[#F6F6F6] rounded-[33px]">
            <ul className="flex w-[74vw] lg:w-[74vw] flex-col divide divide-y-[3px] divide-white">
              {clients?.map((client) => {
                return <ContactHomeCard client={client} key={client._id} />;
              })}
            </ul>
          </div>
          <Link to="/CreateNewContact">
            <button className="flex flex-row justify-between items-center w-[37vw] h-[40px] my-[15px] bg-[#006191] hover:bg-blue-700  py-2 px-4 rounded-full">
              <span className="text-white text-lg font-medium">Agregar</span>

              <img
                className="w-[22px]"
                src="https://res.cloudinary.com/dkagy4g5m/image/upload/v1667452901/wyer/add-contact_bgxq7q.png"
                alt="add_contact"
              />
            </button>
          </Link>
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
