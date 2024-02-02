"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import StarsBackground from "@/components/pages/home-page/stars-canvas-bg/stars-background/StarsBackground";

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20]">
        <Canvas camera={{position: [0, 0, 1]}}>
            <Suspense fallback={null}>
                <StarsBackground />
            </Suspense>
        </Canvas>
    </div>
)

export default StarsCanvas;