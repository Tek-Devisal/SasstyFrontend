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

    const { subcategoryid } = useContext(MegaMenuChoiceContext);

    const [categories, setCategories] = useState([])
    const [specificProduct, setSpecificProduct] = useState()

    console.log("sub category id", subcategoryid)

    const getSubId = (id) => { 
        localStorage.setItem("hey", id)
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

    const fetchProductsForSpecificSubCategory = async () => {
    try {
    //   const items = await axios.get(BASE_URL + "/v1/fetchProducts/1/");
        const data = await axios.get(`${BASE_URL}/products/v1/fetchProductForSpecificSubCategory/${localStorage.getItem("Sub-category id")}`);
        setSpecificProduct(data.data)
        console.log("Sub category data: ",data.data)
    } catch (error) {
        console.log(error)
    }
    }

    useEffect(() => {
    fetchCategories()
    fetchProductsForSpecificSubCategory()
    }, [])

  return (
    <>
        <Navbar />
        <PageWrapper>
            <LeftSidebar>
                <AccordionWrapper>
                {categories?.map(({name, id})=>(<HeaderTab title={name} categoryId={id} key={id}/>))}
                </AccordionWrapper>
                
            </LeftSidebar>
            <MainContent>
                {specificProduct?.map(subcategoryitem => (<Link onClick={()=>{getSubId(subcategoryitem.id)}} to="/product-details" key={subcategoryitem.id}><ProductListings items={subcategoryitem}/></Link>))}
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
`
const LeftSidebar = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    background-color: #FDFDFD;
    width: 20%;
    

`
const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    /* border: 1px solid red; */
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
`
const AccordionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
    /* justify-content: center; */
    /* align-items: center; */
    /* width: 100%; */
    height: 500px;
    background-color: #B7B7BA;
    width: 100%;
    /* gap: 2px; */
    z-index: 1;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
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
    width: 450px;
    border-radius: 5px;
    border: 1px solid #333;
    margin-left: 15px;
    opacity: 0.3;
    cursor: pointer;

    >p{
        margin-block-end: 3px;
    }

    p:active, p:hover, p::selection{
        color: red;
        opacity: 1;
    }

`