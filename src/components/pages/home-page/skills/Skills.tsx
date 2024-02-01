import React from 'react';
import {Frontend_skill} from "../../../../../constans";
import SkillDataProvider from "@/components/pages/home-page/skills/skill-data-provider/SkillDataProvider";
import SkillText from "@/components/pages/home-page/skills/skill-text/SkillText";

const Skills = () => {
    return (
        <section
            id={'skills'}
            className={'flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-[20rem] py-[11rem]'}
            style={{transform: "scale(.9)"}}
        >
            <SkillText/>
            <div className={'flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'}>
                {Frontend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                        alt={image.skill_name}/>
                ))}
            </div>

            <div className={'w-full h-full absolute'}>
                <div className={'video-container'}>
                    <video
                        className={'video-responsive'}
                        preload={'false'}
                        playsInline
                        loop
                        muted
                        autoPlay
                        src={'/cards-video.webm'}>
                    </video>
                </div>
            </div>

        </section>
    );
};

export default Skills;
