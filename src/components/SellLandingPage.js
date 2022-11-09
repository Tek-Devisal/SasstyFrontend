import React from 'react'
import Navbar from './Navbar';
import styled from "styled-components";
import CheckIcon from '@mui/icons-material/Check';
import {Grid, Box, Typography} from '@mui/material'
import { Link } from "react-router-dom";


const SellLandingPage = () => {
  return (
    <>
        <Navbar />
        <ImageContainer>
            <CarouselTextContainer>
                <TextWrapper>
                    <h1>Start Selling on Sassty</h1>
                    <div style={{width: 500}}><p>Make your selling journey easier with Jungle Scout’s helpful tools and tips.</p></div>
                    
                    <p className='tick'><CheckIcon style={{color: '#F57706', marginRight: 15}}/>Find a high-demand product to sell</p>
                    <p className='tick'><CheckIcon style={{color: '#F57706', marginRight: 15}}/>Build a profitable business</p>
                    <p className='tick'><CheckIcon style={{color: '#F57706', marginRight: 15}}/>Get the support you need every step of the way</p>
                    
                    <Link to='/listings'>
                        <GetStarted>
                            <p>Get Started</p>
                        </GetStarted>
                    </Link>
                </TextWrapper>
            </CarouselTextContainer>

            <CarouselImageContainer>
                <img src='/Images/landing.png'/>
            </CarouselImageContainer>
        </ImageContainer>
    </>
  )
}

export default SellLandingPage

const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 90vh;
    background-color: #FFF1E2;
    
`
const CarouselTextContainer = styled.div`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    /* margin: 100px; */
    flex-direction: column;
    /* border: 1px solid red; */
    width: 100%;
    contain: content;
`
const CarouselImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
    height: 100%;
    /* width: 800px; */
    width: 100%;

    >img{
        height: 80%;
        width: 85%;
    }
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid green; */
    height: 300px;
    width: 600px;
    margin-left: 160px;
    margin-bottom: 100px;

    >h1{
        font-size: 40px;
        font-weight: 1000;
        text-rendering: optimizelegibility;
        font-family: Montserrat, sans-serif;
        font-style: normal;
    }

    > a{
        text-decoration: none;
    }


    >div>p{
        font-size: 20px;
        /* line-height: 15px; */
        font-family: Montserrat, sans-serif;
    }
`
const GetStarted = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 45px;
    background-color: #F57706;
    border-radius: 5px;
    cursor: pointer;
    
    

    >p{
        color: white;
        margin-block-start: 1rem;
        text-decoration: none;
    }
`