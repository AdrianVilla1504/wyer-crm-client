/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { getClients } from "../../services/clients";


const InputSearchClient = (props) => {
  const [clients, setClient] = useState();
  const [search, setSearch] = useState("");
  const searcherHandleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchClient = async () => {
      setClient(await getClients());
    };
    fetchClient();
  }, []);

  let results = [];

  useEffect(() => {
    if (!search) {
      results = clients;
      props.func(results);
    } else {
      results = clients.filter((client) =>
        client.name.toLowerCase().includes(search.toLocaleLowerCase())
      );
      props.func(results);
    }
  }, [clients, search, setClient]);

  return (
    <>
      <div className="flex flex-col w-[90vw] lg:w-[82vw] lg:px-[90] pt-[5vh] relative bg-white">
        <input
          type="text"
          id="rounded-search"
          className="rounded-[60px] h-[50px] border-none flex-1 appearance-none border border-gray-300 w-full py-2 px-7 pb-[10px] bg-[#F6F6F6] text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#006191] focus:border-transparent"
          placeholder="Buscar"
          value={search}
          onChange={searcherHandleChange}
        />
        <div className="absolute top-11 right-3 lg:top-10 lg:right-[5vh] transform -translate-y-0 pr-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-[#006192]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <div className="flex pl-[20px] pt-[20px] flex-start">
          <span className="font-semibold text-[#006191]">
            Lista de contactos
          </span>
        </div>
      </div>
    </>
  );
};

export default InputSearchClient;
