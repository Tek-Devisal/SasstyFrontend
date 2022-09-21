import React, {useState} from 'react'
import styled from 'styled-components';
import ReactImageZoom from 'react-image-zoom';


const ProductGallery = () => {

    const [image] = useState(["Images/sl1.jpg", "Images/sl2.jpg", "Images/sl3.jpg", "Images/sl4.jpg"]);
    const [selectedImg, setSelectedImg] = useState(0);
  
    const handleClick = index => {
      setSelectedImg(index);
    };

    const props = {width: 400, height: 250, zoomWidth: 500, img: "1.jpg"};

  return (
    <div>
        <Container>
            {image.map((image, index) => (
                <ImageContainerSmall selectedImg id={index} onClick={() => handleClick(index)}>
                    <img src={image} width="100%" height="100%" alt="Product Item" />
                </ImageContainerSmall>
            ))}
            <ImageContainerMain>
                {/* <ReactImageZoom width="400px" height="250" zoomWidth="500" img={image[selectedImg]} /> */}
                <img style={{objectFit: 'cover', width: "100%", height:"100%"}}  src={image[selectedImg]} alt="Product" />
                </ImageContainerMain>
        </Container>
    </div>
  )
}

export default ProductGallery

const Container = styled.div`
  height: 60vh;
  width: 90vh;
  display: grid;
  /* background-color: red; */
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: min-content 1fr;
  grid-gap: 1rem;
  margin: 0 2.1rem 0 2.1rem;
`;

const ImageContainerSmall = styled.div`
  grid-column: 1 / 2;
  background-color: #f2f2f2;
  width: 5rem;
  /* background color prop */
  /* border: ${props => props.selectedImg ? "1px solid red" : "1px solid blue"}; */
`;

const ImageContainerMain = styled.div`
  background-color: #f2f2f2;
  /* background-color: blue; */
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
`;

const Span = styled.div`
  font-style: italic;
  font-size: 12px;
  letter-spacing: 0.3px;
`;