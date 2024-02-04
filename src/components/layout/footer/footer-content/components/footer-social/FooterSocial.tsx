import React from 'react';
import {FaInstagram, FaLinkedin, FaTelegram} from "react-icons/fa";
import Link from "next/link";

const FooterSocial = () => {
    return (
        <div className={'min-w-[200px] h-auto flex flex-col items-center justify-start'}>
            <div className={'font-bold text-[16px]'}>
                Social Media
            </div>
            <Link href={'https://www.instagram.com/arsaide__'} className={'flex flex-row items-center my-[15px] cursor-pointer'}>
                <FaInstagram/>
                <div className={'text-[15px] ml-[6px]'}>Instagram</div>
            </Link>
            <Link href={'https://www.linkedin.com/in/kirill-murahovskiy-b77808281/'} className={'flex flex-row items-center my-[15px] cursor-pointer'}>
                <FaLinkedin/>
                <div className={'text-[15px] ml-[6px]'}>Linkedin</div>
            </Link>
            <Link href={'https://t.me/arsaide'} className={'flex flex-row items-center my-[15px] cursor-pointer'}>
                <FaTelegram/>
                <div className={'text-[15px] ml-[6px]'}>Telegram</div>
            </Link>
        </div>
    );
};

export default FooterSocial;
