import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import HeaderTab from '../components/HeaderTab';
import ProductListings from '../components/ProductListings';
import Footer from '../components/Footer';
import axios from 'axios';

import { BASE_URL } from './Home';
import { Link, useParams } from "react-router-dom";
import MegaMenuChoiceContext from "../ContextAPI/MegaMenuContext"

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const ProductList = () => {

    // const accordionData = [
    //     {title: "Watches", content: ["Rolex", "Casio", "Titan", "Fossil", "Omega", "Citizen", "Tissot", "Breitling", "Seiko", "Tag Heuer", "Rolex", "Casio", "Titan", "Fossil", "Omega", "Citizen", "Tissot", "Breitling", "Seiko", "Tag Heuer"]},
    //     {title: "Home Appliance", content: ["Rice Cooker", "Microwave", "Refrigerator", "Washing Machine", "Air Conditioner", "Television", "Vacuum Cleaner", "Water Purifier", "Washing Machine", "Air Conditioner", "Television", "Vacuum Cleaner", "Water Purifier", "Washing Machine", "Air Conditioner", "Television", "Vacuum Cleaner", "Water Purifier"]},
    //     {title: "Mobile Phones", content: ["Samsung", "Apple", "Nokia", "OnePlus", "Xiaomi", "Sony", "HTC", "Lenovo", "Motorola", "Samsung", "Apple", "Nokia", "OnePlus", "Xiaomi", "Sony", "HTC", "Lenovo", "Motorola"]},
    //     {title: "Kitchen", content: ["Fridge", "Mixer", "Oven", "Toaster", "Juicer", "Grinder", "Blender", "Mixer", "Oven", "Toaster", "Juicer", "Grinder", "Blender", "Mixer", "Oven", "Toaster", "Juicer", "Grinder", "Blender"]},
    //     {title: "Tables and Chairs", content: ["Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs"]},
    //     {title: "Books and Pens", content: ["Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens"]},
    //     {title: "Furniture", content: ["Sofa", "Egonomic Chair", ]},
    //     {title: "Sports", content: ["Ball", "Soccer Ball", "Basketball", "Football", "Volleyball", "Tennis Ball", "Badminton", "Table Tennis", "Golf Ball", "Baseball", "Cricket Ball", "Bowling Ball", "Basketball", "Football", "Volleyball", "Tennis Ball", "Badminton", "Table Tennis", "Golf Ball", "Baseball", "Cricket Ball", "Bowling Ball"]},
    //     {title: "Electronics", content: ["Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer"]},
    //     {title: "Automobiles", content: ["Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike"]},
    //     {title: "Health and Beauty", content: ["Makeup", "Perfume", "Hair Care", "Skin Care", "Makeup", "Perfume", "Hair Care", "Skin Care", "Makeup", "Perfume", "Hair Care", "Skin Care", "Makeup", "Perfume", "Hair Care", "Skin Care", "Makeup", "Perfume", "Hair Care", "Skin Care", "Makeup", "Perfume", "Hair Care", "Skin Care"]},
    //     {title: "Books", content: ["Novel", "Poetry", "Biography", "Fiction", "Novel", "Poetry", "Biography", "Fiction", "Novel", "Poetry", "Biography", "Fiction", "Novel", "Poetry", "Biography", "Fiction", "Novel", "Poetry", "Biography", "Fiction", "Novel", "Poetry", "Biography", "Fiction"]},
    //     {title: "Fashion", content: ["Shirt", "T-Shirt", "Jeans", "Shorts", "Shirt", "T-Shirt", "Jeans", "Shorts", "Shirt", "T-Shirt", "Jeans", "Shorts", "Shirt", "T-Shirt", "Jeans", "Shorts", "Shirt", "T-Shirt", "Jeans", "Shorts", "Shirt", "T-Shirt", "Jeans", "Shorts"]},
    //     {title: "Sports", content: ["Ball", "Soccer Ball", "Basketball", "Football", "Volleyball", "Tennis Ball", "Badminton", "Table Tennis", "Golf Ball", "Baseball", "Cricket Ball", "Bowling Ball", "Basketball", "Football", "Volleyball", "Tennis Ball", "Badminton", "Table Tennis", "Golf Ball", "Baseball", "Cricket Ball", "Bowling Ball"]},
    //     {title: "Electronics", content: ["Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer"]},

    //   ]

    const {id} = useParams()

    console.log("Link Id: ",id)

    // const getSubSubURL = () => { 
    //     const { subcategoryid, subsubcatURL } = useContext(MegaMenuChoiceContext);
    //  }
    const { subcategoryid, subsubcatURL } = useContext(MegaMenuChoiceContext);


    useEffect(() => {

    }, [])
    

    const [categories, setCategories] = useState([])
    const [specificProduct, setSpecificProduct] = useState()

    const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    console.log("sub category id", subcategoryid)

    const getSubId = (id) => { 
        localStorage.setItem("Specific product id", id)
     }

          //   Fetch All categories
    const fetchCategories = async () => {
    try {
    //   const items = await axios.get(BASE_URL + "/v1/fetchProducts/1/");
        const data = await axios.get(BASE_URL + "/products/v1/fetchCategories/");
        setCategories(data.data)
        console.log("Main Categories: ",data.data)
    } catch (error) {
        console.log(error)
    }
    }

    const fetchProductsForSpecificSubSubCategory = async () => {
    try {
    //   const items = await axios.get(BASE_URL + "/v1/fetchProducts/1/");
        const data = await axios.get(`${BASE_URL}/products/v1/fetchProductsForSpecificSubSubCategory/${subsubcatURL}`);
        setSpecificProduct(data.data)
        console.log("Sub category data: ",data.data)
    } catch (error) {
        console.log(error)
    }
    }

    useEffect(() => {
    fetchCategories()
    fetchProductsForSpecificSubSubCategory()
    }, [])

  return (
    <>
        <Navbar />
        <PageWrapper>
            <LeftSidebar>
                <AccordionWrapper>
                {/* {categories?.map(({name, id})=>(<HeaderTab title={name} categoryId={id} key={id}/>))} */}
                {/* <Box sx={{ width: 350, marginTop: 10, marginLeft: 1 }}> */}
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    // getAriaValueText= "5"
                />
                {/* </Box> */}
                </AccordionWrapper>
                
            </LeftSidebar>
            <MainContent>
                {specificProduct?.map(subcategoryitem => (<Link  onClick={()=>{getSubId(subcategoryitem.id)}} to="/product-details" key={subcategoryitem.id}><ProductListings items={subcategoryitem}/></Link>))}
                {/* <ProductListings /> */}
                <SortPanel>
                    <p>Sort</p>
                    <Panel>
                        <p>Popular</p>
                        <p>|</p>
                        <p>Newest</p>
                        <p>|</p>
                        <p>Most Reviews</p>
                        <p>|</p>
                        <p>Price</p>
                    </Panel>
                </SortPanel>
                <ProductListings />
                <ProductListings />
                <ProductListings />
                <ProductListings />
                <ProductListings />
                
            </MainContent>
        </PageWrapper>
        <Footer />
    </>
  )
}

