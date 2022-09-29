import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    // State Values
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
   
   

    // Functions
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
     
    };
    const openSubmenu = () => {
      setIsSubmenuOpen(true);
    };
    const closeSubmenu = () => {
      
    };
    return <AppContext.Provider value={{isSubmenuOpen,isSidebarOpen,openSubmenu,openSidebar,closeSubmenu,closeSidebar}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}