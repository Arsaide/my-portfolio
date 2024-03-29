import Hero from "@/components/pages/home-page/hero/Hero";
import Skills from "@/components/pages/home-page/skills/Skills";
import Encryption from "@/components/pages/home-page/encryption/Encryption";
import Projects from "@/components/pages/home-page/projects/Projects";

export default function Home() {
    return (
        <main className="h-full w-full">
            <div className="flex flex-col gap-20">
                <Hero/>
                <Skills/>
                <Encryption/>
                <Projects/>
            </div>
        </main>
    );
}
