import React, {useState} from "react";

import InputSearchContact from "../../components/InputSearchContact";
import ContacListSection from "../../components/ContactListSection";
import ContactFooter from "../../components/ContactFooter";


const HomeContactList = () => {

  const [renderContact, setRenderContacts] = useState();

  const pullSearchContact = (dataToRender) => {
    setRenderContacts(dataToRender)
  }


  return (
    <div className="flex flex-col justify-start">
      <div className="fixed flex justify-center w-[100vw] pb-[20px]">
        <InputSearchContact func={pullSearchContact} />
      </div>
      <div className= "pt-[20vh] h-[100vh]">
        <ContacListSection contacts={renderContact} />
      </div>
      <div className="fixed bottom-0 w-[100vw]">
        <ContactFooter />
      </div>
    </div>
  );
};

export default HomeContactList;
