import React from 'react';
import HeroContent from "@/components/pages/home-page/hero/components/hero-content/HeroContent";
import HeroVideo from "@/components/pages/home-page/hero/components/hero-video/HeroVideo";

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full">
            <HeroVideo/>
            <HeroContent/>
        </div>
    );
};

export default Hero;
