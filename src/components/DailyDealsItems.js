import React from 'react'
import styled from 'styled-components';
// import { styled } from '@mui/material/styles';

// import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';



const DailyDealsItems = () => {

// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//     height: 10,
//     borderRadius: 5,
//     [`&.${linearProgressClasses.colorPrimary}`]: {
//         backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
//     },
//     [`& .${linearProgressClasses.bar}`]: {
//         borderRadius: 5,
//         backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
//     },
//     }));

  return (
    <>
        <ComponentWrapper>
            <ProductImage>
                <img src="/Images/laptop.png" alt='Item' />
            </ProductImage>
            <ProductDetails>
                <h5 style={{fontSize: "24px"}}>Beatea Vitae Dicta</h5>
                <h2 style={{color: "#FF2164"}}>$120.00 <span style={{textDecoration: "line-through", color: "#C4BDBD", fontWeight: "400", fontSize: "16px"}}>$130.00</span></h2>
                <div className='Itemprogress'>
                    <p>Available: <span>21</span></p>
                    <p>Sold: <span style={{color: "black", fontWeight: "bold"}}>8</span></p>
                </div>
                <div className='Progressbar'></div>
                {/* <BorderLinearProgress variant="determinate" value={50} /> */}
                <p className='DTC1'>Hurry up!</p>
                <p className='OfferEnds'>Offer ends in: </p>
                <Counter>
                    <div>
                        <div className='Counter'>95</div>
                        <p>DAYS</p>
                    </div>
                    <div>
                        <div className='Counter'>63</div>
                        <p>HOURS</p>
                    </div>
                    <div>
                        <div className='Counter'>24</div>
                        <p>MINS</p>
                    </div>
                    <div>
                        <div className='Counter'>10</div>
                        <p>SEC</p>
                    </div>
                </Counter>
            </ProductDetails>

        </ComponentWrapper>
    </>
  )
}

export default DailyDealsItems

const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* width: 220px; */
    width: 23%;
    height: 100%;
    /* background-color: #c4bdbd; */
    /* border: 1px solid #C4BDBD; */
    /* margin-right: 20px; */
`
const ProductImage = styled.div`
    display: flex;
    flex: 0.4;
    justify-content: center;
    align-items: center;

    > img {
        height: 90%;
        width: 100%;
        background-size: cover;
    }
`
const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    flex: 0.6;
    background-color: #fff;
    align-items: center;
`
const Counter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* border: 1px solid red; */
    width: 100%;
    height: 20%;
    /* background-color: #B7B7BA; */
    margin-top: 10px;

    > div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* background-color: red; */
        height: 96%;
        width: 42px;
        /* margin-right: 10px; */
        
        > p{
            color: #8E8E8E;
        }
    }
`