export default ProductList

const PageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    /* align-items: center; */
    background-color: #FDFDFD;
    height: auto;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`
const LeftSidebar = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: #FDFDFD;
    width: 20%;
    
    @media only screen and (max-width: 600px) {
        width: 100%;
    }

`
const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    /* border: 1px solid red; */
    gap: 15px;
    /* flex: 0.75; */
    width: 80%;
    /* justify-content: center; */
    /* align-items: center; */
    padding-left: 20px;
    flex-wrap: wrap;
    background-color: #FDFDFD;

    a{
        text-decoration: none;
        color: black;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`
const AccordionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
    /* justify-content: center; */
    /* align-items: center; */
    /* width: 100%; */
    height: 500px;
    background-color: #fff;
    width: 100%;
    /* gap: 2px; */
    z-index: 1;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }

    @media only screen and (max-width: 600px) {
        height: 200px;
    }
`
const SortPanel = styled.div`
    width: 100%;
    max-height: 50px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 70px;
    margin-bottom: 30px;
    /* padding-top: 50px; */
    contain: content;
`
const Panel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 32px;
    width: 600px;
    border-radius: 5px;
    border: 1px solid #333;
    margin-left: 15px;
    line-height: 5px;
    opacity: 0.3;
    cursor: pointer;

    >p{
        margin-block-end: 3px;
        white-space: nowrap;
    }

    p:active, p:hover, p::selection{
        color: red;
        opacity: 1;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`