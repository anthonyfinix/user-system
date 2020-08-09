import { useRecoilState } from "recoil";
import { sidebarState,user } from "./atom";

export const useSidebarState = ()=>{
    const [sidebar_state, setSidebarState] = useRecoilState(sidebarState);
    return ()=>{
        setSidebarState(!sidebar_state)
    }
}
export const useUser = ()=>{
    const [user_state, setUserState] = useRecoilState(user)
    return setUserState;
}