import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ContactForm = ({ handlerSubmit, handleChange }) => {

  const [inputDate, setInputDate] = useState(false);

  const handleDateType = (e) => {
    e.preventDefault();
    setInputDate(true);
  };

  return (
    <div>
      <form action="#" method="POST" onSubmit={handlerSubmit}>
        <div className="w-[90vw] lg:w-[80vw] h-[67vh] py-[20px] lg:mt-[4vh] container flex flex-col mx-auto items-center justify-between bg-[#F6F6F6] rounded-[33px] relative">
          <input
            type="text"
            id="name-input"
            name="name"
            required
            className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
            placeholder="Nombres"
            onChange={handleChange}
          />
          <input
            type="text"
            id="lastName-input"
            name="lastName"
            required
            className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
            placeholder="Apellidos"
            onChange={handleChange}
          />
          <input
            type="email"
            id="email-input"
            name="email"
            autocomplete="email"
            required
            className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
            placeholder="E-mail"
            onChange={handleChange}
          />
          <input
            type="tel"
            id="phone-input"
            name="phone"
            autocomplete="email"
            required
            className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
            placeholder="Telefono"
            onChange={handleChange}
          />
          {!inputDate ? (
            <div className="relative flex flex-col items-center w-full">
              <input
                type="text"
                id="birhday-input"
                name="birthDate"
                className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
                placeholder="Fecha de nacimiento"
                onChange={handleChange}
                onClick={handleDateType}
              />
              <div className="absolute top-3 right-3 lg:top-10 lg:right-[5vh] transform -translate-y-0 pr-9 pointer-events-none">
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
                required
                className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
                onChange={handleChange}
              />
            </div>
          )}

          <input
            type="text"
            id="address-input"
            name="address"
            required
            className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
            placeholder="Dirección"
            onChange={handleChange}
          />
          <div className="relative flex flex-col items-center w-full">
            <select
              id="contactType-select"
              name="contactType"
              required
              className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Tipo
              </option>
              <option value="Cliente">Cliente</option>
              <option value="Socio">Socio</option>
            </select>
            <div className="absolute top-3 right-3 lg:top-10 lg:right-[5vh] transform -translate-y-0 pr-9 pointer-events-none">
              <img
                className="w-[20px]"
                src="https://res.cloudinary.com/dkagy4g5m/image/upload/v1667532919/wyer/select_tag_arrow_grbqce.png"
                alt="select_tag_icon"
              />
            </div>
          </div>
          <div className="relative flex flex-col items-center w-full">
            <select
              id="contactType-select"
              name="contactType"
              required
              className="rounded-[60px] h-[42px] border-none flex appearance-none border border-gray-300 w-[87%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
              onChange={handleChange}
            >
              <option className="text-gray-700" value="" disabled selected>
                Sexo
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
            <div className="absolute top-3 right-3 lg:top-10 lg:right-[5vh] transform -translate-y-0 pr-9 pointer-events-none">
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
              className="w-[43vw] h-[40px] my-[15px] bg-[#D1D1D1] hover:bg-blue-700   px-4 rounded-full text-white text-lg font-medium"
            >
              Cancelar
            </button>
          </Link>
          <button
            name="submit_client_form_button"
            type="submit"
            className="w-[43vw] h-[40px] my-[15px] bg-[#64CD98] hover:bg-blue-700   px-4 rounded-full text-white text-lg font-medium"
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
