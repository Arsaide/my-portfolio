import React from 'react';
import {motion} from "framer-motion";
import {slideInFromLeft} from "@/utils/motion";

function HeroDesc() {
    return (
        <motion.p
            variants={slideInFromLeft(0.8)}
            className={'text-lg text-gray-400 my-5 max-w-[600px]'}
        >
            I&apos;m a Front-End Software Engineer with experience in WebSite.
            Check out my projects and skills.
        </motion.p>
    );
}

export default HeroDesc;