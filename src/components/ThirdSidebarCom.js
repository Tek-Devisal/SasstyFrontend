import React from 'react'
import styled from 'styled-components';


import MopedIcon from '@mui/icons-material/Moped';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MoneyIcon from '@mui/icons-material/Money';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const ThirdSidebarCom = () => {
  return (
    <>
        <ComponentWrapper>
            <Delivery>
                <MopedIcon style={{color: "#333", fontSize: "60px", marginRight: "10px"}}/>
                <p><span style={{fontSize: "14px"}}>FREE DELIVERY</span><br/>On Order Over</p>
            </Delivery>
            <OrderProtection>
                <ListAltIcon style={{color: "#333", fontSize: "60px", marginRight: "10px"}}/>
                <p><span style={{fontSize: "14px"}}>ORDER PROTECTION</span><br/>Secured Information</p>
            </OrderProtection>
            <GiftPromo>
                <CardGiftcardIcon style={{color: "#333", fontSize: "60px", marginRight: "10px"}}/>
                <p><span style={{fontSize: "14px"}}>PROMOTION GIFT</span><br/>Special Offers</p>
            </GiftPromo>
            <MoneyBack>
                <MoneyIcon style={{color: "#333", fontSize: "60px", marginRight: "10px"}}/>
                <p><span style={{fontSize: "14px"}}>MONEY BACK</span><br/>Return Over 30 days</p>
            </MoneyBack>
        </ComponentWrapper>
    </>
  )
}

export default ThirdSidebarCom

export const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    height: 410px;
    background-color: #fff;
    border-radius: 15px;
    border: 2px solid #B1B1B1;
    align-items: center;
`
const Delivery = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    /* justify-content: space-around; */
    width: 90%;
    border-bottom: 1px solid #B1B1B1;
`
const OrderProtection = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    /* justify-content: space-around; */
    width: 90%;
    border-bottom: 1px solid #B1B1B1;
`
const GiftPromo = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    /* justify-content: space-around; */
    width: 90%;
    border-bottom: 1px solid #B1B1B1;
`
const MoneyBack = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    /* justify-content: space-around; */
    width: 90%;
    /* border-bottom: 1px solid #B1B1B1; */
`