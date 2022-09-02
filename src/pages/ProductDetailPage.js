import React from 'react'
import Footer from '../components/Footer';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import TrendingItemsTwo from '../components/TrendingItemsTwo';
import DailyDealsItemsTwo from '../components/DailyDealsItemsTwo';
// import TrendingItemsHead from './Home'

const ProductDetailPage = () => {
  return (
    <>
        <Navbar />
        <PageWrapper>
            <MainContent>
                <ImageSection>

                </ImageSection>
                <ProductSection>

                </ProductSection>
            </MainContent>
            <TrendingItemsHead>
                <div style={{height: "104%", width: "200px", backgroundColor: "#01032C"}}>
                    <p>TRENDIND ITEMS</p>
                </div>
            </TrendingItemsHead>
            <RelatedContentOne>
                <TrendingItemsTwo/>
                <TrendingItemsTwo/>
                <TrendingItemsTwo/>
                <TrendingItemsTwo/>
                <TrendingItemsTwo/>
                <TrendingItemsTwo/>
            </RelatedContentOne>

            <DailyDeals>
                <div style={{height: "103%", width: "150px", borderBottom: "2px solid #F93C00"}}>
                    <p>DAILY DEALS</p>
                </div>
            </DailyDeals>
            <RelatedContentTwo>
            <DailyDealsItemsTwo />
                <DailyDealsItemsTwo />
                <DailyDealsItemsTwo />
                <DailyDealsItemsTwo />
                <DailyDealsItemsTwo />
                <DailyDealsItemsTwo />
            </RelatedContentTwo>
        </PageWrapper>
        <Footer />
    </>
  )
}

export default ProductDetailPage

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    background-color: #FDFDFD;
    height: auto;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;
    /* border: 1px solid red; */
`
const MainContent = styled.div`
    display: flex;
    flex-direction: row;
`
const RelatedContentOne = styled.div`
    display: flex;
    justify-content: space-between;
    height: 300px;
    margin-top: 20px;
    width: 98%;
    /* border: 1px solid red; */
    /* padding-bottom: 20px; */
    /* justify-content: center; */
    /* transform: skew(20deg); */
    background-color: #fff;
`

const RelatedContentTwo = styled.div`
    display: flex;
    justify-content: space-between;
    height: 300px;
    margin-top: 20px;
    margin-bottom: 50px;
    width: 98%;
    /* border: 1px solid red; */
    /* padding-bottom: 20px; */
    /* justify-content: center; */
    /* transform: skew(20deg); */
    background-color: #fff;
`

const TrendingItemsHead = styled.div`
    display: flex;
    height: 50px;
    width: 98%;
    justify-content: space-between;
    /* transform: skew(20deg); */
    background-color: #fff;
    border-bottom: 2px solid #C4BDBD;
    margin-top: 80px;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px 5px 0px 0px;
    }

    > div > p{
        /* margin-top: 25px; */
        font-weight: bold;
        font-size: 20px;
        color: #fff;
    }
 `
const DailyDeals = styled.div`
    display: flex;
    height: 64px;
    width: 98%;
    /* justify-content: center; */
    /* transform: skew(20deg); */
    background-color: #fff;
    border-bottom: 2px solid #C4BDBD;

    > div > p{
        margin-top: 25px;
        font-weight: bold;
        font-size: 20px;
    }
`
const ImageSection = styled.div`

`
const ProductSection = styled.div`
    
`