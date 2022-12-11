import React,{ useContext, useState } from 'react'
import MegaMenuStateContext from '../ContextAPI/MegaMenuContext'
import { Line } from './Footer'
import styled from 'styled-components'

const MobileCategoryItem = ({name, id}) => {

    const {setCatIdforMegaMenu} = useContext(MegaMenuStateContext);
    const [bgcolor, setBgcolor] = useState(false)
    

    const assignCategoryId = () => {
        // setCategoryid(categoryId);
        setCatIdforMegaMenu(id);
      };

  return (
    <ItemWrapper
        bgcolor={bgcolor}
        onClick={()=>{
            assignCategoryId()
            setBgcolor(true)
            }
        }
    >
        <p>{name}</p>
        <Line style={{marginTop: 5, backgroundColor: '#fff', width: '90%'}}/>
    </ItemWrapper>
  )
}

export default MobileCategoryItem

const ItemWrapper = styled.div`
    /* background-color: ${(props) => (props.bgcolor==true ? 'red' : '')}; */
`