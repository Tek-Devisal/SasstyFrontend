import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
import MegaMenuChoiceContext from "../ContextAPI/MegaMenuContext"


const Accordion = ({title, content}) => {

    const [isActive, setIsActive] = useState(false)
    const { openMenu, setOpenMenu } = useContext(MegaMenuChoiceContext);

    
  return (
    <div>
         <AccordionContainer>
            <AccordionTitle  onClick={()=>{setIsActive(!isActive)}}>
                <Title>
                    <p 
                        onMouseEnter={()=>{setOpenMenu(true)}}
                        onMouseLeave={()=>{setOpenMenu(false)}}
                        >
                        {title}</p>
                </Title>
                <Espansion><p>{isActive? <KeyboardArrowUpIcon />:<KeyboardArrowDownIcon/>}</p></Espansion>
            </AccordionTitle>
            {isActive && <AccordionContent key={title}>
            <Link to="/product-list">{content.map(element => <p key={title}>{element}</p>)}</Link>
            </AccordionContent>}
        </AccordionContainer>
        
    </div>
  )
}

export default Accordion;

const AccordionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid #E0E0E0;
    /* height: 12vh; */
    /* background-color: black; */
    /* margin-bottom: 1.5vh; */
    /* position: fixed; */
    /* border: 2px solid green; */
`
const AccordionTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 100%;
    background-color: #F7F7F7;
    cursor: pointer;
    /* margin-left: -20px;
    margin-right: -20px; */
    /* margin-bottom: 10vh; */
    /* border: 1px solid #333; */
`
const AccordionContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    
    width: 100%;
    height: auto;
    background-color: #fff;
    /* margin-bottom: 2vh; */
    margin-top: 0.2vh;
    /* border: 1px solid white; */

    > a {
        color: #FF2164;
        padding: 10px;
        padding-left: 50px;
        font-size: 15px;
        font-weight: 400;
        line-height: 1.5;
        cursor: pointer;
        white-space: nowrap;
        /* margin-top: 25px; */
        text-decoration: none;
        font-family: 'Noto Sans', sans-serif;

        /* &:hover {
            color: #333;
            text-decoration: underline;
        } */
    }

    /* > p {
        color: #333;
        padding: 10px;
        padding-left: 50px;
        font-size: 14px;
        font-weight: 400;
        line-height: 0.4;
        cursor: pointer;
    } */
`
const Title = styled.div`
    display: flex;
    /* border: 1px solid yellow; */
    padding-left: 30px;

    > p {
        font-size: 17px;
        color: #333;
    }
`
const Espansion = styled.div`
    /* display: flex; */
    padding-right: 20px;
    /* border: 1px solid white; */
    /* height: 70px; */
    

    > p {
        margin-block-start: 0em;
        margin-block-end: 0em;
        padding-block-start: 0em;
        padding-block-end: 0em;
        color: black;
        cursor: pointer;
        font-size: 2.5rem;
    }
`
// const MegaMenu = styled.div`
//     display: relative;
//     width: 500px;
//     height: 500px;
//     border: 1px solid red;
// `