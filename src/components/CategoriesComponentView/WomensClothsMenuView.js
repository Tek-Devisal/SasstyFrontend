import React, { useContext } from 'react'
import styled from 'styled-components';
import MegaMenuStateContext from '../../ContextAPI/MegaMenuContext';
import { Link } from 'react-router-dom';

const WomensClothsMenuView = () => {

  const { subcategoryinfo, setSubsubcatURL } = useContext(MegaMenuStateContext);

    const accordionData = [
        {title: "Watches", data: [{id: 2, name: 'Rolex'}, {id: 3, name: 'Casio'}]}, //content: ["Rolex", "Casio", "Titan", "Fossil", "Omega", "Citizen", "Tissot", "Breitling", "Seiko", "Tag Heuer", "Rolex", "Casio", "Titan", "Fossil", "Omega", "Citizen", "Tissot", "Breitling", "Seiko", "Tag Heuer"]},
        {title: "Books", data: [{id: 4, name: 'Bugatti'}, {id: 5, name: 'Hey'}]},
      ]


    const setURLName = (url) => { 
      setSubsubcatURL(url)
      console.log("url name", url)
     }
      

      // accordionData.map((item)=>(
      //   console.log(item.title),
      //   item.data.map((hey)=>{
      //     console.log(hey.name)
      //   })
      // ))

  return (
    <PageWrapper>
      {subcategoryinfo?.map(item => (<Subsublist>
        <h6>{item.name}</h6>
        {item.data.map(subname =>(
        <Link onClick={()=>setURLName(subname.ref_code)} to="/product-list">{subname.name}</Link>
        ))}

      </Subsublist>))}


    </PageWrapper>
  )
}

export default WomensClothsMenuView

export const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  flex-direction: row;
  flex-wrap: wrap;
  contain: content;

  @media only screen and (max-width: 600px){
    justify-content: space-evenly;
  }
`
export const Subsublist = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  /* border: 1px solid green; */
  /* height: 100px; */
  padding: 20px;

  >a{
    text-decoration: none;
    color: black;
  }

  h6 {
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

  @media only screen and (max-width: 600px) {
    width: auto;
    /* gap: 10px; */
    /* border: 1px solid red; */
    >a{
      font-size: 14px;
    }
    >h6{
      font-size: 14px;
    }
  }
`