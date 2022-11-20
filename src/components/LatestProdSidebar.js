import React from 'react'
import styled from 'styled-components';
import { BASE_URL } from '../pages/Home';

import MopedIcon from '@mui/icons-material/Moped';

const LatestProdSidebar = ({items}) => {
  return (
    <>
        <ComponentWrapper>
            <ProductItem>
                <img src={`${BASE_URL}${items?.img_1}`} alt=""/>
                <p>{items.name}</p>
            </ProductItem>
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
    margin-top: 20px;
    height: 580px;
    /* margin-right: 10px; */
    background-color: #fff;
    /* border-radius: 15px; */
    /* border: 2px solid #B1B1B1; */
    margin-bottom: 30px;
`
const ProductItem = styled.div`
    display: flex;
    padding: 20px;
    /* align-items: center; */
    /* justify-content: space-around; */
    width: 100%;
    /* border-bottom: 1px solid #B1B1B1; */

    > img {
      margin-right: 15px;
      height: 80px;
      width: 80px;
    }
    
    >p{
      font-size: 19px;
      margin-top: 10px;
    }
`