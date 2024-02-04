import React from 'react';

function HeroVideo() {
    return (
        <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-340px] w-full h-full left-0 z-[1]" //object-cover
        >
            <source src={'/blackhole.webm'} type={'video/webm'}/>
        </video>
    );
}

export default HeroVideo;