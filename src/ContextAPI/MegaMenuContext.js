import { createContext, useState } from "react";

const MegaMenuStateContext = createContext();

export function MegaMenuProvider ({children}) {

    // const [friendId, setFriendId] = useState(null)
    // const [friendName, setFriendName] = useState(null)
    const [openMenu, setOpenMenu] = useState(false)
    const [subcategorydata, setSubcategorydata] = useState()
    const [allcategory, setAllcategory] = useState()
    const [subcategoryid, setSubcategoryid] = useState()
    const [catIdforMegaMenu, setCatIdforMegaMenu] = useState()
    const [subcategoryinfo, setSubcategoryinfo] = useState()
    const [subsubcatURL, setSubsubcatURL] = useState()


    const [subSubMenuForMen, setSubSubMenuForMen] = useState()
    const [subSubMenuPhonesAccessories, setSubSubMenuPhonesAccessories] = useState()
    const [subSubMenuElectronics, setSubSubMenuElectronics] = useState()
    const [subSubMenuIndustrial, setSubSubMenuIndustrial] = useState()
    const [subSubMenuHobbies, setSubSubMenuHobbies] = useState()
    const [subSubMenuComputers, setSubSubMenuComputers] = useState()
    const [subSubMenuAutomobiles, setSubSubMenuAutomobiles] = useState()
    const [subSubMenuSports, setSubSubMenuSports] = useState()
    const [subSubMenuFurniture, setSubSubMenuFurniture] = useState()
    const [subSubMenuJewelries, setSubSubMenuJewelries] = useState()
    const [subSubMenuHomeAppliances, setSubSubMenuHomeAppliances] = useState()
    const [subSubMenuShoesBags, setSubSubMenuShoesBags] = useState()
    const [subSubMenuLights, setSubSubMenuLights] = useState()

    const newId = subcategoryid

    return(
        <MegaMenuStateContext.Provider 
        value={{newId,
                subsubcatURL,
                setSubsubcatURL,
                subcategoryinfo, 
                setSubcategoryinfo,
                subcategoryid, 
                setSubcategoryid, 
                subcategorydata, 
                setSubcategorydata, 
                openMenu, 
                setOpenMenu,
                catIdforMegaMenu, 
                setCatIdforMegaMenu,
                allcategory, setAllcategory,

                subSubMenuForMen, setSubSubMenuForMen,
                subSubMenuPhonesAccessories, setSubSubMenuPhonesAccessories,
                subSubMenuElectronics, setSubSubMenuElectronics,
                subSubMenuIndustrial, setSubSubMenuIndustrial,
                subSubMenuHobbies, setSubSubMenuHobbies,
                subSubMenuComputers, setSubSubMenuComputers,
                subSubMenuAutomobiles, setSubSubMenuAutomobiles,
                subSubMenuSports, setSubSubMenuSports,
                subSubMenuFurniture, setSubSubMenuFurniture,
                subSubMenuJewelries, setSubSubMenuJewelries,
                subSubMenuHomeAppliances, setSubSubMenuHomeAppliances,
                subSubMenuShoesBags, setSubSubMenuShoesBags,
                subSubMenuLights, setSubSubMenuLights
                }}>
            {children}
        </MegaMenuStateContext.Provider>
    );
}

export default MegaMenuStateContext