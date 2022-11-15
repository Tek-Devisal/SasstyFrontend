import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import LatestProdSidebar from "../components/LatestProdSidebar";
import ThirdSidebarCom from "../components/ThirdSidebarCom";
import TopRatedSidebar from "../components/TopRatedSidebar";
import DailyDealsItems from "../components/DailyDealsItems";
import ProductsRowTwo from "../components/ProductsRowTwo";
import TrendingItems from "../components/TrendingItems";
import TopVendors from "../components/TopVendors";
import AdGrid from "../components/AdGrid";
import TrendingItemsTwo from "../components/TrendingItemsTwo";
import DailyDealsItemsTwo from "../components/DailyDealsItemsTwo";
import RecentlyViewed from "../components/RecentlyViewed";
import Footer from "../components/Footer";
import MainSlider from "../components/MainSlider";
import HeaderTab from "../components/HeaderTab";
import { Link } from "react-router-dom";
// import accordion from '../components/accordionData';

// import axios
import axios from "axios";

// Material UI Components
import {
  Button,
  Divider,
  Tabs,
  Tab,
  Box,
  Grid,
  Container,
  Typography,
} from "@mui/material";

// Material UI Icons
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import TopRankings from '../components/TopRankings';
import TheMegaMenu from '../components/TheMegaMenu';

export const BASE_URL = "https://sassty-web.herokuapp.com"
// export const BASE_URL = "http://127.0.0.1:8000"

