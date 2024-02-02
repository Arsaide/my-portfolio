import React from 'react';
import {motion} from "framer-motion";
import {slideInFromLeft} from "@/utils/motion";

function HeroBtn() {
    return (
        <motion.a
            variants={slideInFromLeft(1)}
            className={'py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'}
        >
            Learn More!
        </motion.a>
    );
}

export default HeroBtn;