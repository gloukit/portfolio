
interface SkillDataType {
    name:string;
    color:string;
}

export const skillsData:SkillDataType[] = [
    {
        name:"HTML5",
        color:"black"
    },
    {
        name:"CSS",
        color:"black"
    },
    {
        name:"JavaScript",
        color:"black"
    },
    {
        name:"TypeScript",
        color:"black"
    }, 
    {
        name:"React",
        color:"black"
    },
    {
        name:"Tailwind",
        color:"black"
    },    
];

export default function SkillCards(){
    return (
        <>
            {skillsData.map((skill)=>(
                <div key={skill.name} 
                        className="lg:max-w-lg bg-background text-foreground xl:px-12 lg:px-8 px-4 lg:py-2 py-1.5 
                                   font-bold md:text-2xl text-xl text-center rounded-md
                                   odd:self-start even:self-end">
                    {skill.name}
                </div>      
            ))}
        </>


    )
}
