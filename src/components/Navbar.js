import React from 'react';
import styled from 'styled-components';
import NavbarTwo from './NavbarTwo';
// import {LocationOnOutlinedIcon } from '@mui/icons-material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const Navbar = () => {
  return (
    <>
    <NavbarContainer>
        <LogoContainer>
            <img src="/Images/sasstylogo.jpeg" alt="logo" />
        </LogoContainer>
        <DeliveryLocationContainer>
            <LocationOnOutlinedIcon style={{color: "white", fontSize: "16px", marginBottom: "2px"}} />
            <p><span>Deliver to</span><br/> Ghana</p>
        </DeliveryLocationContainer>
        <SearchBarContainer>
            <FormContainer>
                <Form>
                    <CustomSearch>
                        <p>All</p>
                        <ArrowDropDownIcon style={{color: "black", marginTop: "2px"}} />
                    </CustomSearch>
                    <FormInput type="email" />
                    <FormButton>
                        <SearchSharpIcon style={{color: "#fff"}}/>
                    </FormButton>
                </Form>
            </FormContainer>
        </SearchBarContainer>
        <FlagContainer>
            <img style={{height: "17px", width: "25px"}} src="/Images/ghflag.png" alt="flag" />
            <ArrowDropDownIcon style={{color: "white", marginTop: "2px"}} />
        </FlagContainer>
        <SignInContainer>
            <p>Hello, Sign in<br/><span>Account & List</span></p>
            <ArrowDropDownIcon style={{color: "white", marginTop: "2px"}} />
        </SignInContainer>
        <ReturnNordersContainer>
            <p>Return <br/><span>& Orders</span></p>
        </ReturnNordersContainer>
        <CartContainer>
            <AddShoppingCartSharpIcon style={{color: "white", fontSize: "40px"}} />
        </CartContainer>
    </NavbarContainer>
    <NavbarTwo />
    </>
  )
}

export default Navbar

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    height: 54px;
    width: auto;
    position: relative;
    background-color: #FF2164;
    padding-right: 10px;
    padding-left: 10px;
`
const LogoContainer = styled.div`
    flex: 0.083;
    /* border: 1px solid white; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 95%;

    > img {
        height: 26px;
        width: 90px;
    }
`
const DeliveryLocationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    flex: 0.074;
    height: 80%;
    /* border: 1px solid white; */
    padding: 5px 5px 20px 5px;
    

    > p {
        line-height: 12px;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        margin-left: 2px;
        margin-bottom: 2px;
        font-family: Arial, sans-serif;

        > span {
            color: #ccc;
            font-size: 12px;
            font-weight: 500;
            
        }
    }
`
const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 0.562;
    /* border: 1px solid white; */
    height: 80%;
    /* width: auto; */

`
const FlagContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 0.05;
    height: 80%;
    /* border: 1px solid white; */
`
const SignInContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 0.093;
    height: 80%;
    /* border: 1px solid white; */

    > p {
        line-height: 12px;
        font-size: 11px;
        font-weight: 500;
        color: #fff;
        margin-left: 2px;
        margin-bottom: 2px;
        /* font-family: Arial, sans-serif; */

        > span {
            font-size: 12px;
            color: #fff;
            font-weight: bold;
        }

    }
`
const ReturnNordersContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 0.073;
    height: 80%;
    /* border: 1px solid white; */

    > p {
        line-height: 12px;
        font-size: 11px;
        color: #fff;
        margin-left: 2px;
        margin-bottom: 2px;
        /* font-family: Arial, sans-serif; */

        > span {
            font-size: 13px;
            color: #fff;
            font-weight: bold;
        }

    }
`
const CartContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 0.063;
    height: 80%;
    /* border: 1px solid white; */
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: center;
    align-items: center;
    text-align: center;
    /* border: 1px solid white; */
    width: auto;
    margin-block-end: 0em;
    margin-block-start: 0em;
    padding-block-end: 0em;
    padding-block-start: 0em;
`
export const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* border: 1px solid white; */
    width: 100%;
    margin-block-end: 0em;
    margin-block-start: 0em;
    padding-block-end: 0em;
    padding-block-start: 0em;
    

`
export const FormInput = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    height: 33px;
    width: 555px;
    /* border left redius */
    border-radius: 0px 0px 0px 0px;
    border: 1px solid #ccc;
    outline: none;
    border: none;
    font-size: 1.2rem;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    padding-left: 10px;
    /* opacity: 0.8 */
    /* border: 1px solid white; */

`
export const FormButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 34px;
    width: 50px;
    background-color: #A71642;
    color: white;
    font-size: 1.7rem;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    border-radius: 0px 3px 3px 0px;
    border: none;
    outline: none;
    cursor: pointer;
    /* font-weight: 50; */
`
const CustomSearch = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 34px;
    width: 50px;
    border: none;
    outline: none;
    background-color: #DADADA;
    
    border-radius: 3px 0px 0px 3px;
    
    cursor: pointer;

    > p {
        font-size: 0.7rem;
        padding-left: 5px;
        color: #333;
    }

`