export function useScrollTo<T extends HTMLElement>(targetRef:React.RefObject<T | null>){
    return ()=>{
        targetRef.current?.scrollIntoView({behavior:"smooth"});
    }
}
