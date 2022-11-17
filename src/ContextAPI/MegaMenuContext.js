import { createContext, useState } from "react";

const MegaMenuStateContext = createContext();

export function MegaMenuProvider ({children}) {

    // const [friendId, setFriendId] = useState(null)
    // const [friendName, setFriendName] = useState(null)
    const [openMenu, setOpenMenu] = useState(false)
    const [subcategorydata, setSubcategorydata] = useState()
    const [subcategoryid, setSubcategoryid] = useState()
    const [catIdforMegaMenu, setCatIdforMegaMenu] = useState()

    const newId = subcategoryid

    return(
        <MegaMenuStateContext.Provider value={{newId, subcategoryid, setSubcategoryid, subcategorydata, setSubcategorydata, openMenu, setOpenMenu,catIdforMegaMenu, setCatIdforMegaMenu}}>
            {children}
        </MegaMenuStateContext.Provider>
    );
}

export default MegaMenuStateContext