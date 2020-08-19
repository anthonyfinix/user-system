import React, { useState, createContext } from 'react';

const AppContext = createContext();

function AppProvider(props) {
    const [sidebarState, setSidebarState] = useState(true)

    const toggleSidebar = () => {
        setSidebarState(!sidebarState);
    }
    return (
        <AppContext.Provider value={{
            sidebarState,
            setSidebarState,
            toggleSidebar
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext }

export default AppProvider;