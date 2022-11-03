import React from "react";
import ContacListSection from "../../components/ContactListSection";
import ContactFooter from "../../components/ContactFooter";

const HomeClientList = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className= "h-[100vh]">
        <ContacListSection />
      </div>
      <div className="fixed bottom-0 w-[100vw]">
        <ContactFooter />
      </div>
    </div>
  );
};

export default HomeClientList;
