
export function useScrollTo<T extends HTMLElement>(){
    return (ref:React.RefObject<T>)=>{
        ref?.current?.scrollIntoView({behavior:"smooth"});
    }
}