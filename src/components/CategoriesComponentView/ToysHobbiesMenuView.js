import React, { useContext } from 'react'
import MegaMenuStateContext from '../../ContextAPI/MegaMenuContext';
import { Link } from 'react-router-dom';
import { Subsublist, PageWrapper } from './WomensClothsMenuView'

const ToysHobbiesMenuView = () => {

  const {subSubMenuHobbies, setSubsubcatURL } = useContext(MegaMenuStateContext);

  const setURLName = (url) => { 
    setSubsubcatURL(url)
    console.log("url name", url)
   }

  return (
    <PageWrapper>
      {subSubMenuHobbies?.map(item => (<Subsublist>
        <h6>{item.name}</h6>
        {item.data.map(subname =>(
        <Link onClick={()=>setURLName(subname.ref_code)} to="/product-list">{subname.name}</Link>
        ))}

      </Subsublist>))}


    </PageWrapper>
  )
}

export default ToysHobbiesMenuView