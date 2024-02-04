import React from 'react';
import HeaderContent from "@/components/layout/header/header-content/HeaderContent";

const Header = () => {
    return (
        <header className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <HeaderContent/>
        </header>
    );
};

export default Header;
