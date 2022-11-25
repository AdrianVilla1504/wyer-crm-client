import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactForm = ({ edit, contact, handlerSubmit, handleChange }) => {
  const [inputDate, setInputDate] = useState(false);

  const handleDateType = (e) => {
    e.preventDefault();
    setInputDate(true);
  };

  return (
    <div>
      <form action="#" method="POST" onSubmit={handlerSubmit}>
        <div className="w-[90vw] h-[67vh] py-[20px] lg:w-[80vw] lg:h-[90vh] lg:mt-[4vh] container flex flex-col mx-auto items-center justify-between bg-[#F6F6F6] rounded-[33px] relative">
          <div className="relative flex flex-col items-center w-full">
            <input
              type="text"
              id="name-input"
              name="name"
              required={!edit}
              className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
              placeholder={edit ? contact.name : "Nombre"}
              onChange={handleChange}
            />
            {edit ? (
              <div className="absolute top-3 right-3 lg:top-3 lg:right-[7vh] transform -translate-y-0 pr-9 pointer-events-none">
                <button className="0" onClick={handleDateType}>
                  <img
                    className="w-[20px]"
                    src="https://res.cloudinary.com/dkagy4g5m/image/upload/v1667407207/wyer/edit_home_itr62p.png"
                    alt="edit_input_icon"
                  />
                </button>
              </div>
            ) : null}
          </div>
          <div className="relative flex flex-col items-center w-full">
            <input
              type="text"
              id="lastName-input"
              name="lastName"
              required={!edit}
              className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
              placeholder={edit ? contact.lastName : "Apellidos"}
              onChange={handleChange}
            />
            {edit ? (
              <div className="absolute top-3 right-3 lg:top-3 lg:right-[7vh] transform -translate-y-0 pr-9 pointer-events-none">
                <button className="0" onClick={handleDateType}>
                  <img
                    className="w-[20px]"
                    src="https://res.cloudinary.com/dkagy4g5m/image/upload/v1667407207/wyer/edit_home_itr62p.png"
                    alt="edit_input_icon"
                  />
                </button>
              </div>
            ) : null}
          </div>
          <div className="relative flex flex-col items-center w-full">
            <input
              type="email"
              id="email-input"
              name="email"
              autocomplete="email"
              required={!edit}
              className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
              placeholder={edit ? contact.email : "E-mail"}
              onChange={handleChange}
            />
            {edit ? (
              <div className="absolute top-3 right-3 lg:top-3 lg:right-[7vh] transform -translate-y-0 pr-9 pointer-events-none">
                <button className="0" onClick={handleDateType}>
                  <img
                    className="w-[20px]"
                    src="https://res.cloudinary.com/dkagy4g5m/image/upload/v1667407207/wyer/edit_home_itr62p.png"
                    alt="edit_input_icon"
                  />
                </button>
              </div>
            ) : null}
          </div>
          <div className="relative flex flex-col items-center w-full">
            <input
              type="tel"
              id="phone-input"
              name="phone"
              autocomplete="email"
              required={!edit}
              className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
              placeholder={edit ? contact.phone : "Telefono"}
              onChange={handleChange}
            />
            {edit ? (
              <div className="absolute top-3 right-3 lg:top-3 lg:right-[7vh] transform -translate-y-0 pr-9 pointer-events-none">
                <button className="0" onClick={handleDateType}>
                  <img
                    className="w-[20px]"
                    src="https://res.cloudinary.com/dkagy4g5m/image/upload/v1667407207/wyer/edit_home_itr62p.png"
                    alt="edit_input_icon"
                  />
                </button>
              </div>
            ) : null}
          </div>
          {!inputDate ? (
            <div className="relative flex flex-col items-center w-full">
              <input
                type="text"
                id="birhday-input"
                name="birthDate"
                required={!edit}
                className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
                placeholder={
                  edit
                    ? contact.birthDate?.split("").splice(0, 10).join("")
                    : "Fecha de nacimiento"
                }
                onChange={handleChange}
                onClick={handleDateType}
              />
              <div className="absolute top-3 right-3 lg:top-3 lg:right-[7vh] transform -translate-y-0 pr-9 pointer-events-none">
                <button className="0" onClick={handleDateType}>
                  <img
                    className="w-[20px]"
                    src="https://res.cloudinary.com/dkagy4g5m/image/upload/v1667533027/wyer/calendar_icon_farwre.png"
                    alt="calendar_input_icon"
                  />
                </button>
              </div>
            </div>
          ) : (
            <div className="relative flex flex-col items-center w-full">
              <input
                type="date"
                id="birhday-input"
                name="birthDate"
                required={!edit}
                className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
                onChange={handleChange}
              />
            </div>
          )}
          <div className="relative flex flex-col items-center w-full">
            <input
              type="text"
              id="address-input"
              name="address"
              required={!edit}
              className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
              placeholder={edit ? contact.address : "Dirección"}
              onChange={handleChange}
            />
            {edit ? (
              <div className="absolute top-3 right-3 lg:top-3 lg:right-[7vh] transform -translate-y-0 pr-9 pointer-events-none">
                <button className="0" onClick={handleDateType}>
                  <img
                    className="w-[20px]"
                    src="https://res.cloudinary.com/dkagy4g5m/image/upload/v1667407207/wyer/edit_home_itr62p.png"
                    alt="edit_input_icon"
                  />
                </button>
              </div>
            ) : null}
          </div>
          <div className="relative flex flex-col items-center w-full">
            <select
              id="contactType-select"
              name="contactType"
              required={!edit}
              className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
              onChange={handleChange}
            >
              <option value="" disabled selected>
                {edit ? contact.contactType : "Tipo"}
              </option>
              <option value="Cliente">Cliente</option>
              <option value="Socio">Socio</option>
            </select>
            <div className="absolute top-3 right-3 lg:top-3 lg:right-[7vh] transform -translate-y-0 pr-9 pointer-events-none">
              <img
                className="w-[20px]"
                src="https://res.cloudinary.com/dkagy4g5m/image/upload/v1667532919/wyer/select_tag_arrow_grbqce.png"
                alt="select_tag_icon"
              />
            </div>
          </div>
          <div className="relative flex flex-col items-center w-full">
            <select
              id="sex-select"
              name="sex"
              required={!edit}
              className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
              onChange={handleChange}
            >
              <option value="" disabled selected>
                {edit ? contact.sex : "Sexo"}
              </option>
              <option className="text-gray-700" value="Hombre">
                Hombre
              </option>
              <option className="text-gray-700" value="Mujer">
                Mujer
              </option>
              <option className="text-gray-700" value="No binario">
                No Binario
              </option>
            </select>
            <div className="absolute top-3 right-3 lg:top-3 lg:right-[7vh] transform -translate-y-0 pr-9 pointer-events-none">
              <img
                className="w-[20px]"
                src="https://res.cloudinary.com/dkagy4g5m/image/upload/v1667532919/wyer/select_tag_arrow_grbqce.png"
                alt="select_tag_icon"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-[90vw] lg:w-[80vw]">
          <Link to="/">
            <button
              name="cancel_button_back_home"
              type="button"
              className="w-[43vw] h-[40px] lg:w-[70vh] my-[15px] bg-[#D1D1D1] hover:bg-blue-700   px-4 rounded-full text-white text-lg font-medium"
            >
              Cancelar
            </button>
          </Link>
          <button
            name="submit_client_form_button"
            type="submit"
            className="w-[43vw] h-[40px] lg:w-[70vh] my-[15px] bg-[#64CD98] hover:bg-blue-700   px-4 rounded-full text-white text-lg font-medium"
            onSubmit={handlerSubmit}
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
