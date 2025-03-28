import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";

const SocialIcons = () => {
    const [contacts, setContact] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const contactsResponse = (await axios.get(`${process.env.REACT_APP_API_URL}contact/${process.env.REACT_APP_USER_ID}`)).data;
                setContact(contactsResponse.contacts);
            } catch (error) {
                console.error(`\n Error message --> ${error.message} \n Error stack --> ${error.stack} \n`);
            }
        }
        fetchData();
    }, []);

  return (
    <div className="fixed bottom-5 left-10 flex flex-col items-center gap-4">
      <a href={(contacts.find(c => c.type == "github"))?.value} target="_blank" className="text-gray-400 hover:text-gray-800 transition duration-300 text-2xl">
        <FaGithub />
      </a>
      <a href={(contacts.find(c => c.type == "linkedin"))?.value} target="_blank" className="text-gray-400 hover:text-gray-800 transition duration-300 text-2xl">
        <FaLinkedin />
      </a>
      <div className="w-[1px] h-20 bg-gray-800 mt-2"></div>
    </div>
  );
};

export default SocialIcons;