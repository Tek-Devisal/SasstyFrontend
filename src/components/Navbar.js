import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import NavbarTwo from './NavbarTwo';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
// import {LocationOnOutlinedIcon } from '@mui/icons-material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import {Grid, Box, Typography} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import CartIcon from './CartIcon';
import { UserContext } from '../ContextAPI/UserContext';
import {motion} from 'framer-motion'
import { Slide } from 'react-burger-menu';
import MegaMenuStateContext from '../ContextAPI/MegaMenuContext';
import axios from 'axios';
import { BASE_URL } from '../pages/Home';


const Navbar = () => {

    const { userInfo, authTokens } = useContext(UserContext);
    const { setAllcategory } = useContext(MegaMenuStateContext);

    const [isOpen, setIsOpen] = useState(false)



    const fetchAllCategories = async () => {
        try {
          //   const items = await axios.get(BASE_URL + "/v1/fetchProducts/1/");
          const allcategorydata = await axios.get(
            `${BASE_URL}/products/v1/fetchCategories/`
          );
          setAllcategory(allcategorydata.data);
          console.log("All catogory ", allcategorydata.data);
        } catch (error) {
          console.log(error);
        }
    };

    useEffect(() => {
        fetchAllCategories();
    }, [])
    


  return (
    <>
    <NavbarContainer>
        <LogoContainer>
            <Link to="/"><img src="/Images/sasstylogo3.png" alt="logo" /></Link>
        </LogoContainer>
        {authTokens && <DeliveryLocationContainer>
            {/* <LocationOnOutlinedIcon style={{color: "white", fontSize: "16px", marginBottom: "2px"}} /> */}
            {/* <Link to="/landing"><Typography><span>Sell on</span><br/> Sassty</Typography></Link> */}
            <Typography sx={{color: '#fff', ml: 3}}>Track</Typography>
            <ArrowDropDownIcon style={{color: "white", marginTop: "2px"}} />
        </DeliveryLocationContainer>}
        <SearchBarContainer>
            <FormContainer>
                <Form>
                    <CustomSearch>
                        <Typography>All</Typography>
                        <ArrowDropDownIcon style={{color: "black", marginTop: "2px"}} />
                    </CustomSearch>
                    <FormInput type="text" />
                    <FormButton>
                        <SearchSharpIcon style={{color: "#fff"}}/>
                    </FormButton>
                </Form>
            </FormContainer>
        </SearchBarContainer>
        {/* <FlagContainer>
            <Link to="/listings">Sell On Sassty</Link>
        </FlagContainer> */}
        <FlagContainer>
            {/* <img style={{height: "17px", width: "25px"}} src="/Images/ghflag.png" alt="flag" /> */}
            {/* <Link to="/listings"><a>Sell On Sassty</a></Link> */}
            {/* <Typography>Sell on Sassty</Typography> */}
            <Link to="/landing"><Typography ><span>Sell on</span> Sassty</Typography></Link>
            {/* <Typography sx={{color: '#fff', ml: 3}}>Track</Typography> */}
            
        </FlagContainer>
        <SignInContainer>
            <Typography>Hello, Sign in<br/><span>Account & List</span></Typography>
            <ArrowDropDownIcon style={{color: "white", marginTop: "2px"}} />
        </SignInContainer>
        {authTokens && <ReturnNordersContainer>
            <Typography>Return <br/><span>& Orders</span></Typography>
        </ReturnNordersContainer>}
        <CartContainer>
            <Link to="/cart">
                <CartIcon />
            </Link>
        </CartContainer>
    </NavbarContainer>
    {/* <NavbarTwo /> */}

    <MobileViewNavbarContainer>
        <OpenLinksButton closeBtn = {isOpen} onClick={()=> {setIsOpen(!isOpen)}}>
                {isOpen ? <>&#10005;</> : <>&#8801;</>}
        </OpenLinksButton>
        {isOpen && <MenuItemsContainer>
        <motion.div initial={{x:-250}} animate={{x: 0}} transition={{type: 'tween', duration: 1, damping: 5, stiffness: 20}} style={{width: '80%', height: '100%', backgroundColor: '#fff', contain: 'content', overflow: 'scroll'}}>
            {/* {range.map(c=><p>{c}</p>)} */}
            <MobileListContainer>
                <h5>Hello, Sign In</h5>
                <Link to='/'>Home</Link>
                <p>Browing History</p>
                <p>Orders</p>
                <p>Track</p>
                <p>Cart</p>
                <p>Customer Service</p>
                <Divider style={{ backgroundColor: "#6605B8", fontSize: 2, marginBottom: 20 }}  sx={{fontSize: 1}}/>
                <h5>Explore</h5>
                {/* <Divider style={{ backgroundColor: "#6605B8", fontSize: 2, marginBottom: 20 }} /> */}
                <Link to="categorymobile">All Categories</Link>
            </MobileListContainer>
        </motion.div>
        <div onClick={()=> {setIsOpen(!isOpen)}} style={{fontSize: 35, zIndex: 3, marginLeft: 15, color: 'white'}}>
            {isOpen ? <>&#10005;</> : <>&#8801;</>}
        </div>
    </MenuItemsContainer>}
    </MobileViewNavbarContainer>



    </>
  )
}

export default Navbar

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    top: 0;
    left: 0;
    height: 54px;
    width: 100%;
    /* width: 1200px!important; */
    min-width: 1280px;
    /* border: 4px solid blue; */
    box-sizing: border-box;
    position: relative;
    background-color: #FF2164;
    padding-right: 10px;
    padding-left: 10px;

    @media only screen and (max-width: 600px) {
        display: none;
    }
    /* overflow: scroll; */
`
const MobileListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 50px;
    margin-right: 20px;

    > p{
        font-size: 18px;
        line-height: 2.5rem;
    }
    
    > h5{
        margin-bottom: 30px;
    }

    > h5:nth-child(2){
        margin-bottom: 0px;
    }

    >a{
        text-decoration: none;
        color: inherit;
    }
`

const MobileViewNavbarContainer = styled.div`
    display: none;
    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: row;
        /* justify-content: space-around; */
        align-items: center;
        top: 0;
        left: 0;
        height: 60px;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        background-color: #FF2164;
        padding-right: 10px;
        padding-left: 10px;
        padding-bottom: 20px;
    }
`
const OpenLinksButton = styled.div`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: ${(props) => (props.closeBtn ? 'transparent' : '#fff')};
    font-size: 45px;
    cursor: pointer;
    z-index: 10;
`
const MenuItemsContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: #E4E4E4;
    z-index: 5;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
    /* box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px; */
`

const LogoContainer = styled.div`
    /* flex: 0.083; */
    /* border: 1px solid white; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 85%;

    > a img {
        height: 37px;
        width: 110px;
    }
`
const DeliveryLocationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    /* flex: 0.074; */
    height: 80%;
    /* border: 1px solid white; */
    padding: 2px 5px 7px 5px;
    cursor: pointer;
    
    >a{
        text-decoration: none;
    }

    >a p {
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
    /* flex: 0.45; */
    /* border: 1px solid white; */
    height: 80%;
    /* width: auto; */

`
const FlagContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* flex: 0.05; */
    height: 80%;
    cursor: pointer;
    /* border: 1px solid white; */

    a{
        line-height: 12px;
        font-size: 15px;
        font-weight: 500;
        color: #fff;
        white-space: nowrap;
        text-decoration: none;
        /* margin-left: 2px; */
        /* margin-bottom: 2px; */
    }
`
const SignInContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* flex: 0.093; */
    height: 80%;
    cursor: pointer;
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
    /* flex: 0.073; */
    height: 80%;
    cursor: pointer;
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
    /* flex: 0.063; */
    height: 80%;
    cursor: pointer;
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
    height: 33px;
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