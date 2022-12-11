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
            <Terms><p>Terms    |    Track your order    |    Sell on Sassty    |    SasstyPLUS    |   Referral</p></Terms>
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
    box-sizing: border-box;
    background-color: #c4bdbd;
    /* border-radius: 10px; */
    @media only screen and (max-width: 600px) {
        min-width: fit-content;
        /* display: none; */
        width: 100%;
        flex-wrap: wrap;
  }

`
const Logos = styled.div`
    display: flex;
    width: 60px;
    justify-content: space-between;
`

const Terms = styled.p`
    width: 100%;
    >p{
        text-align: center;
    }

        @media only screen and (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
        /* min-width: fit-content; */
        width: 70%;
        flex-wrap: wrap;
        /* border: 1px solid red; */
  }
`

export const Line = styled.div`
    width: 60%;
    border-bottom: 1px solid white;
    margin-top: 10px;
    margin-bottom: 10px;
`
const CopyRight = styled.div`
    height: 50px;
    /* width: 100%; */
    min-width: 1280px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    >p{
        color: #fff;
        /* border: 1px solid white;                                          */
        /* margin-block-start: 3em; */
    }

    @media only screen and (max-width: 600px) {
        /* display: none; */
        min-width: fit-content;
        width: 100%;
        flex-wrap: wrap;
  }
`