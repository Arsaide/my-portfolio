import React from 'react';
import {Frontend_skill} from "../../../../../../../constans";
import SkillDataProvider from "@/components/pages/home-page/skills/components/skill-data-provider/SkillDataProvider";

const SkillIcons = () => {
    return (
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
    );
};

export default SkillIcons;
