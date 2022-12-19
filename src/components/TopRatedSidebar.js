import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import { ComponentWrapper } from './ThirdSidebarCom';
import axios from 'axios';
import { Link } from "react-router-dom";
import { BASE_URL } from '../pages/Home';

const TopRatedSidebar = ({items}) => {

    const getSubId = (id) => { 
        localStorage.setItem("Specific product id", id)
        console.log("Testing ",id)
     }

  return (
    <>
        <ComponentWrapper>
        <Link onClick={()=>{getSubId(items.id)}} to='/product-details'>
            <Item>
                {/* <LocationOnOutlinedIcon style={{color: "#333", fontSize: "70px", marginRight: "10px"}}/> */}
                <img src={`${BASE_URL}${items.img_1}`} alt=''/>
                <p style={{color: '#5F5D5D', fontSize: '16px', fontWight: 'bold'}}><span style={{fontSize: "16px", fontWeight: 'bold', color: '#FF2164'}}>GH¢{items.prize}</span><br/>{items.name}</p>
            </Item>
        </Link>
        </ComponentWrapper>
    </>
  )
}

export default TopRatedSidebar

export const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 0px;
    height: 110px;
    background-color: #fff;
    /* border-radius: 15px; */
    /* border: 2px solid #B1B1B1; */
    align-items: center;
    margin-bottom: 18px;

    >a{
        text-decoration: none;
    }

`
const Item = styled.div`
    display: flex;
    padding: 15px;
    align-items: center;
    /* justify-content: space-around; */
    width: 90%;
    border-bottom: 1px solid #B1B1B1;

    >img {
        margin-right: 20px;
        height: 100%;
        width: 30%;
    }
    >p{
        color: #333;
    }
`