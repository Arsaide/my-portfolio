import React from 'react';
import Link from "next/link";

const FooterAbout = () => {
    return (
        <div className={'min-w-[200px] h-auto flex flex-col items-center justify-start'}>
            <div className={'font-bold text-[16px]'}>
                About
            </div>
            <div className={'flex flex-row items-center my-[15px] cursor-pointer'}>
                <Link href={'mailto:arsaidekm@gmail.com'} className={'text-[15px] ml-[6px]'}>arsaidekm@gmail.com</Link>
            </div>
            <div className={'flex flex-row items-center my-[15px] cursor-pointer'}>
                <Link href={'/about-me'} className={'text-[15px] ml-[6px]'}>Learning about me</Link>
            </div>
        </div>
    );
};

export default FooterAbout;
