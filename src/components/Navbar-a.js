// import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import styled from "styled-components"
// import navtrans from '../styles/navtrans.js'
import { Link } from "react-router-dom";
import NavbarTwo from './NavbarTwo';

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    

  return (
      
    <>
        <NavbarContainer className='navbar'>
            {/* <NavLogo>
                <img priority={true} className='NavbarImage' src="/hatchlogo.png" width="270px" height="60px" alt='Logo' />
            </NavLogo> */}
                {/* <Burger /> */}
            <NavLinks>
                <Link to="/">Terms of use</Link>
                <Link to="/about">Sell on Sassty</Link>
                <Link to="/projects">Referral</Link>
                <Link to="/media">SasstyPLUS</Link>
                <Link to="/partnerships">Track your order</Link>
                <Link to="/team">Help</Link>
            </NavLinks>
            {/* <Burger /> */}
            <OpenLinksButton onClick={()=> {setIsOpen(!isOpen)}}>
                {isOpen ? <>&#10005;</> : <>&#8801;</>}
                
            </OpenLinksButton>
            {isOpen && (
                <NavbarHumburgerContainer>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/media">Media</Link>
                    <Link to="/partnerships">Partnerships</Link>
                    <Link to="/team">Our Team</Link>
                </NavbarHumburgerContainer>
            )}
        </NavbarContainer>
        <NavbarTwo />
    </>
  )
};

export default Navbar;

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* bottom border shadow */
    /* box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75); */
    position: relative; /* Make it stick/fixed */
    top: 0; /* Stay on top */
    z-index: 3; /* Stay on top */
    width: 100%; /* Full width */
    transition: top 0.3s;
    /* overflow: hidden; */
    background-color: #FF2164;
    height: 70px;
    /* width: 218.5vh; */
    /* border: 1px solid black; */

    /* @media only screen and (min-device-width : 0px) and (max-device-width :768px){
        display: none;
    } */
    
`
const NavLogo = styled.div`
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    padding-top: 10px;
     /* border: 1px solid black; */

    @media (max-width: 768px) {
        > img {
            width: 230px;
            height: 50px;
        }
    }

    `
const NavLinks = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 60px;
    justify-content: space-between;
    height: 50px;
    /* width: 700px; */
    /* border: 1px solid #ccc; */
    margin-top: 15px;
    /* padding-bottom: 20px; */
    padding-top: 10px;
    /* box-sizing: border-box; */

    @media only screen and (min-device-width : 0px) and (max-device-width :768px){
        display: none;
    }

    > a {
        margin-left: 20px;
        white-space: nowrap;
        /* margin-top: 25px; */
        text-decoration: none;
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        /* font-family: 'Noto Sans', sans-serif; */

        &:hover {
            color: #fff;
            /* font-size: 20px; */
            border-bottom: 5px solid #66a3a3;
        }

    }

`
const NavbarHumburgerContainer = styled.div`
/* @media only screen and (min-device-width : 0px) and (max-device-width :768px){ */
        display: flex;
        height: auto;
        width: 300px;
        top: 0;
        right: 0;
        flex-direction: column;
        position: fixed;
        justify-content: space-around;
        align-items: center;
        margin-right: 0px;
        margin-top: 0px;
        padding-top: 50px;
        background-color: #333;
        /* color: #fff; */
        opacity: 0.95;
        overflow: scroll !important;

        
        /* transform: translate(-0%, -0%); */

        > a {
            text-decoration: none;
            white-space: nowrap;
            color: #fff;
            padding-bottom: 3rem;
        }
        
    /* } */
`

const OpenLinksButton = styled.div`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: #fff;
    font-size: 45px;
    cursor: pointer;
    z-index: 10;

    @media (min-width: 768px) {
        display: none;
    }
`