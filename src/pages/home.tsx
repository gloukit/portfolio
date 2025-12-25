import { CircleArrowDown } from "lucide-react";
import Profile from "../components/profile";
import ProjectsDisplay from "../components/projects-display";
import SkillCards from "../components/skill-cards";
import { useScrollTo } from "@/hooks/use-scrollTo";
import { useRef } from "react";

export default function Home(){
    const nextPageRef = useRef<HTMLDivElement | null>(null);
    const scrollToNext = useScrollTo(nextPageRef);

    return (
        <div className="flex flex-col items-center">

            {/*Page1*/}
            <div className="w-[90%] relative py-[60px] flex flex-col items-center justify-between">
                <div className="w-full flex items-center justify-around gap-10">
                    <div className="flex flex-col lg:gap-5 gap-3 lg:w-[70%]">
                        <Profile/>
                    </div>

                    <div className="flex flex-col gap-2 lg:w-[20%]">
                        <SkillCards/>   
                    </div> 
                </div>

                <CircleArrowDown size={50} strokeWidth={1}
                                 onClick={scrollToNext} 
                                 className="absolute -bottom-15 animate-bounce cursor-pointer text-background/60 hover:text-background dark:text-background/80 dark:hover:text-background"/>  
            </div>

            {/*Page2*/}
            <div ref={nextPageRef} className="w-[90%] mb-5">
                <span className="block h-[100px] invisible">占位</span>
                <ProjectsDisplay/>
            </div>
        </div>
    )
}