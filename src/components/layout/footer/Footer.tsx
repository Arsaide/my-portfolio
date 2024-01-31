import React from 'react';
import {FaDiscord, FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <div className={'w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'}>
            <div className={'w-full flex flex-col items-center justify-center m-auto'}>
                <div className={'w-full h-full flex flex-row items-center justify-around flex-wrap'}>


                    <div className={'min-w-[200px] h-auto flex flex-col items-center justify-start'}>
                        <div className={'font-bold text-[16px]'}>
                            Community
                        </div>
                        <div className={'flex flex-row items-center my-[15px] cursor-pointer'}>
                            <FaGithub/>
                            <span className={'text-[15px] ml-[6px]'}>GitHub</span>
                        </div>
                        <div className={'flex flex-row items-center my-[15px] cursor-pointer'}>
                            <FaDiscord/>
                            <span className={'text-[15px] ml-[6px]'}>Discord</span>
                        </div>
                    </div>

                    <div className={'min-w-[200px] h-auto flex flex-col items-center justify-start'}>
                        <div className={'font-bold text-[16px]'}>
                            Social Media
                        </div>
                        <div className={'flex flex-row items-center my-[15px] cursor-pointer'}>
                            <FaLinkedin/>
                            <span className={'text-[15px] ml-[6px]'}>Instagram</span>
                        </div>
                        <div className={'flex flex-row items-center my-[15px] cursor-pointer'}>
                            <FaGithub/>
                            <span className={'text-[15px] ml-[6px]'}>Linkedin</span>
                        </div>
                        <div className={'flex flex-row items-center my-[15px] cursor-pointer'}>
                            <FaDiscord/>
                            <span className={'text-[15px] ml-[6px]'}>Telegram</span>
                        </div>
                    </div>

                    <div className={'min-w-[200px] h-auto flex flex-col items-center justify-start'}>
                        <div className={'font-bold text-[16px]'}>
                            About
                        </div>
                        <div className={'flex flex-row items-center my-[15px] cursor-pointer'}>
                            <span className={'text-[15px] ml-[6px]'}>arsaidekm@gmail.com</span>
                        </div>
                        <div className={'flex flex-row items-center my-[15px] cursor-pointer'}>
                            <span className={'text-[15px] ml-[6px]'}>Learning about me</span>
                        </div>
                    </div>
                </div>

                <div className={'mb-[20px] text-[15px] text-center'}>
                    &copy; Arsaide 2024. All right reserved
                </div>

            </div>
        </div>
    );
};

export default Footer;
