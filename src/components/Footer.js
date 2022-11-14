import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram'
import CopyrightIcon from '@mui/icons-material/Copyright'

const Footer = () => {
  return (
    <>
        <ComponentWrapper>
            <Logos>
                <FacebookIcon style={{color: "#fff"}} />
                <InstagramIcon style={{color: "#fff"}} />
            </Logos>
            <Line></Line>
            <p>Terms    |    Track your order    |    Sell on Sassty    |    SasstyPLUS    |   Referral</p>
        </ComponentWrapper>
        <CopyRight>
            <p><CopyrightIcon style={{color: "#fff", marginBlockEnd: '-5px'}}/>2022 Sassty. All Rights Reserved</p>
        </CopyRight>
    </>
  )
}

export default Footer

const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 1280px;
    height: 200px;
    background-color: #c4bdbd;
    /* border-radius: 10px; */

`
const Logos = styled.div`
    display: flex;
    width: 60px;
    justify-content: space-between;
`
const Line = styled.div`
    width: 60%;
    border-bottom: 1px solid white;
    margin-top: 10px;
    margin-bottom: 10px;
`
const CopyRight = styled.div`
    height: 50px;
    width: 100%;
    min-width: 1280px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    

    >p{
        color: #fff;
        /* border: 1px solid white;                                          */
        /* margin-block-start: 3em; */
    }
`