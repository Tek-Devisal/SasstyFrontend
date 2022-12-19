import React, {useState} from 'react'
import styled from 'styled-components'
import { BASE_URL } from '../pages/Home'

const ProductGallery2 = ({image1, image2, image3, image4, image5}) => {

    const [activeImage, setActiveImage] = useState(`${BASE_URL}${image1}`)
    console.log("THis is the image ",activeImage);

  return (
    <ComponentWrapper>
        <MainImage>
            <img src={activeImage} alt='Selected' />
        </MainImage>
        <Sub>
            <SubImage onMouseEnter={()=>setActiveImage(`${BASE_URL}${image1}`)}><img src={`${BASE_URL}${image1}`}/></SubImage>
            <SubImage onMouseEnter={()=>setActiveImage(`${BASE_URL}${image2}`)}><img src={`${BASE_URL}${image2}`}/></SubImage>
            <SubImage onMouseEnter={()=>setActiveImage(`${BASE_URL}${image3}`)}><img src={`${BASE_URL}${image3}`}/></SubImage>
            <SubImage onMouseEnter={()=>setActiveImage(`${BASE_URL}${image4}`)}><img src={`${BASE_URL}${image4}`}/></SubImage>
            <SubImage onMouseEnter={()=>setActiveImage(`${BASE_URL}${image5}`)}><img src={`${BASE_URL}${image5}`}/></SubImage>
        </Sub>
    </ComponentWrapper>
  )
}

export default ProductGallery2

const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    /* border: 1px solid red; */
    /* gap: 10px; */

    @media only screen and (max-width: 600px) {
    /* display: none; */
    width: 100%;
    /* flex-wrap: wrap; */
    height: auto;
    }
`
const MainImage = styled.div`
    width: 95%;
    height: 75%;
    /* border: 1px solid green; */
    margin: 10px;
    contain: content;

    >img{
        /* width: 100px;
        height: 100px; */
        margin: 0px;
        
        object-fit: contain;
    }

    @media only screen and (max-width: 600px) {
    /* display: none; */
    width: 100%;
    margin: 0px;
    /* flex-wrap: wrap; */
    height: auto;
    }

    >img{
        width: 100%;
        height: 100%;
        margin: 0px;
        margin-bottom: 20px;
        object-fit: contain;
    }
`
const Sub = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`
const SubImage = styled.div`
    border: 1px solid #DCDCDC;
    border-radius: 8px;
    width: 60px;
    height: 60px;
    margin: 10px;
    contain: content;

    @media only screen and (max-width: 600px) {
        margin: 5px;
    }

    &:hover{
        border: 2px solid #F0A1A1;
    }

    > img{
        height: 49px;
        width: 49px;
        object-fit: contain;
        margin: 4px;
    }

    
`