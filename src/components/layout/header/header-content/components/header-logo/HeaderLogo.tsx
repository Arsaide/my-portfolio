import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {logoImg} from "@/media/images";

const HeaderLogo = () => {
    return (
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
    );
};

export default HeaderLogo;
