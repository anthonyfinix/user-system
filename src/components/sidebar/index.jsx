import React from 'react';
import "./sidebar.css";
import { sidebarState } from '../../store';
import { useRecoilValue } from 'recoil';


export default () => {
    const state = useRecoilValue(sidebarState)
    // return <div id={`sidebar ${state ? 'open' : 'false'}`}>Sidebar</div>
return <div id="sidebar" className={`${state ? "open" : "hide"}`}>{state?"open":"hide"}</div>
}