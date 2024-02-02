import React from 'react';
import ProjectsCard from "@/components/pages/home-page/projects/components/projects-card/ProjectsCard";

const ProjectCnt = () => {
    return (
        <div className={'h-full w-full flex flex-col md:flex-row gap-10 px-10'}>
            <ProjectsCard
                src={'/NextWebsite.png'}
                title={'My portfolio'}
                description={'lorem ipsum'}/>
            <ProjectsCard
                src={'/CardImage.png'}
                title={'My portfolio'}
                description={'lorem ipsum'}/>
            <ProjectsCard
                src={'/SpaceWebsite.png'}
                title={'My portfolio'}
                description={'lorem ipsum'}/>
        </div>
    );
};

export default ProjectCnt;