// import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  // List of useStates
  const [value, setValue] = useState("one");
  const [categories, setCategories] = useState([]);
  const [dailyitems, setDailyitems] = useState([]);
  const [randomproducts, setRandomproducts] = useState();
  const [topRatedProducts, setTopRatedProducts] = useState();
  const [trendingProducts, setTrendingProducts] = useState();




  // List of funcions
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchDailyProducts = async () => {
    try {
      //   const items = await axios.get(BASE_URL + "/v1/fetchProducts/1/");
      const items = await axios.get(
        BASE_URL + "/products/v1/fetchDailyProducts/"
      );
      //   const items = await axios.get("https://sassty-web.herokuapp.com/products/v1/fetchDailyProducts/");
      setDailyitems(items.data);
      console.log(items.data);
    } catch (error) {
      console.log(error);
    }
  };

  //   Fetch All categories
  const fetchCategories = async () => {
    try {
      //   const items = await axios.get(BASE_URL + "/v1/fetchProducts/1/");
      const data = await axios.get(`${BASE_URL}/products/v1/fetchCategories/`);
      setCategories(data.data);
      console.log("Main Categories ", data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRandomProducts = async () => {
    try {
      //   const items = await axios.get(BASE_URL + "/v1/fetchProducts/1/");
      const randomitemsdata = await axios.get(
        `${BASE_URL}/products/v1/fetchRandomProducts/${5}`
      );
      setRandomproducts(randomitemsdata.data);
      console.log("Random Products ", randomitemsdata.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTrendingItems = async () => {
    try {
      //   const items = await axios.get(BASE_URL + "/v1/fetchProducts/1/");
      const trendingitemsdata = await axios.get(
        `${BASE_URL}/products/v1/trendingItems/${10}`
      );
      setTrendingProducts(trendingitemsdata.data);
      console.log("Trending Products ", trendingitemsdata.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTopRatedProducts = async () => {
    try {
      //   const items = await axios.get(BASE_URL + "/v1/fetchProducts/1/");
      const toprateditemsdata = await axios.get(
        `${BASE_URL}/products/v1/topRatedProducts/${4}`
      );
      setTopRatedProducts(toprateditemsdata.data);
      console.log("Top Rated Products ", toprateditemsdata.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchDailyProducts();
    fetchRandomProducts();
    fetchTrendingItems();
    fetchTopRatedProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <TheMegaMenu />
      <PageWrapper>
        <PageHeader >
          <GridCategory >
            {categories?.map(({ name, id }) => (
              <HeaderTab title={name} categoryId={id} key={id} />
            ))}
            {/* <HeaderTab /> */}
          </GridCategory>
          <GridMiddle >
            <GridSlideUp>
              <MainSlider />
            </GridSlideUp>
            {/* <GridSlideMiddle>

                </GridSlideMiddle> */}
            <GridSlideButton>
              <TopRankings />
            </GridSlideButton>
          </GridMiddle>
          <GridLast>
            <WelcomRowOne>
              <p>Welcome to Sassty</p>
            </WelcomRowOne>
            <WelcomRowTwo>
              <Button
                style={{
                  width: "45%",
                  borderRadius: "50px",
                  backgroundColor: "#FC2566",
                  textTransform: "capitalize",
                }}
                variant="contained"
                size="large"
              >
                <Link style={{textDecoration: 'none', color: 'white', whiteSpace: 'nowrap'}} to="/landing">Join us</Link>
              </Button>
              <Button
                style={{
                  width: "45%",
                  borderRadius: "50px",
                  backgroundColor: "#FDF6F8",
                  color: "#000",
                  textTransform: "capitalize",
                  textDecoration: 'none'
                }}
                variant="contained"
                size="large"
              >
                <Link style={{textDecoration: 'none', color: 'black', whiteSpace: 'nowrap'}} to="/login">Sign in</Link>
              </Button>
            </WelcomRowTwo>
            <Divider
              variant="fullWidth"
              style={{
                backgroundColor: "#333",
                width: "100%",
                marginTop: "20px",
              }}
            />
            <p style={{ fontSize: "22px", marginBottom: "30px" }}>
              Customer Service Policy
            </p>
            <WelcomRowThree>
              <p>
                <RadioButtonCheckedIcon style={{ marginRight: "10px" }} />
                Payment Security
              </p>
              <p>
                <RadioButtonCheckedIcon style={{ marginRight: "10px" }} />
                Guaranteed Delivery
              </p>
              <p>
                <RadioButtonCheckedIcon style={{ marginRight: "10px" }} />
                Guaranteed Quality
              </p>
              <p>
                <RadioButtonCheckedIcon style={{ marginRight: "10px" }} />
                No reason return
              </p>
            </WelcomRowThree>
          </GridLast>
          {/* 
            
             */}
        </PageHeader>

          <PageBody>
            <LeftSidebar>
              <AdBoard>
                <img src="/Images/ad1.png" alt="Ad" />
              </AdBoard>
              <DailyDeals>
                <div
                  style={{
                    height: "103%",
                    width: "200px",
                    borderBottom: "2px solid #F93C00",
                  }}
                >
                  <p>LATEST PRODUCT</p>
                </div>
              </DailyDeals>
              <LatestProdSidebar />
              <ThirdSidebarCom />
              <AdBoard2>
                <img src="/Images/ad9.png" alt="Ad" />
              </AdBoard2>
              <div
                style={{
                  width: "90%",
                  paddingLeft: "30px",
                  borderBottom: "1px solid #B1B1B1",
                  marginTop: "30px",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Top Rated
                </p>
              </div>
              {topRatedProducts?.map((toprateditem) => (
                <TopRatedSidebar key={toprateditem.id} items={toprateditem} />
              ))}
              {/* <TopRatedSidebar /> */}
              <AdBoard3>
                <img src="/Images/ad10.png" alt="Ad" />
              </AdBoard3>
            </LeftSidebar>
            <MainWindow>
              
                <Adbar>
                  <div
                    className="AdbarLeft"
                    style={{ height: "100%", backgroundColor: "#FFF" }}
                  >
                    <div
                      className="AdbarRight"
                      style={{ height: "100%", backgroundColor: "#F93C00" }}
                    ></div>
                  </div>
                </Adbar>
              
              <DailyDeals>
                <div
                  style={{
                    height: "103%",
                    width: "200px",
                    borderBottom: "2px solid #F93C00",
                  }}
                >
                  <p>DAILY DEALS</p>
                </div>
              </DailyDeals>
                <MainRowOne>
                  {dailyitems?.map((item) => (
                    <DailyDealsItems key={item.name} items={item} />
                  ))}
                  {/* <DailyDealsItems />
                        <DailyDealsItems />
                        <DailyDealsItems /> */}
                </MainRowOne>
              {/* <Container container style={{marginTop: 70}}> */}
              <MainRowTwo>
                {randomproducts?.map((randomitem) => (
                  <ProductsRowTwo key={randomitem.id} items={randomitem} />
                ))}
                {/* <ProductsRowTwo />
                            <ProductsRowTwo />
                            <ProductsRowTwo />
                            <ProductsRowTwo /> */}
              </MainRowTwo>
              {/* </Container> */}
              <Adbar2>
                <img src="/Images/banner.png" alt="Ad" />
              </Adbar2>
              <TrendingItemsHead>
                <div
                  style={{
                    height: "100%",
                    width: "200px",
                    backgroundColor: "#01032C",
                  }}
                >
                  <p>TRENDIND ITEMS</p>
                </div>
                <Tabs
                  // style={{fontSize: "14px", fontWeight: "bold", color: "#F93C00", textTransform: "Capitalize"}}
                  value={value}
                  onChange={handleChange}
                  // textColor="secondary"
                  // indicatorColor="secondary"
                  aria-label="secondary tabs example"
                >
                  <Tab value="one" label="Item One">
                    Heyey
                  </Tab>
                  <Tab value="two" label="Item Two" />
                  <Tab value="three" label="Item Three" />
                </Tabs>
              </TrendingItemsHead>
              <Container maxWidth="lg">
                <MainRowThree>
                  {trendingProducts?.map((trendingitems) => (
                    <TrendingItems
                      key={trendingitems.id}
                      items={trendingitems}
                    />
                  ))}
                  {/* <TrendingItems />*/}
                </MainRowThree>
              </Container>
              <MainRowFour>
                <LeftAd>
                  <img src="/Images/ad2.png" alt="Ad" />
                </LeftAd>
                <RightAd>
                  <img src="/Images/ad3.png" alt="Ad" />
                </RightAd>
              </MainRowFour>
              <TopVendorsHead>
                <div
                  style={{
                    height: "100%",
                    width: "150px",
                    backgroundColor: "#fff",
                  }}
                >
                  <p>TOP VENDORS</p>
                </div>
              </TopVendorsHead>
              <MainRowFive>
                <TopVendors />
                <TopVendors />
                <TopVendors />
                <TopVendors />
              </MainRowFive>
              <AdBoard4>
                <AdGrid />
              </AdBoard4>
            </MainWindow>
          </PageBody>
        <PageBottom>
          <TrendingItemsHead>
            <div
              style={{
                height: "104%",
                width: "200px",
                backgroundColor: "#01032C",
              }}
            >
              <p>TRENDIND ITEMS</p>
            </div>
          </TrendingItemsHead>

          <RowSix>
            <TrendingItemsTwo />
            <TrendingItemsTwo />
            <TrendingItemsTwo />
            <TrendingItemsTwo />
            <TrendingItemsTwo />
            <TrendingItemsTwo />
          </RowSix>
          <DailyDeals>
            <div
              style={{
                height: "103%",
                width: "150px",
                borderBottom: "2px solid #F93C00",
              }}
            >
              <p>DAILY DEALS</p>
            </div>
          </DailyDeals>
          <RowSeven>
            <DailyDealsItemsTwo />
            <DailyDealsItemsTwo />
            <DailyDealsItemsTwo />
            <DailyDealsItemsTwo />
            <DailyDealsItemsTwo />
            <DailyDealsItemsTwo />
          </RowSeven>
          <RowEight>
            <img src="/Images/banner2.png" alt="Ad" />
          </RowEight>
          <TrendingItemsHead>
            <div
              style={{
                height: "104%",
                width: "200px",
                backgroundColor: "#01032C",
              }}
            >
              <p>RECENTLY VIEWED</p>
            </div>
          </TrendingItemsHead>
          <RowNine>
            <RecentlyViewed />
            <RecentlyViewed />
            <RecentlyViewed />
            <RecentlyViewed />
            <RecentlyViewed />
            <RecentlyViewed />
          </RowNine>
        </PageBottom>
      </PageWrapper>
      <Footer />
    </div>
  );
};

export default Home;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: auto;
  width: 100%;
  box-sizing: border-box;
  min-width: 1280px;
  padding-left: 20px;
  padding-right: 20px;
  /* overflow-x: scroll; */
  /* border: 1px solid green; */
`;
const PageHeader = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  gap: 15px;
  height: 500px;
  margin-top: 10px;
  background-color: #fff;
  /* border: 1px solid gray; */
`;
const GridCategory = styled.div`
  display: flex;
  flex-direction: column;
  /* box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5); */
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  /* justify-content: center; */
  /* align-items: center; */
  /* width: 50%; */

  background-color: #fff;
  width: 25%;
  /* gap: 2px; */
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const GridMiddle = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
  /* flex: 0.5; */
`;

const GridLast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/Images/background.png");
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 25%;
  /* flex: 0.25; */
`;

const GridSlideUp = styled.div`
  background-color: #fff;
  /* flex: 0.7; */
  height: 70%;
  border-radius: 10px;
`;

const GridSlideMiddle = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex: 0.22;
  gap: 10px;
  border-radius: 10px;
`;

const GridSlideButton = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  /* flex: 0.3; */
  height: 30%;
  /* gap: 10px; */
  border-radius: 10px;
`;
const PageBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  height: auto;
  /* background-color: blue; */
  margin-top: 40px;
  width: 90%;
  /* border: 1px solid green; */
  gap: 20px;
`;
const PageBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  /* background-color: blue; */
  margin-top: 1px;
  width: 90%;
  /* border: 1px solid green; */
  gap: 20px;
`;

const LeftSidebar = styled.div`
  display: flex;
  /* flex: 0.25; */
  width: 25%;
  flex-direction: column;
  background-color: #fdfdfd;
  align-items: center;
`;
const MainWindow = styled.div`
  display: flex;
  flex-direction: column;
  /* flex: 0.75; */
  width: 75%;
  /* justify-content: center; */
  align-items: center;
  background-color: #fdfdfd;
`;
const AdBoard = styled.div`
  width: 100%;
  height: 20%;
  background-color: #333;
  border-radius: 15px;
  /* background-image: url("/Images/ad1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */
  /* background-attachment: fixed; */

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;
const AdBoard2 = styled.div`
  width: 100%;
  height: 17%;
  background-color: #333;
  /* border-radius: 15px; */
  margin-top: 20px;

  > img {
    width: 100%;
    height: 100%;
  }
`;
const AdBoard3 = styled.div`
  width: 100%;
  height: 24%;
  background-color: #333;
  border-radius: 15px;
  margin-top: 20px;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const AdBoard4 = styled.div`
  width: 98%;
  height: 420px;
  background-color: #fff;
  /* border-radius: 15px; */
  margin-top: 40px;
  margin-bottom: 30px;
`;
const Adbar = styled.div`
  display: flex;
  height: 64px;
  width: 100%;
  /* transform: skew(20deg); */
  background-color: #c4bdbd;
  /* clip-path: polygon(0 0,100% 0%,90% 100%, 0% 100%); */
`;
const DailyDeals = styled.div`
  display: flex;
  height: 64px;
  width: 98%;
  /* justify-content: center; */
  /* transform: skew(20deg); */
  background-color: #fff;
  border-bottom: 2px solid #c4bdbd;

  > div > p {
    margin-top: 25px;
    font-weight: bold;
    font-size: 20px;
  }
`;
const MainRowOne = styled.div`
  display: flex;
  height: 370px;
  /* height: 23%; */
  margin-top: 20px;
  width: 98%;
  justify-content: space-between;
  /* border: 2px solid #C4BDBD; */
  /* padding-bottom: 20px; */
  /* justify-content: center; */
  /* transform: skew(20deg); */
  background-color: #fff;
`;
const MainRowTwo = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: 300px; */
  height: 11%;
  /* margin-top: 20px; */
  margin-top: 3%;
  width: 98%;
  /* border: 1px solid red; */
  /* padding-bottom: 20px; */
  /* justify-content: center; */
  /* transform: skew(20deg); */
  background-color: #fff;
`;
const MainRowThree = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  margin-top: 20px;
  width: 98%;
  flex-wrap: wrap;
  /* border: 1px solid green; */
  /* padding-bottom: 20px; */
  /* justify-content: center; */
  /* transform: skew(20deg); */
  background-color: #fff;
`;

const Adbar2 = styled.div`
  display: flex;
  height: 4%;
  width: 98%;
  /* height: 120px; */
  /* transform: skew(20deg); */
  background-color: #e0e1e3;
  margin-top: 60px;
  border-radius: 10px;

  > img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
    border-radius: 5px;
  }
`;
export const TrendingItemsHead = styled.div`
  display: flex;
  height: 50px;
  width: 98%;
  justify-content: space-between;
  /* transform: skew(20deg); */
  background-color: #fff;
  border-bottom: 2px solid #c4bdbd;
  margin-top: 80px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px 5px 0px 0px;
  }

  > div > p {
    /* margin-top: 25px; */
    font-weight: bold;
    font-size: 20px;
    color: #fff;
  }
`;
const MainRowFour = styled.div`
  display: flex;
  justify-content: space-between;
  height: 280px;
  margin-top: 70px;
  width: 98%;
  flex-wrap: wrap;
  /* margin-top: 80px; */
  /* padding-bottom: 20px; */
  /* justify-content: center; */
  /* transform: skew(20deg); */
  background-color: #fff;
`;
const MainRowFive = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  margin-top: 20px;
  width: 98%;
  flex-wrap: wrap;
  /* margin-top: 80px; */
  /* padding-bottom: 20px; */
  /* justify-content: center; */
  /* transform: skew(20deg); */
  background-color: #fff;
`;

const LeftAd = styled.div`
  width: 49%;
  height: 80%;
  background-color: #e0e1e3;
  border-radius: 15px;

  > img {
    width: 100%;
    height: 100%;
  }
`;
const RightAd = styled.div`
  width: 49%;
  height: 80%;
  background-color: #e0e1e3;
  border-radius: 15px;

  > img {
    width: 100%;
    height: 100%;
  }
`;
const TopVendorsHead = styled.div`
  display: flex;
  height: 50px;
  width: 98%;
  /* justify-content: center; */
  /* transform: skew(20deg); */
  background-color: #fff;
  border-bottom: 2px solid #c4bdbd;
  /* margin-top: 0px; */

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px 5px 0px 0px;
  }

  > div > p {
    /* margin-top: 25px; */
    font-weight: bold;
    font-size: 20px;
    color: #333333;
  }
`;
const RowSix = styled.div`
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
`;
const RowSeven = styled.div`
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
`;
const RowEight = styled.div`
  display: flex;
  justify-content: space-between;
  height: 240px;
  margin-top: 20px;
  width: 98%;
  /* border-radius: 10px; */
  /* border: 1px solid red; */
  /* padding-bottom: 20px; */
  /* justify-content: center; */
  /* transform: skew(20deg); */
  background-color: #fff;

  > img {
    width: 100%;
    height: 100%;
  }
`;
const RowNine = styled.div`
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
`;
const WelcomRowOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 98%;
  margin-top: 120px;
  /* border: 1px solid red; */

  > p {
    font-size: 23px;
    font-weight: bold;
  }
`;
const WelcomRowTwo = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 70%;
  margin-top: 10px;
  /* border: 1px solid red; */
`;
const WelcomRowThree = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: 150px;
  width: 80%;
  /* border: 1px solid red; */

  > p {
    display: flex;
    align-items: center;
    /* margin-left: 10px; */
    font-size: 15px;
    /* font-weight: bold; */
    color: #000;
    margin-bottom: 10px;
    /* border: 1px solid red; */
  }
`;

// STYLES
