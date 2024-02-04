import React from 'react';
import Image from "next/image";
import {Socials} from "../../../../constans";
import {logoImg} from "@/media/images";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <Link href="https://github.com/Arsaide"
                    className="cursor-pointer h-auto w-[120px] flex flex-row items-center hover-opacity transition-opacity duration-300 ease-in-out">
                    <Image
                        src={logoImg}
                        alt={'Logo'}
                        width={50}
                        height={50}
                        loading={'lazy'}
                    />

                    <span className={'font-bold ml-[10px] hidden md:block text-gray-300'}>
                        Arsaide
                    </span>
                </Link>

                <div className="w-auto h-full flex flex-row items-center justify-between">
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
                </div>

                <div className="flex flex-row gap-5 w-[120px]">
                    {Socials.map((item) => (
                        <Link
                            href={item.link}>
                            <Image
                                src={item.src}
                                alt={item.name}
                                key={item.name}
                                width={24}
                                height={24}
                                loading={'lazy'}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
