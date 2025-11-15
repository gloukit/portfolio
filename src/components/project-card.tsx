import { Link } from "react-router-dom";
import { Card, CardContent} from "./ui/card";
import { Button } from "./ui/button";
import { SquareArrowOutUpRight } from "lucide-react";

interface ProjectType {
    name:string;
    shorten:string;
    slug:string;
    description:string;
    stacks:string[];
    image:string;
    webLink?:string;
    githubLink:string;
}

export default function ProjectCard(props:ProjectType){

    return (
        <Card className="border-black/5 bg-foreground dark:bg-background/90">
            <CardContent className="flex flex-col">
                <Link to={`projects/${props.slug}`}>
                    <img src={props.image} alt={props.name} className="object-cover"/>            
                </Link>
                <div className="lg:text-2xl md:text-xl text-md font-bold my-5 dark:text-foreground">
                    <a href={props.githubLink} target="_blank" className="flex items-center gap-4 hover:underline dark:hover:text-black transition-all">
                        <span className="hover:translate-x-0.5 hover:tracking-tight transition-all">{props.name.toUpperCase()}</span>
                        <span>
                            <SquareArrowOutUpRight size={18}/>
                        </span>
                    </a>
                </div>

                <div className="flex flex-wrap gap-1">
                    {props.stacks.map((stack)=>(   
                        <Button variant="outline" className="bg-background dark:bg-foreground text-foreground dark:text-background dark:hover:bg-black font-bold lg:text-md md:text-sm text-xs lg:px-3 px-1.5">
                            {stack}
                        </Button>
                    ))}
                </div>
            </CardContent>
        </Card>

    )
}