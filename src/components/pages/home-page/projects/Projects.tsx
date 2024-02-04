import React from 'react';
import ProjectCnt from "@/components/pages/home-page/projects/components/projects-container/ProjectCnt";


const Projects = () => {
    return (
        <section
            className={'flex flex-col items-center justify-center py-20'}
            id={'projects'}>
            <h3 className={'text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'}>
                My Projects
            </h3>
            <ProjectCnt/>
        </section>
    );
};

export default Projects;
