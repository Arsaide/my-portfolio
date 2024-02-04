import React from 'react';
import FooterContent from "@/components/layout/footer/footer-content/FooterContent";
import FooterCopy from "@/components/layout/footer/footer-copy/FooterCopy";

const Footer = () => {
    return (
        <footer className={'w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'}>
            <div className={'w-full flex flex-col items-center justify-center m-auto'}>
                <FooterContent/>
                <FooterCopy/>
            </div>
        </footer>
    );
};

export default Footer;
