import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {Socials} from "../../../../../constans";
import HeaderLogo from "@/components/layout/header/header-content/components/header-logo/HeaderLogo";
import HeaderMenu from "@/components/layout/header/header-content/components/header-menu/HeaderMenu";

const HeaderContent = () => {
    return (
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
            <HeaderLogo/>
            <HeaderMenu/>

            <div className="flex flex-row gap-5 w-[120px]">
                {Socials.map((item) => (
                    <Link
                        href={item.link}
                        key={item.name}>
                        <Image
                            src={item.src}
                            alt={item.name}
                            width={24}
                            height={24}
                            loading={'lazy'}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HeaderContent;
