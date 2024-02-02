'use client'

import React from 'react';
import { motion } from "framer-motion";
import {slideInFromLeft, slideInFromRight, slideInFromTop} from "@/utils/motion";
import {SparklesIcon} from "@heroicons/react/16/solid";
import Image from "next/image";
import HeroTitle from "@/components/pages/home-page/hero/components/hero-content/components/hero-title/HeroTitle";
import HeroSubtitle
    from "@/components/pages/home-page/hero/components/hero-content/components/hero-subtitle/HeroSubTitle";
import HeroDesc from "@/components/pages/home-page/hero/components/hero-content/components/hero-desc/HeroDesc";
import HeroBtn from "@/components/pages/home-page/hero/components/hero-content/components/hero-btn/HeroBtn";
import HeroImg from "@/components/pages/home-page/hero/components/hero-content/components/hero-img/HeroImg";

const HeroContent = () => {
    return (
        <motion.div
            initial={'hidden'}
            animate={'visible'}
            className={'flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'}
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <HeroTitle/>
                <HeroSubtitle/>
                <HeroDesc/>
                <HeroBtn/>
            </div>
           <HeroImg/>

        </motion.div>
    );
};

export default HeroContent;
