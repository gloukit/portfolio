import { Link} from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger} from "./ui/navigation-menu";
import { projectsInfos } from "./projects-display";
import ModeToggle from "./mode-toggle";

interface HeaderPropsType {
    scrollToFooter?:()=>void;
}

export default function Header({scrollToFooter}:HeaderPropsType){

    return (
        <div className="text-foreground dark:text-background bg-background dark:bg-foreground px-12 py-3 shadow-2xl
                        flex justify-between md:flex-row flex-col items-center gap-1
                        fixed top-0 w-full z-50 h-[100px]
                        backdrop-blur supports-backdrop-filter:bg-background/95
                        dark:backdrop-blur dark:supports-backdrop-filter:bg-foreground/95">
            
            <p className="lg:text-5xl md:text-4xl text-2xl font-bold">
                Portfolio of Sue
            </p>

            <NavigationMenu>
                <NavigationMenuList className="lg:gap-10 gap-3">
                    {/*Home键*/} 
                    <NavigationMenuItem>
                        <NavigationMenuLink className="lg:text-xl md:text-lg text-md font-bold dark:hover:bg-background dark:hover:text-foreground">
                            <Link to="/">HOME</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/*Projects键*/}        
                    <NavigationMenuItem >
                        <NavigationMenuTrigger className="bg-background-500 lg:text-xl md:text-lg text-md font-bold cursor-pointer  dark:hover:bg-background dark:hover:text-foreground">Projects</NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-foreground">
                            <ul className="grid w-[180px] gap-4">
                                <li>
                                    {projectsInfos.map((item)=>(
                                            <NavigationMenuLink asChild className="hover:bg-background hover:text-foreground  font-bold text-md">
                                                <Link to={`projects/${item.slug}`}>
                                                    {item.shorten}                        
                                                </Link>
                                            </NavigationMenuLink>
                                    ))}
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/*Contact键*/}
                    <NavigationMenuItem>
                        <NavigationMenuLink onClick={scrollToFooter}  className="lg:text-xl md:text-lg text-md  font-bold cursor-pointer  dark:hover:bg-background dark:hover:text-foreground">
                            <p>Contact</p>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="ml-2">
                        <ModeToggle/>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}