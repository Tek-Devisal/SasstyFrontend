import React from 'react'
import styled from 'styled-components';

const WomensClothsMenuView = () => {

    const accordionData = [
        {title: "Watches", data: [{id: 2, name: 'Rolex'}, {id: 3, name: 'Casio'}]}, //content: ["Rolex", "Casio", "Titan", "Fossil", "Omega", "Citizen", "Tissot", "Breitling", "Seiko", "Tag Heuer", "Rolex", "Casio", "Titan", "Fossil", "Omega", "Citizen", "Tissot", "Breitling", "Seiko", "Tag Heuer"]},
        {title: "Books", data: [{id: 4, name: 'Bugatti'}, {id: 5, name: 'Hey'}]},
        // {title: "Home Appliance", content: ["Rice Cooker", "Microwave", "Refrigerator", "Washing Machine", "Air Conditioner", "Television", "Vacuum Cleaner", "Water Purifier", "Washing Machine", "Air Conditioner", "Television", "Vacuum Cleaner", "Water Purifier", "Washing Machine", "Air Conditioner", "Television", "Vacuum Cleaner", "Water Purifier"]},
        // {title: "Mobile Phones", content: ["Samsung", "Apple", "Nokia", "OnePlus", "Xiaomi", "Sony", "HTC", "Lenovo", "Motorola", "Samsung", "Apple", "Nokia", "OnePlus", "Xiaomi", "Sony", "HTC", "Lenovo", "Motorola"]},
        // {title: "Kitchen", content: ["Fridge", "Mixer", "Oven", "Toaster", "Juicer", "Grinder", "Blender", "Mixer", "Oven", "Toaster", "Juicer", "Grinder", "Blender", "Mixer", "Oven", "Toaster", "Juicer", "Grinder", "Blender"]},
        // {title: "Tables and Chairs", content: ["Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs", "Tables", "Chairs"]},
        // {title: "Books and Pens", content: ["Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens", "Books", "Pens"]},
        // {title: "Furniture", content: ["Sofa", "Egonomic Chair", ]},
        // {title: "Sports", content: ["Ball", "Soccer Ball", "Basketball", "Football", "Volleyball", "Tennis Ball", "Badminton", "Table Tennis", "Golf Ball", "Baseball", "Cricket Ball", "Bowling Ball", "Basketball", "Football", "Volleyball", "Tennis Ball", "Badminton", "Table Tennis", "Golf Ball", "Baseball", "Cricket Ball", "Bowling Ball"]},
        // {title: "Electronics", content: ["Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer"]},
        // {title: "Automobiles", content: ["Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike", "Car", "Bike"]},
        // {title: "Health and Beauty", content: ["Makeup", "Perfume", "Hair Care", "Skin Care", "Makeup", "Perfume", "Hair Care", "Skin Care", "Makeup", "Perfume", "Hair Care", "Skin Care", "Makeup", "Perfume", "Hair Care", "Skin Care", "Makeup", "Perfume", "Hair Care", "Skin Care", "Makeup", "Perfume", "Hair Care", "Skin Care"]},
        // {title: "Books", content: ["Novel", "Poetry", "Biography", "Fiction", "Novel", "Poetry", "Biography", "Fiction", "Novel", "Poetry", "Biography", "Fiction", "Novel", "Poetry", "Biography", "Fiction", "Novel", "Poetry", "Biography", "Fiction", "Novel", "Poetry", "Biography", "Fiction"]},
        // {title: "Fashion", content: ["Shirt", "T-Shirt", "Jeans", "Shorts", "Shirt", "T-Shirt", "Jeans", "Shorts", "Shirt", "T-Shirt", "Jeans", "Shorts", "Shirt", "T-Shirt", "Jeans", "Shorts", "Shirt", "T-Shirt", "Jeans", "Shorts", "Shirt", "T-Shirt", "Jeans", "Shorts"]},
        // {title: "Sports", content: ["Ball", "Soccer Ball", "Basketball", "Football", "Volleyball", "Tennis Ball", "Badminton", "Table Tennis", "Golf Ball", "Baseball", "Cricket Ball", "Bowling Ball", "Basketball", "Football", "Volleyball", "Tennis Ball", "Badminton", "Table Tennis", "Golf Ball", "Baseball", "Cricket Ball", "Bowling Ball"]},
        // {title: "Electronics", content: ["Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer", "Mobile Phone", "Laptop", "Television", "Computer"]},

      ]

      accordionData.map((item)=>(
        console.log(item.title),
        item.data.map((hey)=>{
          console.log(hey.name)
        })
      ))

  return (
    <PageWrapper>
      <Subsublist>
        <p>Dresses</p>
        <p>Midi Dresses</p>
        <p>Maxi Dresses</p>
        <p>Mini Dresses</p>
        <p>Long Sleeve Dresses</p>
        <p>Bodycorn/Wrap Dresses</p>
        <p>Shirt Dressers</p>
      </Subsublist>
      <Subsublist>
        <p>Dresses</p>
        <p>Midi Dresses</p>
        <p>Maxi Dresses</p>
        <p>Mini Dresses</p>
        <p>Long Sleeve Dresses</p>
        <p>Bodycorn/Wrap Dresses</p>
        <p>Shirt Dressers</p>
      </Subsublist>
      <Subsublist>
        <p>Dresses</p>
        <p>Midi Dresses</p>
        <p>Maxi Dresses</p>
        <p>Mini Dresses</p>
        <p>Long Sleeve Dresses</p>
        <p>Bodycorn/Wrap Dresses</p>
        <p>Shirt Dressers</p>
      </Subsublist>
      <Subsublist>
        <p>Dresses</p>
        <p>Midi Dresses</p>
        <p>Maxi Dresses</p>
        <p>Mini Dresses</p>
        <p>Long Sleeve Dresses</p>
        <p>Bodycorn/Wrap Dresses</p>
        <p>Shirt Dressers</p>
      </Subsublist>
      <Subsublist>
        <p>Dresses</p>
        <p>Midi Dresses</p>
        <p>Maxi Dresses</p>
        <p>Mini Dresses</p>
        <p>Long Sleeve Dresses</p>
        <p>Bodycorn/Wrap Dresses</p>
        <p>Shirt Dressers</p>
      </Subsublist>
      <Subsublist>
        <p>Dresses</p>
        <p>Midi Dresses</p>
        <p>Maxi Dresses</p>
        <p>Mini Dresses</p>
        <p>Long Sleeve Dresses</p>
        <p>Bodycorn/Wrap Dresses</p>
        <p>Shirt Dressers</p>
      </Subsublist>
      <Subsublist>
        <p>Dresses</p>
        <p>Midi Dresses</p>
        <p>Maxi Dresses</p>
        <p>Mini Dresses</p>
        <p>Long Sleeve Dresses</p>
        <p>Bodycorn/Wrap Dresses</p>
        <p>Shirt Dressers</p>
      </Subsublist>
      <Subsublist>
        <p>Dresses</p>
        <p>Midi Dresses</p>
        <p>Maxi Dresses</p>
        <p>Mini Dresses</p>
        <p>Long Sleeve Dresses</p>
        <p>Bodycorn/Wrap Dresses</p>
        <p>Shirt Dressers</p>
      </Subsublist>
      <Subsublist>
        <p>Dresses</p>
        <p>Midi Dresses</p>
        <p>Maxi Dresses</p>
        <p>Mini Dresses</p>
        <p>Long Sleeve Dresses</p>
        <p>Bodycorn/Wrap Dresses</p>
        <p>Shirt Dressers</p>
      </Subsublist>

    </PageWrapper>
  )
}

export default WomensClothsMenuView

const PageWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  /* border: 1px solid red; */
  flex-direction: column;
  flex-wrap: wrap;
  contain: content;
`
const Subsublist = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  /* border: 1px solid green; */
  /* height: 100px; */
  padding: 20px;

  p:nth-child(1) {
    font-size: 15px;
    font-weight: bold;
    /* text-decoration: underline; */
    margin-bottom: 4px;
    color: black;
    cursor: pointer;

    &:hover {
            color: red;
            /* font-size: 20px; */
            /* border-bottom: 1px solid #66a3a3; */
        }
  }
  
  

  >p{
    margin-block-start: 0rem;
    margin-block-end: 0rem;
    padding-block-start: 0rem;
    padding-block-end: 0rem;
    color: #868686;
    font-size: 13px;
    cursor: pointer;
  
  }
`