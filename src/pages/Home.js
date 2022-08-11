import React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import LatestProdSidebar from '../components/LatestProdSidebar';
import ThirdSidebarCom from '../components/ThirdSidebarCom';
import TopRatedSidebar from '../components/TopRatedSidebar';
import DailyDealsItems from '../components/DailyDealsItems';
import ProductsRowTwo from '../components/ProductsRowTwo';
import TrendingItems from '../components/TrendingItems';
import TopVendors from '../components/TopVendors';
import AdGrid from '../components/AdGrid';
import TrendingItemsTwo from '../components/TrendingItemsTwo';
import DailyDealsItemsTwo from '../components/DailyDealsItemsTwo';
import RecentlyViewed from '../components/RecentlyViewed';
import Footer from '../components/Footer';
import MainSlider from '../components/MainSlider';
import HeaderTab from '../components/HeaderTab';
// import accordion from '../components/accordionData';

// Material UI Components
import { 
    Button,
    Divider,
    Tabs,
    Tab,
    Box,
} from '@mui/material';

// Material UI Icons
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';



// import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {

    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const accordionData = [
        {title: "Watches", content: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"},
        {title: "Home Appliance", content: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$3.99 to US$11.99 a month. No extra costs, no contracts."},
        {title: "Mobile Phones", content: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."},
        {title: "Kitchen", content: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."},
        {title: "Tables and Chairs", content: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."},
        {title: "Books and Pens", content: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\n\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."}
      ]

  return (
    <>
      <Navbar />
      <PageWrapper>
        <PageHeader>
            <GridCategory>
                {accordionData.map(({ title, content})=>(<HeaderTab title={title} content={content} key={title}/>))}
                <HeaderTab />
                <HeaderTab />
                <HeaderTab />
                <HeaderTab />
                <HeaderTab />
                <HeaderTab />
                <HeaderTab />
                <HeaderTab />
                <HeaderTab />
                <HeaderTab />
                <HeaderTab />
                <HeaderTab />
                <HeaderTab />
                <HeaderTab />
            </GridCategory>
            <GridMiddle>
                <GridSlideUp>
                    <MainSlider />
                </GridSlideUp>
                {/* <GridSlideMiddle>

                </GridSlideMiddle> */}
                <GridSlideButton>
                </GridSlideButton>
            </GridMiddle>
            <GridLast>
                <WelcomRowOne>
                    <p>Welcome to Sassty</p>
                </WelcomRowOne>
                <WelcomRowTwo>
                    <Button style={{width: "45%", borderRadius: "50px", backgroundColor: "#FC2566", textTransform: "capitalize"}} variant="contained" size="large">
                        Join us
                    </Button>
                    <Button style={{width: "45%", borderRadius: "50px", backgroundColor: "#FDF6F8", color: "#000", textTransform: "capitalize"}} variant="contained" size="large">
                        Sign in
                    </Button>
                </WelcomRowTwo>
                <Divider variant='fullWidth' style={{backgroundColor: "#333", width: "100%", marginTop: "20px"}} />
                <p style={{fontSize: "22px", marginBottom: "30px"}}>Customer Service Policy</p>
                <WelcomRowThree>
                    <p><RadioButtonCheckedIcon style={{marginRight: "10px"}}/>Payment Security</p>
                    <p><RadioButtonCheckedIcon style={{marginRight: "10px"}}/>Guaranteed Delivery</p>
                    <p><RadioButtonCheckedIcon style={{marginRight: "10px"}}/>Guaranteed Quality</p>
                    <p><RadioButtonCheckedIcon style={{marginRight: "10px"}}/>No reason return</p>
                </WelcomRowThree>
            </GridLast>
            {/* 
            
             */}
        </PageHeader>
        <PageBody>
            <LeftSidebar>
                <AdBoard>
                    <img src="/Images/ad1.png" alt='Ad' />
                </AdBoard>
                <DailyDeals>
                    <div style={{height: "103%", width: "200px", borderBottom: "2px solid #F93C00"}}>
                        <p>LATEST PRODUCT</p>
                    </div>
               </DailyDeals>
                <LatestProdSidebar />
                <ThirdSidebarCom />
                <AdBoard2>
                    <img src="/Images/ad9.png" alt='Ad' />
                </AdBoard2>
                <TopRatedSidebar />
                <AdBoard3>
                    <img src="/Images/ad10.png" alt='Ad' />
                </AdBoard3>
            </LeftSidebar>
            <MainWindow>
               <Adbar>
                    <div className='AdbarLeft' style={{height: "100%", backgroundColor: "#FFF"}}>
                        <div className='AdbarRight' style={{height: "100%", backgroundColor: "#F93C00"}}></div>
                    </div>
               </Adbar>
               <DailyDeals>
                    <div style={{height: "103%", width: "200px", borderBottom: "2px solid #F93C00"}}>
                        <p>DAILY DEALS</p>
                    </div>
               </DailyDeals>
               <MainRowOne>
                    <DailyDealsItems />
                    <DailyDealsItems />
                    <DailyDealsItems />
                    <DailyDealsItems />
               </MainRowOne>
               <MainRowTwo>
                    <ProductsRowTwo />
                    <ProductsRowTwo />
                    <ProductsRowTwo />
                    <ProductsRowTwo />
                    <ProductsRowTwo />
               </MainRowTwo>
               <Adbar2>
                    <img src="/Images/banner.png" alt='Ad' />
               </Adbar2>
               <TrendingItemsHead>
                    <div style={{height: "100%", width: "200px", backgroundColor: "#01032C"}}>
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
                        <Tab value="one" label="Item One" />
                        <Tab value="two" label="Item Two" />
                        <Tab value="three" label="Item Three" />
                    </Tabs>
               </TrendingItemsHead>
               <MainRowThree>
                    <TrendingItems />
                    <TrendingItems />
                    <TrendingItems />
                    <TrendingItems />
                    <TrendingItems />
                    <TrendingItems />
                    <TrendingItems />
                    <TrendingItems />
                    <TrendingItems />
                    <TrendingItems />
               </MainRowThree>
               <MainRowFour>
                    <LeftAd>
                        <img src="/Images/ad2.png" alt='Ad' />
                    </LeftAd>
                    <RightAd>
                        <img src="/Images/ad3.png" alt='Ad' />
                    </RightAd>
               </MainRowFour>
               <TopVendorsHead>
                    <div style={{height: "100%", width: "150px", backgroundColor: "#fff"}}>
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
                <div style={{height: "104%", width: "200px", backgroundColor: "#01032C"}}>
                    <p>TRENDIND ITEMS</p>
                </div>
            </TrendingItemsHead>

            <RowSix>
                <TrendingItemsTwo/>
                <TrendingItemsTwo/>
                <TrendingItemsTwo/>
                <TrendingItemsTwo/>
                <TrendingItemsTwo/>
                <TrendingItemsTwo/>
            </RowSix>
            <DailyDeals>
                <div style={{height: "103%", width: "150px", borderBottom: "2px solid #F93C00"}}>
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
                <img src="/Images/banner2.png" alt='Ad' />
            </RowEight>
            <TrendingItemsHead>
                <div style={{height: "104%", width: "200px", backgroundColor: "#01032C"}}>
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
    </>
  )
}

export default Home

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    background-color: #FDFDFD;
    height: auto;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
`
const PageHeader = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 15px;
    height: 500px;
    margin-top: 10px;
    /* border: 1px solid gray; */
`
const GridCategory = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    width: 100%;

    background-color: #B7B7BA;
    width: 25%;
    /* gap: 2px; */
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
    
`

const GridMiddle = styled.div`
    background-color: #F7F7F7;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 50%;
    /* flex: 0.5; */
`

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
`


const GridSlideUp = styled.div`
    background-color: #B7B7BA;
    /* flex: 0.7; */
    height: 70%;
    border-radius: 10px;

`

const GridSlideMiddle = styled.div`
    background-color: #B7B7BA;
    display: flex;
    flex-direction: row;
    flex: 0.22;
    gap: 10px;
    border-radius: 10px;
`

const GridSlideButton = styled.div`
    background-color: #B7B7BA;
    display: flex;
    flex-direction: row;
    /* flex: 0.3; */
    height: 30%;
    gap: 10px;
    border-radius: 10px;
`
const PageBody = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    /* background-color: blue; */
    margin-top: 40px;
    /* width: 100%; */
    /* border: 1px solid green; */
    gap: 20px;
`
const PageBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    /* background-color: blue; */
    margin-top: 1px;
    width: 100%;
    /* border: 1px solid green; */
    gap: 20px;
`

const LeftSidebar = styled.div`
    display: flex;
    /* flex: 0.25; */
    width: 25%;
    flex-direction: column;
    background-color: #FDFDFD;
    align-items: center;
`
const MainWindow = styled.div`
    display: flex;
    flex-direction: column;
    /* flex: 0.75; */
    width: 75%;
    /* justify-content: center; */
    align-items: center;
    background-color: #FDFDFD;
`
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
`
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
`
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
`

const AdBoard4 = styled.div`
    width: 98%;
    height: 420px;
    background-color: #fff;
    /* border-radius: 15px; */
    margin-top: 40px;
    margin-bottom: 30px;
`
const Adbar = styled.div`
    display: flex;
    height: 64px;
    width: 100%;
    /* transform: skew(20deg); */
    background-color: #C4BDBD;
    /* clip-path: polygon(0 0,100% 0%,90% 100%, 0% 100%); */
    
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
 const MainRowOne = styled.div`
    display: flex;
    /* height: 610px; */
    height: 23%;
    margin-top: 20px;
    width: 98%;
    justify-content: space-between;
    /* border: 2px solid #C4BDBD; */
    /* padding-bottom: 20px; */
    /* justify-content: center; */
    /* transform: skew(20deg); */
    background-color: #fff;
 `
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
 `
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
`

 const Adbar2 = styled.div`
    display: flex;
    height: 4%;
    width: 98%;
    /* transform: skew(20deg); */
    background-color: #E0E1E3;
    margin-top: 60px;
    border-radius: 10px;

    >img {
        width: 100%;
        height: 100%;
        /* object-fit: cover; */
        border-radius: 5px;

    }
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
 `
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
`

const LeftAd = styled.div`
    width: 49%;
    height: 80%;
    background-color: #E0E1E3;
    border-radius: 15px;

    > img {
        width: 100%;
        height: 100%;
    }
`
const RightAd = styled.div`
    width: 49%;
    height: 80%;
    background-color: #E0E1E3;
    border-radius: 15px;

    > img {
        width: 100%;
        height: 100%;
    }
`
const TopVendorsHead = styled.div`
    display: flex;
    height: 50px;
    width: 98%;
    /* justify-content: center; */
    /* transform: skew(20deg); */
    background-color: #fff;
    border-bottom: 2px solid #C4BDBD;
    /* margin-top: 0px; */

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
        color: #333333;
    }
`
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
`
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
`
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

`
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
`
const WelcomRowOne = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 98%;  
    margin-top: 120px;
    /* border: 1px solid red; */

    > p{
        font-size: 23px;
        font-weight: bold;
    }
`
const WelcomRowTwo = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
    width: 70%;  
    margin-top: 10px;
    /* border: 1px solid red; */
`
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

`