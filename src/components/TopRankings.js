import React from 'react'
import styled from 'styled-components';

const TopRankings = () => {

    const LeftProduct =[
        {image:"/Images/ss1.jpg", price:"$27.21"},
        {image:"/Images/ss2.jpg", price:"$32.5"},
        {image:"/Images/ss3.jpg", price:"$53.1"}
    ]

    const RightProduct =[
        {image:"/Images/ss4.jpg", price:"$17.21"},
        {image:"/Images/ss5.jpg", price:"$54.5"},
        {image:"/Images/ss6.jpg", price:"$25.1"}
    ]


  return (
    <PageWrapper>
        <SectionOne>
            <div>Made in Ghana </div>
            <OneWraper>
            {LeftProduct.map(({image, price})=>(<ProductAndPrice key={price}>
                <img src={image}/>
                <p>{price}</p>
            </ProductAndPrice>))}
            </OneWraper>
        </SectionOne>
        <SectionTwo>
            <div>Newest</div>
            <OneWraper>
            {RightProduct.map(({image, price})=>(<ProductAndPrice key={price}>
                <img src={image}/>
                <p>{price}</p>
            </ProductAndPrice>))}
            </OneWraper>
        </SectionTwo>
    </PageWrapper>
  )
}

export default TopRankings

const PageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
    /* display: none; */
    width: 100%;
}
`

const SectionOne = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    background-color: #FDF5F0;
    /* height: auto; */
    width: 49%;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
    cursor: pointer;
    /* margin-top: 20px; */
    /* border: 1px solid red; */
`
const SectionTwo = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    background-color: #FDF5F0;
    /* height: auto; */
    width: 49%;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
    cursor: pointer;
`
const ProductAndPrice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    /* border: 1px solid red; */
    height: 90px;
    width: 90px;

    > img {
        height: 100%;
        width: 100%;
        border-radius: 5px;
    }
`
const OneWraper = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: space-around;
    gap: 10px;
`