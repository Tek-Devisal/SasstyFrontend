import React from "react";
import { useState, useEffect, useContext } from "react";
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
import MegaMenuStateContext from "../ContextAPI/MegaMenuContext";
import { UserContext } from "../ContextAPI/UserContext";
import { useNavigate } from "react-router-dom"
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
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import TopRankings from '../components/TopRankings';
import TheMegaMenu from '../components/TheMegaMenu';

export const BASE_URL = "https://sassty-web.herokuapp.com"
// export const BASE_URL = "http://127.0.0.1:8000"

// import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {

  const { setSubcategoryinfo,
          setSubSubMenuForMen,
          setSubSubMenuPhonesAccessories,
          setSubSubMenuElectronics,
          setSubSubMenuIndustrial,
          setSubSubMenuHobbies,
          setSubSubMenuComputers,
          setSubSubMenuAutomobiles,
          setSubSubMenuSports,
          setSubSubMenuFurniture,
          setSubSubMenuJewelries,
          setSubSubMenuHomeAppliances,
          setSubSubMenuShoesBags,
          setSubSubMenuLights
   } = useContext(MegaMenuStateContext);
  const { userInfo, setUserInfo, setAuthTokens, authTokens } = useContext(UserContext);

  const navigate = useNavigate();

  console.log(userInfo)

  // List of useStates
  const [value, setValue] = useState("one");
  const [categories, setCategories] = useState([]);
  const [dailyitems, setDailyitems] = useState([]);
  const [dailyitems2, setDailyitems2] = useState([]);
  const [randomproducts, setRandomproducts] = useState();
  const [topRatedProducts, setTopRatedProducts] = useState();
  const [trendingProducts, setTrendingProducts] = useState();
  const [trendingProducts2, setTrendingProducts2] = useState();
  const [latestProducts, setLatestProducts] = useState();


    const newCategories = [
        {name: "Women's Clothing", id: 1},
        {name: "Men's Clothin", id: 2},
        {name: "Phones & Accessories", id: 3},
        {name: "Electronics", id: 4},
        {name: "Tools, Industrial & Scientific", id: 5},
        {name: "Toys Hobbies and Robot", id: 6},
        {name: "Computers & Office", id: 7},
        {name: "Automobiles & Motocycles", id: 8},
        {name: "Sports & Outdoor", id: 9},
        {name: "Home, Garden & Furniture", id: 10},
        {name: "Jewelry & Watches", id: 11},
        {name: "Home Appliances", id: 12},
        {name: "Shoes and Bags", id: 13},
        {name: "Lights & Lighting", id: 15},

      ]


  // List of funcions
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchAllSubCategories = async () => {
    try {
      //   const items = await axios.get(BASE_URL + "/v1/fetchProducts/1/");
      const data = await axios.get(`${BASE_URL}/products/v1/fetchForMenu/${7}`);
      const data1 = await axios.get(`${BASE_URL}/products/v1/fetchForMenu/${8}`);
      const data2 = await axios.get(`${BASE_URL}/products/v1/fetchForMenu/${9}`);
      const data3 = await axios.get(`${BASE_URL}/products/v1/fetchForMenu/${10}`);
      const data4 = await axios.get(`${BASE_URL}/products/v1/fetchForMenu/${11}`);
      const data5 = await axios.get(`${BASE_URL}/products/v1/fetchForMenu/${12}`);
      const data6 = await axios.get(`${BASE_URL}/products/v1/fetchForMenu/${13}`);
      const data7 = await axios.get(`${BASE_URL}/products/v1/fetchForMenu/${14}`);
      const data8 = await axios.get(`${BASE_URL}/products/v1/fetchForMenu/${15}`);
      const data9 = await axios.get(`${BASE_URL}/products/v1/fetchForMenu/${16}`);
      const data10 = await axios.get(`${BASE_URL}/products/v1/fetchForMenu/${17}`);
      const data11 = await axios.get(`${BASE_URL}/products/v1/fetchForMenu/${18}`);
      const data12 = await axios.get(`${BASE_URL}/products/v1/fetchForMenu/${19}`);
      const data13 = await axios.get(`${BASE_URL}/products/v1/fetchForMenu/${20}`);

      setSubcategoryinfo(data.data);
      setSubSubMenuForMen(data1.data);
      setSubSubMenuPhonesAccessories(data2.data);
      setSubSubMenuElectronics(data3.data);
      setSubSubMenuIndustrial(data4.data);
      setSubSubMenuHobbies(data5.data);
      setSubSubMenuComputers(data6.data);
      setSubSubMenuAutomobiles(data7.data);
      setSubSubMenuSports(data8.data);
      setSubSubMenuFurniture(data9.data);
      setSubSubMenuJewelries(data10.data);
      setSubSubMenuHomeAppliances(data11.data);
      setSubSubMenuShoesBags(data12.data);
      setSubSubMenuLights(data13.data)

      console.log("Menu Data ", data.data);
    } catch (error) {
      console.log(error);
    }
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

  // const fetchDailyProducts2 = async () => {
  //   try {
  //     //   const items = await axios.get(BASE_URL + "/v1/fetchProducts/1/");
  //     const items = await axios.get(
  //       BASE_URL + "/products/v1/fetchDailyProducts/"
  //     );
  //     //   const items = await axios.get("https://sassty-web.herokuapp.com/products/v1/fetchDailyProducts/");
  //     setDailyitems2(items.data);
  //     console.log(items.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const logOutUser = () =>{
    setAuthTokens(null)
    setUserInfo(null)
    localStorage.removeItem('authTokens')
    navigate('/login')
}

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

  const fetchTrendingItems2 = async () => {
    try {
      //   const items = await axios.get(BASE_URL + "/v1/fetchProducts/1/");
      const trendingitemsdata2 = await axios.get(
        `${BASE_URL}/products/v1/trendingItems/${6}`
      );
      setTrendingProducts2(trendingitemsdata2.data);
      console.log("Trending Products ", trendingitemsdata2.data);
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

  const fetchLatestProducts = async () => {
    try {
      //   const items = await axios.get(BASE_URL + "/v1/fetchProducts/1/");
      const latestproductitemsdata = await axios.get(
        `${BASE_URL}/products/v1/lastestProducts/${4}`
      );
      setLatestProducts(latestproductitemsdata.data);
      console.log("Latest Products ", latestproductitemsdata.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchAllSubCategories()
    fetchDailyProducts();
    fetchRandomProducts();
    fetchTrendingItems();
    fetchTrendingItems2();
    fetchTopRatedProducts();
    fetchLatestProducts();
    // fetchDailyProducts2();
  }, []);

  return (
    <div>
      <Navbar />
      <TheMegaMenu />
      <PageWrapper>
        <PageHeader >
          <GridCategory >
            {newCategories.map(({ name, id }) => (
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
            <GridLastTop>
              <WelcomRowOne>
                <p>Welcome to Sassty</p>
              </WelcomRowOne>
              <WelcomRowTwo>
              <Button
                style={{
                  width: "45%",
                  borderRadius: "50px",
                  height: '25px',
                  backgroundColor: "#FC2566",
                  textTransform: "capitalize",
                }}
                variant="contained"
                size="large"
              >
                <Link style={{textDecoration: 'none', color: 'white', whiteSpace: 'nowrap', fontSize: 10, fontWeight: 'bold'}} to="/landing">Join us</Link>
              </Button>
              <Button
                style={{
                  width: "45%",
                  borderRadius: "50px",
                  height: '25px',
                  backgroundColor: "white",
                  border: "1px solid #ECECEC",
                  color: "#000",
                  textTransform: "capitalize",
                  textDecoration: 'none'
                }}
                variant="contained"
                size="large"
              >
                {authTokens? <Button onClick={logOutUser}>Logout</Button> : <Link style={{textDecoration: 'none', color: 'black', whiteSpace: 'nowrap', fontSize: 10, fontWeight: 'bold'}} to="/login">Sign in</Link>}
                {/* <Button onClick={logOutUser}>Logout</Button> */}
              </Button>
            </WelcomRowTwo>
            <CusterPolicyTag>Customer Policy Service</CusterPolicyTag>
            <CusterPolicyItems>
                <PolicyOne>
                  <p><CurrencyExchangeIcon style={{fontSize: 10, marginRight: 4}}/>Payment Security</p>
                  <p><WorkspacePremiumIcon style={{fontSize: 10, marginRight: 4}}/>Quality Guarantee</p>
                </PolicyOne>
                <PolicyTwo>
                  <p><CurrencyExchangeIcon style={{fontSize: 10, marginRight: 4}}/>Delivery Guarantee</p>
                  <p><DeliveryDiningIcon style={{fontSize: 10, marginRight: 4}}/>No Reason Returns</p>
                </PolicyTwo>
            </CusterPolicyItems>
            </GridLastTop>
            <GridLastDown>
              <WelcomRowOne>
                <p style={{marginTop: 30}}>New user benefit</p>
              </WelcomRowOne>
              <img src='Images/black.jpg' alt='black' />
            </GridLastDown>

          </GridLast>

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
              {/* <LatestProdSidebar /> */}
              {latestProducts?.map((item) => (
                    <LatestProdSidebar key={item.name} items={item} />
                  ))}
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
            {/* <TrendingItemsTwo /> */}
            {trendingProducts2?.map((trendingitems2) => (
                <TrendingItemsTwo key={trendingitems2.id} items={trendingitems2} />
            ))}
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
            {/* <DailyDealsItemsTwo /> */}
            {randomproducts?.map((item) => (
                    <DailyDealsItemsTwo key={item.name} items={item} />
                  ))}
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
  margin: 0px;
  /* contain: content; */
  /* overflow-x: scroll; */
  /* border: 1px solid white; */
  @media only screen and (max-width: 600px) {
    width: 100%;
    min-width: fit-content;

}
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

  @media only screen and (max-width: 600px) {
    display: none;
    width: 100%;
}
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
  border-radius: 10px;

  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    display: none;
}
`;

const GridMiddle = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
  border-radius: 10px;
  /* flex: 0.5; */
`;

const GridLast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 
  /* background-image: url("/Images/background.png"); */
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 25%;
  border-radius: 10px;
  /* background-image: url("/Images/download.png"); */
  /* flex: 0.25; */

  @media only screen and (max-width: 600px) {
    display: none;
}
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

  @media only screen and (max-width: 600px) {
    display: none;
}
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

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 0px;
}
`;
const PageBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: auto; */
  /* background-color: blue; */
  margin-top: 1px;
  width: 90%;
  border: 1px solid green;
  gap: 20px;

  @media only screen and (max-width: 600px) {
    display: none; 
    /* width: 100%; 
    flex-wrap: wrap; */
  }
`;

const LeftSidebar = styled.div`
  display: flex;
  /* flex: 0.25; */
  width: 25%;
  flex-direction: column;
  background-color: #fdfdfd;
  align-items: center;

  @media only screen and (max-width: 600px) {
    display: none;
}
`;
const MainWindow = styled.div`
  display: flex;
  flex-direction: column;
  /* flex: 0.75; */
  width: 75%;
  /* justify-content: center; */
  align-items: center;
  background-color: #fdfdfd;

  @media only screen and (max-width: 600px) {
    width: 100%;
}
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
  @media only screen and (max-width: 600px) {
    display: none;
}
`;
const Adbar = styled.div`
  display: flex;
  height: 64px;
  width: 100%;
  /* transform: skew(20deg); */
  background-color: #c4bdbd;
  /* clip-path: polygon(0 0,100% 0%,90% 100%, 0% 100%); */
  @media only screen and (max-width: 600px) {
    display: none;
    width: 100%;
    flex-wrap: wrap;
  }

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

  @media only screen and (max-width: 600px) {
    /* display: none; */
    width: 100%;
    flex-wrap: wrap;
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
  /* border: 3px solid green; */

  @media only screen and (max-width: 600px) {
    /* display: none; */
    width: 100%;
    height: 400px;
    flex-wrap: wrap;
  }
`;
const MainRowTwo = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: 300px; */
  height: 12%;
  /* margin-top: 20px; */
  margin-top: 3%;
  width: 98%;
  /* border: 1px solid red; */
  /* padding-bottom: 20px; */
  /* justify-content: center; */
  /* transform: skew(20deg); */
  background-color: #fff;
  contain: content;

  @media only screen and (max-width: 600px) {
    /* display: none; */
    width: 100%;
    flex-wrap: wrap;
    height: auto;
  }
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

  @media only screen and (max-width: 600px) {
    /* display: none; */
    width: 100%;
    flex-wrap: wrap;
    /* height: auto; */
  }
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
  @media only screen and (max-width: 600px) {
    /* display: none; */
    width: 100%;
    /* height: 30%; */
    flex-wrap: wrap;
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

  @media only screen and (max-width: 600px) {
    display: none;
    width: 100%;
    flex-wrap: wrap;
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
  @media only screen and (max-width: 600px) {
    height: auto;
    width: 100%;
    flex-wrap: wrap;
  }
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

  @media only screen and (max-width: 600px) {
    /* display: none; */
    width: 100%;
    flex-wrap: wrap;
  }
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

  @media only screen and (max-width: 600px) {
    /* display: none; */
    width: 100%;
    flex-wrap: wrap;
  }
`;
const RowSix = styled.div`
  display: flex;
  justify-content: space-between;
  height: 330px;
  margin-top: 20px;
  width: 98%;
  border: 1px solid red;
  /* padding-bottom: 20px; */
  /* justify-content: center; */
  /* transform: skew(20deg); */
  background-color: #fff;

  @media only screen and (max-width: 600px) {
    /* display: none; */
    width: 100%;
    height: auto;
    flex-wrap: wrap;
  }
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

  @media only screen and (max-width: 600px) {
    display: none;
    width: 100%;
    flex-wrap: wrap;
    height: auto;
  }
`;
const WelcomRowOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 98%;
  /* margin-top: 120px; */
  /* border: 1px solid red; */

  > p {
    font-size: 14px;
    font-weight: 700;
    color: #333;
    height: 19px;
    line-height: 19px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    /* width: 100%; */
  }
`;
const WelcomRowTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 70%;
  margin-top: 10px;
  /* margin-left: 40px; */
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

const GridLastTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 50%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-image: url("/Images/download.png");
  background-repeat: no-repeat;
`
const GridLastDown = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 50%;
  border-radius: 7px;
  contain: content;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  >img{
    width: 300px;
    height: 210px;
    margin: 3px;
  }
`
const CusterPolicyTag = styled.p`
    font-size: 14px;
    font-weight: 700;
    height: 19px;
    color: #333;
    margin-left: 7px;
    margin-top: 15px;
`
export const CusterPolicyItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  margin: 10px;
  contain: content;
  
`
export const PolicyOne = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 44%; */
  height: 50px;
  contain: content;
  /* background-color: red; */
  justify-content: center;
  /* padding-top: 20px; */
  

  > p{
    white-space: nowrap;
    line-height: 25px;
    font-size: 12px;
    /* letter-spacing: 1px; */
    margin-block-start: 0rem;
    padding-block-start: 0rem;
    margin-block-end: 0rem;
    padding-block-end: 0rem;
  }
`

export const PolicyTwo = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 44%; */
  height: 50px;
  contain: content;
  /* background-color: red; */
  justify-content: center;
  /* padding-top: 20px; */
  

  > p{
    white-space: nowrap;
    line-height: 25px;
    font-size: 12px;
    /* letter-spacing: 1px; */
    margin-block-start: 0rem;
    padding-block-start: 0rem;
    margin-block-end: 0rem;
    padding-block-end: 0rem;
  }
`

// STYLES
