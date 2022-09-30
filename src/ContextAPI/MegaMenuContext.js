import { createContext, useState } from "react";

const MegaMenuStateContext = createContext();

export function MegaMenuProvider ({children}) {

    // const [friendId, setFriendId] = useState(null)
    // const [friendName, setFriendName] = useState(null)
    const [openMenu, setOpenMenu] = useState(false)

    return(
        <MegaMenuStateContext.Provider value={{openMenu, setOpenMenu}}>
            {children}
        </MegaMenuStateContext.Provider>
    );
}

export default MegaMenuStateContext