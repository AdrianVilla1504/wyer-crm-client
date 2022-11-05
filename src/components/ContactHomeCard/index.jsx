/* eslint-disable no-restricted-globals */
import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteContact } from "../../services/contacts";

const ContactHomeCard = ({ contact }) => {
  const navigate = useNavigate();

  const handleRouteEdit = () => {
    navigate(`/EditExistingContact/${contact?._id}`);
  }

  const handleDelete = (e) => {
    deleteContact(contact?._id);
    location.reload();

  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <li className="flex flex-row " key={contact._id}>
          <div className="select-none w-[90vw] lg:w-[80vw] cursor-pointer flex flex-row justify-between items-center px-[8vw] lg:px-[3vw] py-[1vw]">
            <div className="flex flex-col w-[50vw] ">
              <div className="w-full font-medium text-[#242424]">
                {contact.name + " " + contact.lastName}
              </div>
              <div className="text-[#186F9A] text-sm">(+57) {contact.phone}</div>
            </div>
            <div className="flex flex-row justify-end">
              <button className="w-[30px] ml-[0px] text-right flex justify-end " onClick={handleRouteEdit}>
                <img
                  className="w-[15px]"
                  src="https://res.cloudinary.com/dkagy4g5m/image/upload/v1667407207/wyer/edit_home_itr62p.png"
                  alt="edit_client"
                />
              </button>
              <button className="w-[30px] ml-[0px] text-right flex justify-end">
                <img
                  className="w-[15px]"
                  src="https://res.cloudinary.com/dkagy4g5m/image/upload/v1667408152/wyer/check_home_llisg9.png"
                  alt="check_client"
                />
              </button>
              <button className="w-[30px] ml-[0px] text-right flex justify-end" onClick={handleDelete}>
                <img
                  className="w-[15px]"
                  src="https://res.cloudinary.com/dkagy4g5m/image/upload/v1667408227/wyer/delete_home_dox7rt.png"
                  alt="delete_client"
                />
              </button>
            </div>
          </div>
        </li>
      </div>
    </>
  );
};

export default ContactHomeCard;
