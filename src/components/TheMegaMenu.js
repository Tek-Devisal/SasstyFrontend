import React, {useContext} from 'react'
import styled from 'styled-components';
import MegaMenuChoiceContext from "../ContextAPI/MegaMenuContext"

const TheMegaMenu = ({title, content}) => {

    const { openMenu } = useContext(MegaMenuChoiceContext);
    // console.log(openMenu)
  return (
    <div>
        <MegaMenu>
            <TheMenu openMenu = {openMenu}>
                {/* <p>{title}</p> */}
                {content.map(element => <p key={title}>{element}</p>)}
            </TheMenu>
      </MegaMenu>
    </div>
  )
}

export default TheMegaMenu


const MegaMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    /* height: 500px;
    width: 1000px; */
    /* border: 1px solid red; */
`

const TheMenu = styled.div`
    position: absolute;
    display: ${props => props.openMenu ? 'flex' : 'none'};
    flex-direction: row;
    background-color: #fff;
    height: 500px;
    width: 75%;
    /* border: 1px solid red; */
    margin-top: 10px;
    z-index: 5;
`