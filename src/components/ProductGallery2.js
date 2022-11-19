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
            <SubImage onClick={()=>setActiveImage("Images/sl2.jpg")}><img src="Images/sl2.jpg"/></SubImage>
            <SubImage onClick={()=>setActiveImage("Images/sl3.jpg")}><img src="Images/sl3.jpg"/></SubImage>
            <SubImage onClick={()=>setActiveImage("Images/sl4.jpg")}><img src="Images/sl4.jpg"/></SubImage>
            <SubImage onClick={()=>setActiveImage("Images/sl5.jpg")}><img src="Images/sl5.jpg"/></SubImage>
            <SubImage onClick={()=>setActiveImage("Images/sl6.jpg")}><img src="Images/sl6.jpg"/></SubImage>
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
        margin: 5px;
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
    width: 70px;
    height: 70px;
    margin: 10px;

    > img{
        height: 60px;
        width: 58px;
        margin: 5px;
    }
`