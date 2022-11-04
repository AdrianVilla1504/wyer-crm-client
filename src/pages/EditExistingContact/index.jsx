/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getContactById, updateContact } from "../../services/contacts";
import ContactForm from "../../components/ContactForm";
import ContactFooter from "../../components/ContactFooter";

const EditExistingContact = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const confirmEdit = true;
  const [contactById, setContactById] = useState({});
  const [contactForm, setContactForm] = useState({});

  const handleChange = (e) => {
    setContactForm({ ...contactById, [e.target.name]: e.target.value });
  };

  console.table(contactForm);
  useEffect(() => {
    const fetchContact = async () => {
      setContactById(await getContactById(id));
    };
    fetchContact();
  }, []);


  const handlerSubmit = async (e) => {
    e.preventDefault();
    await updateContact(contactForm);
    navigate("/");
  };

  return (
    <div>
      <div className="flex flex-col h-[100vh] justify-center items-center pb-[16vh] lg:pb-[20vh]">
        <div className="ml-[-120px] py-[10px] flex-start">
          <span className="font-semibold text-[#006191]">Editar Contacto</span>
        </div>
        <ContactForm
          contact={contactById}
          edit={confirmEdit}
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

export default EditExistingContact;
