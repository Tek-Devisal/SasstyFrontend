import React from 'react'
import styled from 'styled-components';

const TopVendors = () => {
  return (
    <>
        <ComponentWrapper>
            <MainPic>
                <img src='/Images/laptop2.png' alt='Product Item'/>
            </MainPic>
            <PicOne>
                <img src='/Images/series.png' alt='Product Item'/>
            </PicOne>
            <PicTwo>
                <img src='/Images/series.png' alt='Product Item'/>
            </PicTwo>
            <ProductDetails>
                <img src='/Images/cart.png' alt='Product Item'/>
                <p style={{fontSize: "18px", lineHeight: "21px", fontWeight: "600"}}>Nicholas Mensah <br/><span style={{color: "#8F8E8E", fontSize: "14px", fontWeight: "400"}}>2 Products</span></p>
            </ProductDetails>
        </ComponentWrapper>
        
    </>
  )
}

export default TopVendors

const ComponentWrapper = styled.div`
    display: grid;
    /* flex-direction: column; */
    /* justify-content: space-between; */
    width: 220px;
    height: 220px;
    /* margin-top: 20px; */
    /* background-color: #c4bdbd; */
    /* border-radius: 10px; */
    margin-bottom: 20px;
    grid-template-columns:repeat(4, 1fr);
    grid-gap: 6px;
    /* grid-auto-columns: minmax(600px, auto); */

    @media only screen and (max-width: 600px) {
    /* display: none; */
    width: 45%;
    /* min-width: fit-content; */
    flex-wrap: wrap;
  }
`
const MainPic = styled.div`
    /* background-color: red; */
    grid-column: 1/4;
    grid-row: 1/3;
    /* border: 2px solid #E0E1E3; */
    border-radius: 5px;

    > img {
        height: 100%;
        width: 100%;

    }

`
const PicOne = styled.div`
    /* background-color: red; */
    /* border: 2px solid #E0E1E3; */
    border-radius: 5px;

    > img {
        height: 100%;
        width: 100%;
        
    }
`
const PicTwo = styled.div`
    /* border: 2px solid #E0E1E3; */
    border-radius: 5px;

    > img {
        height: 100%;
        width: 100%;
        
    }

`
const ProductDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* border: 2px solid #E0E1E3; */
    border-radius: 5px;
    grid-column: 1/5;
    grid-row: 3/15;
`