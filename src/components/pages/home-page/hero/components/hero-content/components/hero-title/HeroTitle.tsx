import React from 'react';
import {slideInFromTop} from "@/utils/motion";
import {SparklesIcon} from "@heroicons/react/16/solid";
import {motion} from "framer-motion";

function HeroTitle() {
    return (
        <motion.div
            variants={slideInFromTop}
            className={'Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]'}
        >
            <SparklesIcon className={'text-[#b49bff] mr-[10px] h-5 w-5'}/>
            <h1 className={'Welcome-text text-[13px]'}>Front-End Developer Portfolio</h1>
        </motion.div>
    );
}

export default HeroTitle;