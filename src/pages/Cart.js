import React,{useState} from 'react'
import Footer from '../components/Footer';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import TrendingItemsTwo from '../components/TrendingItemsTwo';
import DailyDealsItemsTwo from '../components/DailyDealsItemsTwo';
import { BASE_URL } from './Home';
import axios from 'axios';
// import TrendingItemsHead from './Home'
import { PaystackButton } from 'react-paystack';
import PaystackPop from '@paystack/inline-js'

// Material UI components

import { 
    Button,
    Divider,
    Typography
} from '@mui/material';
import ProductGallery from '../components/ProductGallery';
import CartItem from '../components/CartItem';
import { useStateValue } from '../components/BasketContex/StateProvider';
// import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../components/BasketContex/reducer';




const Cart = () => {


    const [{ basket }] = useStateValue();
    console.log("My basket",basket);

    const [couponValue, setCouponValue] = useState()

    // const itemQuantity = localStorage.getItem("cart item quantity")
    console.log("Cart Qty: ",localStorage.getItem("cart item quantity"))

    const MakePayment = () => { 
        const paystack = new PaystackPop();
        paystack.newTransaction({
            key: 'pk_test_f38f4ed39ec5301f0cc6784799288b023132b805',
            amount: JSON.stringify(getBasketTotal(basket)*100),
            email: 'darkolawrence@gmail.com'
        })
     }

    const submitCoupon = (e) => { 
        e.preventDefault()

        try {
            const options = {
                url: `${BASE_URL}/users/v1/registerss/`,
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
                },
                data: {
                    coupon: couponValue
                }
              };
            
                axios(options)
                  .then(response => {
                  console.log(response.status);
                  });
        } catch (error) {
            console.log(error)
        }

        setCouponValue('')
     }

  return (
    <>
        <Navbar />
        <PageWrapper>
            <MainContent>
                <ImageSection>
                    <Typography variant="h3" mb={2}>Shopping Cart</Typography>
                    <Divider variant="middle" component="div" role="presentation"/>
                    {basket?.map(iteminfo=>(<CartItem item={iteminfo}/>))}

                </ImageSection>
                <ProductSection>
                    <p style={{marginLeft: 20, fontWeight: 'bold'}}>Order Summary</p>
                    <DivOne>
                        <p>Total ({basket?.length} items selected)</p>
                        <p>GH¢{getBasketTotal(basket)}</p>
                        {/* <CurrencyFormat 
                            value={getBasketTotal(basket)*itemQuantity}
                            decimalScale={2}
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'GH¢'} /> */}
                    </DivOne>
                    <DivTwo>
                        <p>Make payment</p>
                        <p>In order to make the payment for your product, we need you to connect your account to Sassty.</p>
                        <p>Kindly select the method you prefer.</p>
                        <DivImages>
                            <img src="/Images/mtn.png" alt="logo" />
                            <img src="/Images/tigo.png" alt="logo" />
                            <img src="/Images/voda.png" alt="logo" />
                            
                        </DivImages>
                    </DivTwo>

                    <CouponForm onSubmit={submitCoupon}>
                        <FormInput placeholder='Enter coupon...' type="text" onChange={(e)=>{setCouponValue(e.target.value)}} />
                        <input className='button-87' type='submit' value='Apply'/>
                    </CouponForm>
                    
                    <CheckOut onClick={MakePayment}>
                        <p>Check Out</p>
                    </CheckOut>
                    {/* <button class="button-52" role="button">Button 52</button> */}
                </ProductSection>
            </MainContent>

            <DailyDeals>
                <div style={{height: "103%", width: "150px", borderBottom: "2px solid #F93C00"}}>
                    <p>Similar Items</p>
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

export default Cart

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    background-color: #FDFDFD;
    height: auto;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;
    /* border: 1px solid red; */
`
const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    padding-right: 50px;
    margin-bottom: 150px;
    /* border: 1px solid red; */

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
    flex-direction: column;
    flex: 60%;
    padding: 20px;
    height: auto;
    /* border: 1px solid red; */
`
const ProductSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 40%;
    /* margin-left: 20px; */
    /* border: 1px solid red; */
`
const DivOne = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 95%;
    margin-bottom: 20px;
    /* border: 1px solid green; */
    /* margin-left: 15px; */
    margin-right: 15px;

    >p{
        margin-block-start: 0.5em;
    }
`
const DivTwo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 95%;
    line-height: 25px;
    /* margin-left: 15px; */
    padding-right: 15px;
    padding-left: 40px;
    /* margin-right: 40px; */
    /* border: 1px solid blue; */
    background-color: #F93C0033;
`
const DivImages = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    width: 95%;
    margin-top: 20px;
    /* border: 1px solid blue; */
`
const CheckOut = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D0D0D0;
    width: 250px;
    height: 40px;
    /* border-radius: 8px; */
    background-color: #FF2164;
    margin-top: 10px;
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px; */
    cursor: pointer;

    >p{
        color: #fff;
        margin-block-start: 0.5em;
        font-size: 16px;
        font-weight: 'bold';
    }
`
const CouponForm = styled.form`
    display: flex;
    width: 250px;
    height: 50px;
    /* border: 1px solid red; */
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-top: 20px;
`
export const FormInput = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    height: 38px;
    width: 60%;
    /* border-radius: 0px 0px 0px 0px; */
    border: 1px solid #ccc;
    outline: none;

`