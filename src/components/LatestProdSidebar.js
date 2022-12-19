import React from 'react'
import styled from 'styled-components';
import { BASE_URL } from '../pages/Home';
import { Link } from "react-router-dom";

import MopedIcon from '@mui/icons-material/Moped';

const LatestProdSidebar = ({items}) => {

  const getSubId = (id) => { 
    localStorage.setItem("Specific product id", id)
    console.log("Testing ",id)
 }

  return (
    <>
        <ComponentWrapper>
            <Link onClick={()=>{getSubId(items.id)}} to='/product-details'>
              <ProductItem>
                  <img src={`${BASE_URL}${items?.img_1}`} alt=""/>
                  <p>{items.name}</p>
              </ProductItem>
            </Link>
            {/* <ProductItem>
                <img src="/Images/sidead.png" alt=""/>
                <p>WAFU Q2 Smart</p>
            </ProductItem>
            <ProductItem>
                <img src="/Images/sidead.png" alt=""/>
                <p>WAFU Q2 Smart</p>
            </ProductItem>
            <ProductItem>
                <img src="/Images/sidead.png" alt=""/>
                <p>WAFU Q2 Smart</p>
            </ProductItem> */}
        </ComponentWrapper>
    </>
  )
}

export default LatestProdSidebar

const ComponentWrapper = styled.div`
    width: 100%;
    /* margin-top: 5px; */
    height: 118px;
    /* margin-right: 10px; */
    background-color: #fff;
    /* border-radius: 15px; */
    /* border: 2px solid #B1B1B1; */
    /* margin-bottom: 30px; */

    > a{
        text-decoration: none;
        /* line-height: 10px; */
    }
`
const ProductItem = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    /* justify-content: space-around; */
    width: 100%;
    border-bottom: 1px solid #B1B1B1;
    /* border: 1px solid red; */

    > img {
      margin-right: 15px;
      height: 90px;
      width: 90px;
      object-fit: contain;
    }
    
    >p{
      font-size: 16px;
      margin-top: 10px;
      color: #333;
    }
`