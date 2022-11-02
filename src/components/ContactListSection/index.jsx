import React from "react";
import { useState, useEffect } from "react";
import ContactHomeCard from "../ContactHomeCard/";
import { getClients } from "../../services/clients";

const ContacListSection = () => {
  const [clients, setClient] = useState();

  console.log(clients);

  useEffect(() => {
    const fetchClient = async () => {
      setClient(await getClients());
    };
    fetchClient();
  }, []);

  return (
    <>
      {clients ? (

          <div className="w-[90vw] lg:w-[80vw] px-[40px] container flex flex-col mx-auto items-center justify-center bg-[#F6F6F6] rounded-[33px]">
            <ul className="flex flex-col divide divide-y">
              {clients?.map((client) => {
                return <ContactHomeCard client={client} key={client._id} />;
              })}
            </ul>
          </div>
      ) : (
        <div className="w-[90vw] h-[90vh] lg:w-[80vw] container flex flex-col mx-auto items-center justify-center bg-F6F6F6 rounded-lg ">
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
