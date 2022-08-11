import React from 'react'
import styled from 'styled-components';

const AdGrid = () => {
  return (
    <>
        <ComponentWrapper>
            <AdOne>
                <img src='/Images/ad8.png' alt='Product Item'/>
            </AdOne>
            <AdTwo>
                <img src='/Images/ad5.png' alt='Product Item'/>
            </AdTwo>
            <AdThree>
                <img src='/Images/ad7.png' alt='Product Item'/>
            </AdThree>
            <AdFour>
                <img src='/Images/ad6.png' alt='Product Item'/>
            </AdFour>
            <AdFive>
                <img src='/Images/ad8.png' alt='Product Item'/>
            </AdFive>
        </ComponentWrapper>
    </>
  )
}

export default AdGrid

const ComponentWrapper = styled.div`
    display: grid;
    /* flex-direction: column; */
    /* justify-content: space-between; */
    width: 100%;
    height: 100%;
    /* margin-top: 20px; */
    /* border-radius: 10px; */
    grid-template-columns:repeat(4, 1fr);
    grid-gap: 6px;
    
`
const AdOne = styled.div`
    /* border: 1px solid #E0E1E3; */
    border-radius: 5px;
    grid-column: 1/2;
    grid-row: 1/2;

    > img {
        height: 100%;
        width: 100%;
    }
`
const AdTwo = styled.div`
    /* border: 1px solid #E0E1E3; */
    border-radius: 5px;
    grid-column: 2/4;
    grid-row: 1/3;

    > img {
        height: 100%;
        width: 100%;
    }
`
const AdThree = styled.div`
    /* border: 1px solid #E0E1E3; */
    border-radius: 5px;

    > img {
        height: 100%;
        width: 100%;
    }
`
const AdFour = styled.div`
    /* border: 1px solid #E0E1E3; */
    border-radius: 5px;

    > img {
        height: 100%;
        width: 100%;
    }
`
const AdFive = styled.div`
    /* border: 1px solid #E0E1E3; */
    border-radius: 5px;

    > img {
        height: 100%;
        width: 100%;
    }
`