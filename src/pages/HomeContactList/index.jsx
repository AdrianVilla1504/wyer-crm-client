import React, {useState} from "react";

import InputSearchClient from "../../components/InputSearchClient";
import ContacListSection from "../../components/ContactListSection";
import ContactFooter from "../../components/ContactFooter";


const HomeContactList = () => {

  const [renderClients, setRenderClients] = useState();

  const pullSearchClient = (dataToRender) => {
    setRenderClients(dataToRender)
  }


  return (
    <div className="flex flex-col justify-start">
      <div className="fixed flex justify-center w-[100vw] pb-[20px]">
        <InputSearchClient func={pullSearchClient} />
      </div>
      <div className= "pt-[20vh] h-[100vh]">
        <ContacListSection clients={renderClients} />
      </div>
      <div className="fixed bottom-0 w-[100vw]">
        <ContactFooter />
      </div>
    </div>
  );
};

export default HomeContactList;
