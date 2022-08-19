import React from 'react';
import styled from 'styled-components';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

const NavbarTwo = () => {
  return (
    <NavbarContainer>
        <NavContent>
            <MenuSharpIcon style={{color: "#fff"}}/>
            <p>All</p>
            <p>Today's Deal</p>
            <p>Customer Service</p>
            <p>Registry</p>
            <p>Gift Cards</p>
            <p>Sell</p>
        </NavContent>
    </NavbarContainer>
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

    > p {
        color: #fff;
        font-size: 13px;
        font-weight: 400;
        margin-left: 10px;
        font-family: Arial, sans-serif;
    }
`