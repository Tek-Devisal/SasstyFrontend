import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components';
import MegaMenuChoiceContext from "../ContextAPI/MegaMenuContext"
import { BASE_URL } from '../pages/Home';
import { Link } from "react-router-dom";

import axios from 'axios';

const TheMegaMenu = () => {

    const { openMenu, setOpenMenu, setSubcategoryid, subcategorydata } = useContext(MegaMenuChoiceContext);
    
    const handleAssignment = (id) => { 
      setSubcategoryid(id)
      localStorage.setItem("Sub-category id", id)
      console.log("Sub-category id: ",id)
     }

  return (
    <div>
        <MegaMenu>
            <TheMenu 
              onMouseEnter={()=>{setOpenMenu(true)}}
              onMouseLeave={()=>{setOpenMenu(false)}} 
              openMenu = {openMenu}>
                <Subsubcatogories>
                  {subcategorydata?.map(({name, id})=>(<Link onClick={()=>{handleAssignment(id)}} to="/product-list" key={id}><p>{name}</p></Link>))}
                </Subsubcatogories>
                <Subsubcatogories>
                  {/* <Link to="/product-list">{subcategorydata?.map(({name, id})=>(<p key={id}>{name}</p>))}</Link> */}
                </Subsubcatogories>
            </TheMenu>
      </MegaMenu>
    </div>
  )
}

export default TheMegaMenu


const MegaMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    margin-left: -120px;
    margin-right: 50px;
    /* height: 500px;
    width: 1000px; */
    /* border: 1px solid red; */
`

const TheMenu = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    display: ${props => props.openMenu ? 'flex' : 'none'};
    flex-direction: row;
    background-color: #fff;
    height: 500px;
    width: 70%;
    box-shadow: rgba(50, 50, 93, 0.1) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 3px -1px;/* border: 2px solid red; */
    margin-top: 10px;
    z-index: 5;
`
const Subsubcatogories = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid green; */
    width: 20%;
    height: 100%;

    > a {
        color: #FF2164;
        padding: 5px;
        padding-left: 50px;
        font-size: 15px;
        font-weight: 400;
        line-height: 1.5;
        cursor: pointer;
        white-space: nowrap;
        /* margin-top: 25px; */
        text-decoration: none;
        font-family: 'Noto Sans', sans-serif;
    }
`