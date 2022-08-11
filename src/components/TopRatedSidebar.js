import React from 'react'
import styled from 'styled-components';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import { ComponentWrapper } from './ThirdSidebarCom';

const TopRatedSidebar = () => {
  return (
    <>
        <ComponentWrapper>
            <div style={{width: "90%", paddingLeft: "30px", borderBottom: "1px solid #B1B1B1"}}>
                <p style={{fontSize: "20px", fontWeight: 'bold', marginBottom: '10px'}}>Top Rated</p>
            </div>
            <Item>
                <LocationOnOutlinedIcon style={{color: "#333", fontSize: "70px", marginRight: "10px"}}/>
                <p style={{color: '#5F5D5D', fontSize: '18px', fontWight: 'bold'}}><span style={{fontSize: "17px", fontWeight: 'bold', color: '#FF2164'}}>$131.40</span><br/>Otam Remi Aperi</p>
            </Item>
            <Item>
                <LocationOnOutlinedIcon style={{color: "#333", fontSize: "70px", marginRight: "10px"}}/>
                <p style={{color: '#5F5D5D', fontSize: '18px', fontWight: 'bold'}}><span style={{fontSize: "17px", fontWeight: 'bold', color: '#FF2164'}}>$131.40</span><br/>Otam Remi Aperi</p>
            </Item>
            <Item>
                <LocationOnOutlinedIcon style={{color: "#333", fontSize: "70px", marginRight: "10px"}}/>
                <p style={{color: '#5F5D5D', fontSize: '18px', fontWight: 'bold'}}><span style={{fontSize: "17px", fontWeight: 'bold', color: '#FF2164'}}>$131.40</span><br/>Otam Remi Aperi</p>
            </Item>
            <Item>
                <LocationOnOutlinedIcon style={{color: "#333", fontSize: "70px", marginRight: "10px"}}/>
                <p style={{color: '#5F5D5D', fontSize: '18px', fontWight: 'bold'}}><span style={{fontSize: "17px", fontWeight: 'bold', color: '#FF2164'}}>$131.40</span><br/>Otam Remi Aperi</p>
            </Item>
        </ComponentWrapper>
    </>
  )
}

export default TopRatedSidebar

export const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    height: 463px;
    background-color: #fff;
    /* border-radius: 15px; */
    /* border: 2px solid #B1B1B1; */
    align-items: center;
    margin-bottom: 20px;
`
const Item = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    /* justify-content: space-around; */
    width: 90%;
    border-bottom: 1px solid #B1B1B1;
`