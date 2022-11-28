import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import MegaMenuChoiceContext from "../ContextAPI/MegaMenuContext";
import { BASE_URL } from "../pages/Home";
import { Link } from "react-router-dom";
import WatchesMenuView from "./CategoriesComponentView/WatchesMenuView";
import ToolsIndScientMenuView from "./CategoriesComponentView/ToolsIndScientMenuView";
import ToysHobbiesMenuView from "./CategoriesComponentView/ToysHobbiesMenuView";
import WomensClothsMenuView from "./CategoriesComponentView/WomensClothsMenuView";
import PhoneAccessMenuView from "./CategoriesComponentView/PhoneAccessMenuView";
import MensClothMenuView from "./CategoriesComponentView/MensClothMenuView";
import ElectronicsMenuView from "./CategoriesComponentView/ElectronicsMenuView";

import axios from "axios";

const TheMegaMenu = () => {
  const { openMenu, setOpenMenu, setSubcategoryid, subcategorydata, catIdforMegaMenu } = useContext(MegaMenuChoiceContext);

  const [changeSubMenuView, setChangeSubMenuView] = useState()


  const handleAssignment = (id) => {
    setSubcategoryid(id);
    localStorage.setItem("Sub-category id", id);
    console.log("Sub-category id: ", id);
  };

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
  
  // You have to declare and call the function in a useEffect to keep it persisting

  return (
    <div>
      <MegaMenu>
        <TheMenu
          onMouseEnter={() => {
            setOpenMenu(true);
          }}
          onMouseLeave={() => {
            setOpenMenu(false);
          }}
          openMenu={openMenu}
        >
          {/* <Subsubcatogories>
            {subcategorydata?.map(({ name, id }) => (
              <Link onClick={() => {handleAssignment(id)}} to="/product-list" key={id}>
                <p>{name}</p>
              </Link>
            ))}
          </Subsubcatogories> */}
          <Subsubcatogories>
              {/* {catIdforMegaMenu} */}
              {changeSubMenuView}
          </Subsubcatogories>
          
        </TheMenu>
      </MegaMenu>
    </div>
  );
};

export default TheMegaMenu;

const MegaMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-left: 90px;
  margin-right: 90px;
  /* height: 500px;
    width: 1000px; */
    width: 90%;
  /* border: 5px solid red; */
`;

const TheMenu = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  display: ${(props) => (props.openMenu ? "flex" : "none")};
  flex-direction: row;
  background-color: #fff;
  height: 500px;
  width: 1060px;
  padding: 20px;
  /* border: 2px solid red; */
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 50px;
  margin-top: 10px;
  z-index: 5;
  border-radius: 10px;
`;
const Subsubcatogories = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid green; */
  width: 100%;
  height: 100%;
  flex-wrap: wrap;

  > a {
    color: #000;
    opacity: 0.5;
    padding: 5px;
    padding-left: 50px;
    font-size: 15px;
    font-weight: 400;
    /* line-height: 10; */
    cursor: pointer;
    line-height: 30px;
    white-space: nowrap;
    /* margin-top: 25px; */
    text-decoration: none;
    font-family: "Noto Sans", sans-serif;

    &:hover{
      font-weight: bold;
      color: #000;
      opacity: 1;
    }
  }
`;
