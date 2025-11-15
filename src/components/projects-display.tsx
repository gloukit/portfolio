import ProjectCard from "./project-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";


export interface ProjectType {
    name:string;
    shorten:string;
    slug:string;
    description:string;
    stacks:string[];
    image:string;
    githubLink:string;
    webLink?:string;
}

export const projectsInfos:ProjectType[] = [
    {
        name:"news aggregation web",
        shorten:"News Feed Website",
        slug:"news_aggregation_web",
        description:"A responsive news platform using the NewsAPI, featuring real-time headlines, keyword search, category filtering, manual refresh controls, and mobile-friendly layouts.",
        stacks:["HTML","CSS","JavaScript"],
        image:"/news-feed.png",
        webLink:"https://gloukit.github.io/News-Feed/",
        githubLink:"https://github.com/gloukit/News-Feed"
    },
    {
        name:"weather forecast app",
        shorten:"Weather APP",
        slug:"weather_forecast_app",
        description:"A weather app powered by TanStack Query for data caching and request management. Includes automatic geolocation detection, interactive weather visualizations, destination search, and the ability to save favorite locations.",
        stacks:["React","TypeScript","TanStack Query","Recharts","React Router","Tailwind CSS","shadcn/ui"],
        image:"/weather-app.png",
        webLink:"https://gloukit.github.io/Weather-APP-with-React-TypeScript-Tailwind/",
        githubLink:"https://github.com/gloukit/Weather-APP-with-React-TypeScript-Tailwind"
    },
    {
        name:"e-commerce website",
        shorten:"Ecommerce Website",
        slug:"ecommerce_website",
        description:"An e-commerce site using Redux to manage cart state and TanStack Query to handle all API-driven data. Supports product search, category filtering, pagination, and full cart operations including add, remove, and quantity updates.",
        stacks:["React","TanStack Query","Redux Toolkit","React Router","Tailwind CSS"],
        image:"/shopping-web.png",
        githubLink:"https://github.com/gloukit/ShoppingWebsite-with-React-Tailwind"        
    }
]

export default function ProjectsDisplay(){

    return (
        <>
            <div className="lg:text-4xl md:text-3xl text-2xl text-background font-bold flex justify-center">
                My Projects
            </div>

            <div className="lg:w-4xl md:w-xl w-sm mx-auto my-4">
                <Carousel>
                    <CarouselContent>
                        {projectsInfos.map((project,index)=>(
                            <CarouselItem key={index}>
                                <ProjectCard {...project}/> {/*将project对象里的每一个键值对，一个个展开传给组件，都变成组件的props*/}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    <CarouselPrevious className="animate-bounce-left bg-foreground text-background cursor-pointer"/>
                    <CarouselNext className="animate-bounce-right bg-foreground text-background cursor-pointer"/>

                </Carousel>
            </div>
        </>
    )
}
