
import React from 'react';
import { Main } from './style';
import { AiOutlineGithub,AiFillLinkedin,AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  return (
    <>
      <Main>
        <div className="max-container">
            <a href="https://github.com/andrevft" rel="noopener noreferrer" target="_blank">
                <AiOutlineGithub /> andrevft
            </a>
            <a href="https://www.linkedin.com/in/andreterrasan/" rel="noopener noreferrer" target="_blank">
                <AiFillLinkedin /> Andre Terrasan
            </a>

           
        </div>
      </Main>
    </>
  );
}




export default Footer;


