import React from 'react';
import FooterCommunity from "@/components/layout/footer/footer-content/components/footer-community/FooterCommunity";
import FooterSocial from "@/components/layout/footer/footer-content/components/footer-social/FooterSocial";
import FooterAbout from "@/components/layout/footer/footer-content/components/footer-about/FooterAbout";

const FooterContent = () => {
    return (
        <div className={'w-full h-full flex flex-row items-center justify-around flex-wrap'}>
            <FooterCommunity/>
            <FooterSocial/>
            <FooterAbout/>
        </div>
    );
};

export default FooterContent;
