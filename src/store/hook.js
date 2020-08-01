import { useRecoilState } from "recoil";
import { sidebarState } from "./atom";

export const useSidebarState = ()=>{
    const [sidebar_state, setSidebarState] = useRecoilState(sidebarState);
    return ()=>{
        setSidebarState(!sidebar_state)
    }
}