import React from 'react';
import SkillText from "@/components/pages/home-page/skills/skill-text/SkillText";
import SkillVideo from "@/components/pages/home-page/skills/skill-video/SkillVideo";
import SkillIcons from "@/components/pages/home-page/skills/skills-icons/SkillIcons";

const Skills = () => {
    return (
        <section
            id={'skills'}
            className={'flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-[20rem] py-[11rem]'}
            style={{transform: "scale(.9)"}}>
            <SkillText/>
            <SkillIcons/>
            <SkillVideo/>
        </section>
    );
};

export default Skills;
