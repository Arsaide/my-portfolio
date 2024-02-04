import React from 'react';
import {FaDiscord, FaGithub} from "react-icons/fa";

const FooterCommunity = () => {
    return (
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
    );
};

export default FooterCommunity;
