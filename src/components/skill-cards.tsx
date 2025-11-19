
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
                        className="xl:max-w-2/3 w-full bg-background text-foreground px-3 lg:py-2.5 py-2
                                   font-bold md:text-2xl text-xl text-center rounded-md
                                   odd:self-start even:self-end">
                    {skill.name}
                </div>      
            ))}
        </>


    )
}
