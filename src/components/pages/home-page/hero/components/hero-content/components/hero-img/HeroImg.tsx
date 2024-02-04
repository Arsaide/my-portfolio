import React from 'react';
import {slideInFromRight} from "@/utils/motion";
import Image from "next/image";
import {motion} from "framer-motion";
import {skillsGridImg} from "@/media/images";

function HeroImg() {
    return (
        <motion.div
            variants={slideInFromRight(0.8)}
            className={'w-full h-full flex justify-center items-center'}
        >
            <Image
                src={skillsGridImg}
                alt={'work icons'}
                height={650}
                width={650}/>
        </motion.div>
    );
}

export default HeroImg;