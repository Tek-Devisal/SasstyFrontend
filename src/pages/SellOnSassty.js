import React from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const SellOnSassty = () => {
  return (
    <>
        <Navbar />
        <PageWrapper>
            <PageHeader>
                <p>Sell iphone 12 Pro Max</p>
                <p>Get more for your iphone 13 Pro Max trade-in when you sell on Sassty</p>
            </PageHeader>
            <ProductListing>
                <Prodetail></Prodetail>
                <CreateListing></CreateListing>
            </ProductListing>
            <Policies>
                <p><span>Seller’s Policies<br/></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id tristique nunc semper pretium ipsum eu. Neque sed velit urna, auctor vehicula sit. Proin posuere posuere proin aliquet donec risus volutpat. Aliquet nibh est lorem sed vel consequat, ornare malesuada aliquet. Velit, euismod ut volutpat id nullam vitae purus netus urna. Mattis tincidunt ut odio cursus dolor nec</p>
                <p><span>Fare Policies<br/></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id tristique nunc semper pretium ipsum eu. Neque sed velit urna, auctor vehicula sit. Proin posuere posuere proin aliquet donec risus volutpat. Aliquet nibh est lorem sed vel consequat, ornare malesuada aliquet. Velit, euismod ut volutpat id nullam vitae purus netus urna. Mattis tincidunt ut odio cursus dolor nec</p>
            </Policies>
            <PageMid>
                <p>The only best place to sell your products is SASSTY</p>
                <p>Swappa is the best place to sell your Apple iPhone 13 Pro Max because you get paid what it's actually worth.</p>
            </PageMid>
            <Policies>
                <p><span>Seller’s Policies<br/></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id tristique nunc semper pretium ipsum eu. Neque sed velit urna, auctor vehicula sit. Proin posuere posuere proin aliquet donec risus volutpat. Aliquet nibh est lorem sed vel consequat, ornare malesuada aliquet. Velit, euismod ut volutpat id nullam vitae purus netus urna. Mattis tincidunt ut odio cursus dolor nec</p>
                <p><span>Fare Policies<br/></span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id tristique nunc semper pretium ipsum eu. Neque sed velit urna, auctor vehicula sit. Proin posuere posuere proin aliquet donec risus volutpat. Aliquet nibh est lorem sed vel consequat, ornare malesuada aliquet. Velit, euismod ut volutpat id nullam vitae purus netus urna. Mattis tincidunt ut odio cursus dolor nec</p>
            </Policies>
        </PageWrapper>
        <Footer />
    </>
  )
}

export default SellOnSassty

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    
    align-items: center;
    background-color: #FDFDFD;
    height: auto;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;
    /* border: 1px solid red; */
`
const PageHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100px;
    /* border: 1px solid red; */
    line-height: 30px;

    >p:nth-child(1){
        font-weight: 700;
    }

`
const ProductListing = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: 400px;
    margin-bottom: 50px;
    /* border: 1px solid red; */
`

const Prodetail =styled.div`
    display: flex;
    flex-direction: column;
    width: 47%;
    height: 90%;
    border-radius: 15px;
    border: 1px solid #333;
`

const CreateListing = styled.div`
    display: flex;
    flex-direction: column;
    width: 47%;
    height: 90%;
    border-radius: 15px;
    border: 1px solid #333;
`
const Policies = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: 250px;
    gap: 40px;
    /* border: 1px solid red; */

    > p > span {
        font-size: 18px;
        font-weight: bold;
        /* line-height: 20px; */
        /* margin-bottom: 40px; */
    }
`
const PageMid = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 150px;
    background-color: #F93C0033;
    /* border: 1px solid red; */
    line-height: 30px;

    >p:nth-child(1){
        font-weight: 700;
    }
`
