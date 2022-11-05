import React, { useState } from "react";
import { Link } from "react-router-dom";

import InputSearchContact from "../../components/InputSearchContact";
import ContacListSection from "../../components/ContactListSection";
import ContactFooter from "../../components/ContactFooter";

const HomeContactList = () => {
  const [renderContact, setRenderContacts] = useState();

  const pullSearchContact = (dataToRender) => {
    setRenderContacts(dataToRender);
  };

  return (
    <div className="flex flex-col justify-start">
      <div className="fixed flex justify-center w-[100vw] pb-[20px]">
        <InputSearchContact func={pullSearchContact} />
      </div>
      <div className="pt-[20vh] h-[100vh]">
        <ContacListSection contacts={renderContact} />
      </div>
      <div className="fixed bottom-0 w-[100vw] mt-[0px]">
        <div className="bg-white  border-none pb-[1vh] pt-[2px]">
          <Link to="/CreateNewContact">
            <button className="inset-x-0 mx-auto flex flex-row justify-between items-center w-[37vw] h-[40px] my-[15px] bg-[#006191] hover:bg-blue-700  py-2 px-4 rounded-full">
              <span className="text-white text-lg font-medium">Agregar</span>
              <img
                className="w-[22px]"
                src="https://res.cloudinary.com/dkagy4g5m/image/upload/v1667452901/wyer/add-contact_bgxq7q.png"
                alt="add_contact"
              />
            </button>
          </Link>
        </div>
        <ContactFooter />
      </div>
    </div>
  );
};

export default HomeContactList;
