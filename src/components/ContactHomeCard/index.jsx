import React from 'react'

const ContactHomeCard = ({ client }) => {
  return (
      <>
        <li className="flex flex-row" key={client._id}>
          <div className="select-none w-[90vw] lg:w-[80vw] cursor-pointer flex flex-row justify-between items-center px-[25px] py-[17px]">
            <div className="flex flex-col w-[50vw] ">
              <div className="w-full font-medium text-[#242424]">
                {client.name}
              </div>
              <div className="text-[#186F9A] text-sm">
                (+57) {client.phone}
              </div>
            </div>
            <div className="flex flex-row justify-end">
              <button className="w-[30px] ml-[0px] text-right flex justify-end">
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
              <button className="w-[30px] ml-[0px] text-right flex justify-end">
                <img
                  className="w-[15px]"
                  src="https://res.cloudinary.com/dkagy4g5m/image/upload/v1667408227/wyer/delete_home_dox7rt.png"
                  alt="delete_client"
                />
              </button>
            </div>
          </div>
        </li>
      </>
  )
}

export default ContactHomeCard;
