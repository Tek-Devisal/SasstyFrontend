import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import HeaderTab from '../components/HeaderTab';
import ProductListings from '../components/ProductListings';


const ProductList = () => {

    const accordionData = [
        {title: "Watches", content: ["Rolex", "Casio", "Titan", "Fossil", "Omega", "Citizen", "Tissot", "Breitling", "Seiko", "Tag Heuer", "Rolex", "Casio", "Titan", "Fossil", "Omega", "Citizen", "Tissot", "Breitling", "Seiko", "Tag Heuer"]},
        {title: "Home Appliance", content: ["Rice Cooker", "Microwave", "Refrigerator", "Washing Machine", "Air Conditioner", "Television", "Vacuum Cleaner", "Water Purifier", "Washing Machine", "Air Conditioner", "Television", "Vacuum Cleaner", "Water Purifier", "Washing Machine", "Air Conditioner", "Television", "Vacuum Cleaner", "Water Purifier"]},
        {title: "Mobile Phones", content: ["Samsung", "Apple", "Nokia", "OnePlus", "Xiaomi", "Sony", "HTC", "Lenovo", "Motorola", "Samsung", "Apple", "Nokia", "OnePlus", "Xiaomi", "Sony", "HTC", "Lenovo", "Motorola"]},
        {title: "Kitchen", content: ["Fridge", "Mixer", "Oven", "Toaster", "Juicer", "Grinder", "Blender", "Mixer", "Oven", "Toaster", "Juicer", "Grinder", "Blender", "Mixer", "Oven", "Toaster", "Juicer", "Grinder", "Blender"]},
        {title: "Tables and Chairs", content: ["Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs"]},
        {title: "Books and Pens", content: ["Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens"]},
        {title: "Furniture", content: ["Sofa", "Egonomic Chair", ]},
        {title: "Sports", content: ["Ball", "Soccer Ball", "Basketball", "Football", "Volleyball", "Tennis Ball", "Badminton", "Table Tennis", "Golf Ball", "Baseball", "Cricket Ball", "Bowling Ball", "Basketball", "Football", "Volleyball", "Tennis Ball", "Badminton", "Table Tennis", "Golf Ball", "Baseball", "Cricket Ball", "Bowling Ball"]},
        {title: "Electronics", content: ["Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer"]},
        {title: "Automobiles", content: ["Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike"]},
        {title: "Health and Beauty", content: ["Makeup", "Perfume", "Hair Care", "Skin Care", "Makeup", "Perfume", "Hair Care", "Skin Care", "Makeup", "Perfume", "Hair Care", "Skin Care", "Makeup", "Perfume", "Hair Care", "Skin Care", "Makeup", "Perfume", "Hair Care", "Skin Care", "Makeup", "Perfume", "Hair Care", "Skin Care"]},
        {title: "Books", content: ["Novel", "Poetry", "Biography", "Fiction", "Novel", "Poetry", "Biography", "Fiction", "Novel", "Poetry", "Biography", "Fiction", "Novel", "Poetry", "Biography", "Fiction", "Novel", "Poetry", "Biography", "Fiction", "Novel", "Poetry", "Biography", "Fiction"]},
        {title: "Fashion", content: ["Shirt", "T-Shirt", "Jeans", "Shorts", "Shirt", "T-Shirt", "Jeans", "Shorts", "Shirt", "T-Shirt", "Jeans", "Shorts", "Shirt", "T-Shirt", "Jeans", "Shorts", "Shirt", "T-Shirt", "Jeans", "Shorts", "Shirt", "T-Shirt", "Jeans", "Shorts"]},
        {title: "Sports", content: ["Ball", "Soccer Ball", "Basketball", "Football", "Volleyball", "Tennis Ball", "Badminton", "Table Tennis", "Golf Ball", "Baseball", "Cricket Ball", "Bowling Ball", "Basketball", "Football", "Volleyball", "Tennis Ball", "Badminton", "Table Tennis", "Golf Ball", "Baseball", "Cricket Ball", "Bowling Ball"]},
        {title: "Electronics", content: ["Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer"]},

      ]

  return (
    <>
        <Navbar />
        <PageWrapper>
            <LeftSidebar>
                <AccordionWrapper>
                    {accordionData.map(({ title, content})=>(<HeaderTab title={title} content={content} key={title}/>))}
                </AccordionWrapper>
                
            </LeftSidebar>
            <MainContent>
                <ProductListings />
                <ProductListings />
                <ProductListings />
                <ProductListings />
                <ProductListings />
                <ProductListings />
                <ProductListings />
                <ProductListings />
                <ProductListings />
                <ProductListings />
            </MainContent>
        </PageWrapper>
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