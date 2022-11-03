import React from "react";
import InputSearchClient from "../../components/InputSearchClient";
import ContacListSection from "../../components/ContactListSection";
import ContactFooter from "../../components/ContactFooter";

const HomeClientList = () => {
  return (
    <div className="flex flex-col justify-start">
      <div className="fixed flex justify-center w-[100vw] pb-[20px]">
        <InputSearchClient />
      </div>
      <div className= "pt-[20vh] h-[100vh] lg:pt-[26vh] lg:mb-[26vh]">
        <ContacListSection />
      </div>
      <div className="fixed bottom-0 w-[100vw]">
        <ContactFooter />
      </div>
    </div>
  );
};

export default HomeClientList;
