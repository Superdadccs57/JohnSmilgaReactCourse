import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    // State Values
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
   
   

    // Functions
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
     setIsSidebarOpen(false)
    };
    const openSubmenu = () => {
      setIsSubmenuOpen(true);
    };
    const closeSubmenu = () => {
      setIsSubmenuOpen(false)
    };
    return <AppContext.Provider value={{isSubmenuOpen,isSidebarOpen,openSubmenu,openSidebar,closeSubmenu,closeSidebar}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}