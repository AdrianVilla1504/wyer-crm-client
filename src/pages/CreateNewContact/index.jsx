import React from "react";

const CreateNewContact = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center pb-[16vh] lg:pb-[20vh]">
        <div className="w-[90vw] lg:w-[80vw] py-[20px] lg:mt-[4vh] container flex flex-col mx-auto items-center justify-center bg-[#F6F6F6] rounded-[33px] relative">
          <input
            type="text"
            id="name-input"
            className="rounded-[60px] h-[50px] border-none flex-1 appearance-none border border-gray-300 w-[80%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
            placeholder="Nombres"
          />
          <input
            type="text"
            id="name-input"
            className="rounded-[60px] h-[50px] border-none flex-1 appearance-none border border-gray-300 w-[80%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
            placeholder="Apellidos"
          />
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="rounded-[60px] h-[50px] border-none flex-1 appearance-none border border-gray-300 w-[80%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
            placeholder="E-mail"
          ></input>
          <input
            type="text"
            id="name-input"
            className="rounded-[60px] h-[50px] border-none flex-1 appearance-none border border-gray-300 w-[80%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
            placeholder="Cel/Tel"
          />

          <input
            datepicker
            type="text"
            className="rounded-[60px] h-[50px] border-none flex-1 appearance-none border border-gray-300 w-[80%] py-2 px-7 pb-[10px] bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
            placeholder="Fecha de nacimiento"
            data-mdb-toggle="datepicker"
          />
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CreateNewContact;
