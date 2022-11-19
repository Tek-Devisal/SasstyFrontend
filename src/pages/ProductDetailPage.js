import React,{useState} from 'react'
import Footer from '../components/Footer';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import TrendingItemsTwo from '../components/TrendingItemsTwo';
import DailyDealsItemsTwo from '../components/DailyDealsItemsTwo';
// import TrendingItemsHead from './Home'

// Material UI components
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { 
    Button
} from '@mui/material';
import ProductGallery from '../components/ProductGallery';
import { useFetch } from '../components/FetchAPI/useFetch';
import { BASE_URL } from './Home';
import ItemCounter from '../components/ItemCounter';
import { useStateValue } from '../components/BasketContex/StateProvider';
import ProductGallery2 from '../components/ProductGallery2';


const ProductDetailPage = () => {

    const [{basket}, dispatch] = useStateValue();

    const linkId = localStorage.getItem("Specific product id")

    const {data, isPending, error} = useFetch(`${BASE_URL}/products/v1/fetchSpecificProduct/${linkId}`);
    console.log("This is detailed data: ",data)
    console.log("Try",linkId)
    

    const [material, setMaterial] = React.useState('');

    const handleChange = (event) => {
        setMaterial(event.target.value);
    };

    const addToBasket = (myData) => { 
        // add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: myData.id,
                description: myData.description,
                price: myData.prize,
                discount: myData.discount,
                image: myData.img_1

        }
        })
        
     };

  return (
    <>
        <Navbar />
        <PageWrapper>
            {data?.map(details => (<MainContent key={details.id}>
                <ImageSection>
                    {/* <ProductGallery key={details.id}/> */}
                    <ProductGallery2 />
                </ImageSection>
                <ProductSection>
                    <p>{details.description}</p>
                    <p>GH₵{details.prize-(details.discount/100)*(details.prize)}</p>
                    <p><span>GH₵{details.prize}</span> {details.discount}% off</p>

                    <FormControl style={{marginBottom: 20}}  sx={{ m: 1, minWidth: 120, maxWidth: 200}}>
                        <InputLabel id="demo-simple-select-autowidth-label">Material</InputLabel>
                            <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={material}
                            onChange={handleChange}
                            autoWidth
                            label="Material"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Twenty</MenuItem>
                                <MenuItem value={21}>Twenty one</MenuItem>
                                <MenuItem value={22}>Twenty one and a half</MenuItem>
                            </Select>
                    </FormControl>
                    <ItemCounter />
                    <WelcomRowTwo>
                        <Button style={{whiteSpace: 'nowrap',width: "150px", borderRadius: "10px", backgroundColor: "#FF7A00", color: "#fff", textTransform: "inherit"}} variant="contained" size="large">
                            Buy now
                        </Button>
                        <Button onClick={()=>addToBasket(details)} style={{whiteSpace: 'nowrap',width: "150px", borderRadius: "10px", backgroundColor: "#F93C00", color: "#fff", textTransform: "inherit"}} variant="contained" size="large">
                            Add to cart
                        </Button>
                </WelcomRowTwo>
                <p>Customer Service Policy</p>
                </ProductSection>
            </MainContent>))}
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
    min-width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;
    /* border: 1px solid red; */
`
const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    padding-right: 200px;
    /* border: 1px solid red; */

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
    display: flex;
    flex: 50%;
    height: auto;
`
const ProductSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 50%;
    height: auto;

    > p:nth-child(2){
        font-size: 20px;
        font-weight: bold;
        /* margin-bottom: 3px; */
        margin-top: 10px;
        color: #F93C00;
    }

    > p:nth-child(3){
        color: #01032C;
        opacity: 0.5;
        font-size: 14px;
        margin-bottom: 10px;
    }

    > p:nth-child(3) > span{
        text-decoration: line-through;
    }

    > p:nth-child(4){
        margin-top: 10px;
    }


`
const WelcomRowTwo = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
    width: 320px;  
    margin-top: 20px;
    margin-bottom: 10px;
    /* border: 1px solid red; */
`