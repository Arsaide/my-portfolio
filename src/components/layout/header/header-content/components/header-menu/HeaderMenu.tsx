import React from 'react';

const HeaderMenu = () => {
    return (
        <nav className="w-auto h-full flex flex-row items-center justify-between">
            <div className="flex items-center justify-between gap-[80px] w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
                <a href="#about" className="cursor-pointer">
                    About
                </a>
                <a href="#skills" className="cursor-pointer">
                    Skills
                </a>
                <a href="#projects" className="cursor-pointer">
                    Projects
                </a>
            </div>
        </nav>
    );
};

export default HeaderMenu;
