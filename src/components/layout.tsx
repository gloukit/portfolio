import { Outlet } from "react-router-dom";
import Header from "./header";
import { useCallback, useRef } from "react";
import { useScrollTo } from "../hooks/use-scrollTo";
import { Mail } from "lucide-react";


export default function Layout(){
    const footerRef = useRef<HTMLElement | null>(null);

    //获取hook提供的函数
    const scrollTo = useScrollTo<HTMLElement>();
    //进一步具体为跳转到footer的函数，由于该要传递给子组件使用，为避免不必要的重复渲染使用useCallback
    const scrollToFooter = useCallback(()=>{
        if(footerRef) scrollTo(footerRef);
    },[scrollTo]);

    return (
        <div className="w-full bg-foreground relative">
            <Header scrollToFooter={scrollToFooter}/>

            <main>
                <Outlet context={{scrollToFooter}}/>
            </main>

            <footer ref={footerRef}
                    className="absolute -bottom-[120px] 
                               h-[120px] w-full bg-background dark:bg-black/90 text-foreground dark:text-background
                               flex flex-col items-center justify-center gap-2">
                <div className="flex lg:text-xl md:text-lg text-md items-center font-bold">
                    <img src="/github-mark-white.svg" alt="github-logo" className="lg:size-8 size-6 ml-10 mr-2"/>
                    <span className="font-bold hover:underline hover:underline-offset-3 hover:tracking-wider transition-all">
                        <a href="https://github.com/gloukit" target="_blank">GitHub</a>
                    </span>
                    <Mail className="lg:size-8 size-6 ml-10 mr-2"/>
                    <span>soyama@foxmail.com</span>
                </div>
                <p className="lg:text-lg md:text-md text-sm">© 2025 Sue. All rights reserved.</p>
            </footer>
        </div>
    )
}