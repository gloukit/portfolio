import { useParams } from "react-router-dom"
import { projectsInfos, type ProjectType } from "../components/projects-display";
import { useEffect, useState } from "react";
import { Link } from "lucide-react";


export default function ProjectDetail(){
    const {slug} = useParams();
    const [detail,setDetail] = useState<ProjectType>();

    useEffect(()=>{
        const findDetail = projectsInfos.filter(item=>item.slug===slug);
        if(findDetail.length>0){
            setDetail(findDetail[0]);
        }else{
            window.location.href='/';
        }
    },[slug])
    
    return (
        <div className="flex items-center justify-center">
            {detail && (
                <div className="w-[90%] h-[90%] flex xl:flex-row flex-col justify-center items-center xl:gap-10 lg:gap-4 gap-3 md:py-16 py-8">
                    <img src={`${import.meta.env.BASE_URL}${detail.image}`} alt={detail.name}
                         className="xl:w-[60%] object-contain"/>

                    <div className="w-full lg:p-5 p-3 flex flex-col lg:gap-5 gap-4 text-background">
                        <h1 className="xl:text-3xl text-2xl font-bold">
                            {detail.name.toUpperCase()}
                        </h1>

                        <p className="md:text-lg text-md">
                            {detail.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {detail.stacks.map((stack)=>(
                                <span key={stack} className="bg-background text-foreground font-bold lg:text-md md:text-sm text-xs px-2 py-1 rounded"> 
                                    {stack}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-start items-center gap-3.5">
                            <Link className="lg:size-5 size-4"/>
                            <a href={detail.githubLink}  target="_blank">
                                <span className="lg:text-lg text-md font-bold text-card hover:text-black hover:underline dark:hover:text-yellow-100">GitHub</span>
                            </a>
                            {detail.webLink && 
                                <a href={detail.webLink} target="_blank" className="flex gap-1 items-center">
                                    <span className="lg:text-lg text-md font-bold text-card hover:text-black hover:underline dark:hover:text-yellow-100">Available Online</span>
                                </a> 
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}