import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";

export default function ModeToggle(){
    const {theme,setTheme} = useTheme();
    const isDark = theme==="dark";

    return (
        <div onClick={()=>setTheme(isDark?"light":"dark")}
             className={`border-none bg-none cursor-pointer transition-all duration-500 ${isDark? "rotate-180":"rotate-0"}`}>
            {isDark? (
                <Sun className="transition-all rotate-0 text-yellow-300 lg:size-6 size-5"/>
            ) : (
                <Moon className="transition-all rotate-0 text-blue-300 lg:size-6 size-5"/>
            )}
        </div>
    )
}