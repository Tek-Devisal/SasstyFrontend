import React, {useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const ItemCounter = () => {
    
    const [itemNum, setItemNum] = useState(1);


        const addItem = () => {
          setItemNum(itemNum + 1);
          
        }
      
        const subItem = () => {
            if(itemNum >= 2){
            setItemNum(itemNum - 1);
            }
        }

  return (
    <div>
        <p>Quantity</p>
          <div style={{marginTop: 5}} className='item-counter'>
              <RemoveIcon onClick={()=>{subItem()}}/>
              <p>{itemNum}</p>
              <AddIcon onClick={()=>{addItem()}}/>
          </div>
    </div>
  )
}

export default ItemCounter