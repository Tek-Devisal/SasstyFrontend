import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import MegaMenuStateContext from '../ContextAPI/MegaMenuContext'
import { BASE_URL } from './Home'
import { Line } from '../components/Footer'
import MobileCategoryItem from '../components/MobileCategoryItem'

import WatchesMenuView from "../components/CategoriesComponentView/WatchesMenuView";
import ToolsIndScientMenuView from "../components/CategoriesComponentView/ToolsIndScientMenuView";
import ToysHobbiesMenuView from "../components/CategoriesComponentView/ToysHobbiesMenuView";
import WomensClothsMenuView from "../components/CategoriesComponentView/WomensClothsMenuView";
import PhoneAccessMenuView from "../components/CategoriesComponentView/PhoneAccessMenuView";
import MensClothMenuView from "../components/CategoriesComponentView/MensClothMenuView";
import ElectronicsMenuView from "../components/CategoriesComponentView/ElectronicsMenuView";

const CategoryMobile = () => {

    const { allcategory, catIdforMegaMenu } = useContext(MegaMenuStateContext);
    const [changeSubMenuView, setChangeSubMenuView] = useState(1)

    const newCategories = [
        {name: "Women's Clothing", id: 1},
        {name: "Men's Clothin", id: 2},
        {name: "Phones & Accessories", id: 3},
        {name: "Electronics", id: 4},
        {name: "Tools, Industrial & Scientific", id: 5},
        {name: "Toys Hobbies and Robot", id: 6},
        {name: "Computers & Office", id: 7},
        {name: "Automobiles & Motocycles", id: 8},
        {name: "Sports & Outdoor", id: 9},
        {name: "Home, Garden & Furniture", id: 10},
        {name: "Jewelry & Watches", id: 11},
        {name: "Home Appliances", id: 12},
        {name: "Shoes and Bags", id: 13},
        {name: "Lights & Lighting", id: 15},

      ]

      const setView = () => { 
        return  catIdforMegaMenu === 1 ? setChangeSubMenuView(<WomensClothsMenuView/>)
              : catIdforMegaMenu === 2 ? setChangeSubMenuView(<MensClothMenuView/>)
              : catIdforMegaMenu === 3 ? setChangeSubMenuView(<PhoneAccessMenuView/>)
              : catIdforMegaMenu === 4 ? setChangeSubMenuView(<ElectronicsMenuView/>)
              : catIdforMegaMenu === 5 ? setChangeSubMenuView(<ToolsIndScientMenuView/>)
              : catIdforMegaMenu === 6 ? setChangeSubMenuView(<ToysHobbiesMenuView/>)
              : catIdforMegaMenu === 7 ? setChangeSubMenuView(<WatchesMenuView/>)
              : setChangeSubMenuView("");
      }
    
      useEffect(() => {
        setView()
      }, [catIdforMegaMenu])

  return (
    <>
    <Navbar />
    <PageWrapper>
        <SideBar>
            {newCategories?.map(({id, name})=>(
                <MobileCategoryItem name ={name} id ={id} />
            ))}
        </SideBar>
        <MainWindow>
            {changeSubMenuView}
        </MainWindow>
    </PageWrapper>
    </>
  )
}

export default CategoryMobile

const PageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
`
const SideBar = styled.div`
    height: 100%;
    width: 30%;
    background-color: #F7F8FA;
    display: flex;
    flex-direction: column;
    padding: 14px;
    /* position: fixed; */

    > p{
        font-size: 14px;
    }
`
const MainWindow = styled.div`
    width: 70%;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* border: 1px solid red; */

`