import React from 'react';
import styled from 'styled-components';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

const NavbarTwo = () => {
  return (
    <NavbarContainer>
        <NavContent>
            <SearchBarContainer>
                <FormContainer>
                    <Form>
                        <FormInput type="text" placeholder='what you want, delivered to where you want' />
                        <FormButton>
                            <p>Search</p>
                        </FormButton>
                    </Form>
                </FormContainer>
            </SearchBarContainer>
        </NavContent>
    </NavbarContainer>
  )
}

export default NavbarTwo

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* bottom border shadow */
    position: relative;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
     
    top: 0; /* Stay on top */
    z-index: 2; /* Stay on top */
    width: 100%; /* Full width */
    transition: top 0.3s;
    /* overflow: hidden; */
    background-color: #fff;
    height: 70px;
    /* width: 218.5vh; */
    /* border: 1px solid RED; */

    /* @media only screen and (min-device-width : 0px) and (max-device-width :768px){
        display: none;
    } */
    
`
const NavContent = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    

    > p {
        color: #fff;
        font-size: 13px;
        font-weight: 400;
        margin-left: 10px;
        font-family: Arial, sans-serif;
    }
`
const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 0.562;
    /* border: 1px solid white; */
    height: 80%;
    /* width: auto; */

`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: center;
    align-items: center;
    text-align: center;
    /* border: 1px solid white; */
    width: auto;
    margin-block-end: 0em;
    margin-block-start: 0em;
    padding-block-end: 0em;
    padding-block-start: 0em;
`
export const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* border: 1px solid white; */
    width: 100%;
    margin-block-end: 0em;
    margin-block-start: 0em;
    padding-block-end: 0em;
    padding-block-start: 0em;
    

`
export const FormInput = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    height: 45px;
    width: 750px;
    /* border left redius */
    border-radius: 5px 5px 5px 5px;
    border: 1px solid #ccc;
    outline: none;
    /* border: none; */
    font-size: 1.2rem;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    padding-left: 10px;
    margin-right: 20px;
    /* opacity: 0.8 */
    /* border: 1px solid white; */

`
export const FormButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 45px;
    width: 120px;
    background-color: #E4E4E4;
    color: #555;
    font-size: 1.4rem;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    border-radius: 5px 5px 5px 5px;
    border: none;
    outline: none;
    cursor: pointer;
    /* font-weight: 50; */
`
