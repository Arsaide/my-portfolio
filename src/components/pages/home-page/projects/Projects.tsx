import React from 'react';
import ProjectsCard from "@/components/pages/home-page/projects/projects-card/ProjectsCard";

const Projects = () => {
    return (
        <div className={'flex flex-col items-center justify-center py-20'}>
            <h3 className={'text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'}>
                My Projects
            </h3>

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
        </div>
    );
};

export default Projects;
