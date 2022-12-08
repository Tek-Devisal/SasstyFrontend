import React, {useState} from 'react'
import styled from 'styled-components'

const ProductGallery2 = () => {

    const [activeImage, setActiveImage] = useState("Images/sl1.jpg")

  return (
    <ComponentWrapper>
        <MainImage>
            <img src={activeImage} alt='Selected' />
        </MainImage>
        <Sub>
            <SubImage onMouseEnter={()=>setActiveImage("Images/sl2.jpg")}><img src="Images/sl2.jpg"/></SubImage>
            <SubImage onMouseEnter={()=>setActiveImage("Images/sl3.jpg")}><img src="Images/sl3.jpg"/></SubImage>
            <SubImage onMouseEnter={()=>setActiveImage("Images/sl4.jpg")}><img src="Images/sl4.jpg"/></SubImage>
            <SubImage onMouseEnter={()=>setActiveImage("Images/sl5.jpg")}><img src="Images/sl5.jpg"/></SubImage>
            <SubImage onMouseEnter={()=>setActiveImage("Images/sl6.jpg")}><img src="Images/sl6.jpg"/></SubImage>
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