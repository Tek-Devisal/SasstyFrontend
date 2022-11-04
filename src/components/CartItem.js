import React from 'react'
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStateValue } from './BasketContex/StateProvider';

import {
  Typography
} from '@mui/material'
import ItemCounter from './ItemCounter';

import { BASE_URL } from '../pages/Home';

const CartItem = ({item}) => {

  const [{basket}, dispatch] = useStateValue();

  const removeFromBusket = () => { 
    // remove from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: item.id,
        })
    };
   


  return (
    <ComponentWrapper>
        <ProductImage>
          <img src={`${BASE_URL}${item?.img_1}`} />
        </ProductImage>
        <ProductDetails>
          <Typography>{item.name}</Typography>
          <Typography variant='p'>
            {item?.description}.
            <br/>
            <br/>
            <Typography style={{color: 'red'}}>GH₵{item?.price}</Typography>
          </Typography>
        </ProductDetails>
        <Action>
          <ItemCounter />
          <DeleteIcon onClick={removeFromBusket} style={{marginTop: '15px', opacity: 0.5, cursor: 'pointer'}}/>
        </Action>
    </ComponentWrapper>
  )
}

export default CartItem

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 140px;
  /* border: 1px solid green; */
  contain: content;
`
const ProductImage = styled.div`
  flex: 2;
  padding: 5px;

  >img{
    width: 80%;
    height: 85%;
    object-fit: cover;
  }
  /* border: 1px solid violet; */
`

const ProductDetails = styled.div`
  flex: 6;
  padding: 20px;
  /* border: 1px solid green; */
`

const Action = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 15px;
  
  /* border: 1px solid teal; */
`