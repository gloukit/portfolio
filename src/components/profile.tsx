import { useOutletContext } from "react-router-dom"

type LayoutOUtletContext = {
    scrollToFooter : ()=> void;
}

export default function Profile(){

    const {scrollToFooter} = useOutletContext<LayoutOUtletContext>();

    return (
        <> {/*在导入该组件的页面中再使用div作为父组件包裹，更便于在页面中调整整体的布局*/}
            <p className="xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-bold tracking-tighter text-background">
                Nice to meet you!
                <br />I am Sue.
            </p>

            <p className="lg:text-2xl text-lg lg:leading-8 leading-7 tracking-tight flex-wrap text-background">
                Junior Front-end Developer.
                <br />Mater the skills of building the websites with front-end frameworks and libraries such as React, JavaScript, TypeScript, Tailwind CSS.
            </p>
            <button onClick={scrollToFooter}
                    className="lg:w-[200px] w-[150px] hover:bg-background active:scale-95 active:translate-y-0.5 transition-all text-foreground bg-[#595959] dark:bg-background dark:hover:bg-amber-100 lg:py-3 py-2 font-bold lg:text-xl text-lg rounded-md cursor-pointer">
                Contact Me
            </button>
        </>
    )
}