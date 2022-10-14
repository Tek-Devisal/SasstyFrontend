import React from 'react';
import styled from 'styled-components';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Grid, Typography } from '@mui/material'
import { Link } from "react-router-dom";

const NavbarTwo = () => {
  return (
    <Grid container>
    <NavbarContainer>
        <NavContent>
            <MenuSharpIcon style={{color: "#fff"}}/>
            <a>All</a>
            <a>Today's Deal</a>
            <a>Customer Service</a>
            <a>Registry</a>
            <a>Gift Cards</a>
            <Link to="/listings"><a>Sell On Sassty</a></Link>
        </NavContent>
    </NavbarContainer>
    </Grid>
  )
}

export default NavbarTwo

const NavbarContainer = styled.div`
    /* display: flex; */
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 100%;
    
`
const NavContent = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    /* justify-content: center; */
    align-items: center;
    flex: 1;
    height: 100%;
    background-color: #A71642;

    > a {
        color: #fff;
        font-size: 13px;
        font-weight: 400;
        margin-left: 10px;
        font-family: Arial, sans-serif;
        text-decoration: none;
    }
`