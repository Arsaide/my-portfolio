import React from 'react';

const SkillVideo = () => {
    return (
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
    );
};

export default SkillVideo;
