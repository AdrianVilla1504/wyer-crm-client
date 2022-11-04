import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContacts } from "../../services/contacts";

import ContactForm from "../../components/ContactForm";
import ContactFooter from "../../components/ContactFooter";


const CreateNewContact = () => {
  const navigate = useNavigate();
  const [contactForm, setContactForm] = useState({});

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  console.table(contactForm);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    await createContacts(contactForm);
    navigate("/");
  };

  return (
    <div>
      <div className="flex flex-col h-[100vh] justify-center items-center pb-[16vh] lg:pb-[20vh]">
        <div className="ml-[-120px] py-[10px] flex-start">
          <span className="font-semibold text-[#006191]">
            Nuevo Contacto
          </span>
        </div>
        <ContactForm
          handleChange={handleChange}
          handlerSubmit={handlerSubmit}
        />
      </div>
      <div className="fixed bottom-0 w-[100vw]">
        <ContactFooter />
      </div>
    </div>
  );
};

export default CreateNewContact;
