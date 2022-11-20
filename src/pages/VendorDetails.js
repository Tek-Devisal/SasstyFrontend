import React from 'react'
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from '../components/Footer';

const VendorDetails = () => {

    const formik = useFormik({
        initialValues: {
          ShopName: '',
          ManagerName: '',
          email: '',
          shoplocation: '',
          contact: ''
        },
        validationSchema: Yup.object({
          ShopName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          ManagerName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          shoplocation: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          contact: Yup.string()
            .required('Required'),
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

  return (
    <>
        <Navbar />
        <PageWrapper>
            <FormContainer>
            <p style={{fontSize: 20, fontWeight: 'bold', color: 'linear-gradient(270deg,#ff4733,#ff6e26)'}}>VENDOR DETAILS</p>
            <form className='form_control2' style={{display: 'flex', flexDirection: 'column', width: 300, gap: 20}} onSubmit={formik.handleSubmit}>
                {/* <label htmlFor="ShopName">First Name</label> */}
                <input
                    id="ShopName"
                    name="ShopName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.ShopName}
                    placeholder="Shop Name"
                />
                {formik.touched.ShopName && formik.errors.ShopName ? (
                    <div className='danger'>{formik.errors.ShopName}</div>
                ) : null}
            
                {/* <label htmlFor="ManagerName">Last Name</label> */}
                <input
                    id="ManagerName"
                    name="ManagerName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.ManagerName}
                    placeholder="Manager Name"
                />
                {formik.touched.ManagerName && formik.errors.ManagerName ? (
                    <div className='danger'>{formik.errors.ManagerName}</div>
                ) : null}
            
                {/* <label htmlFor="email">Email Address</label> */}
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Email"
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className='danger'>{formik.errors.email}</div>
                ) : null}

                {/* <label htmlFor="location">Shop Location</label> */}
                <input
                    id="shoplocation"
                    name="shoplocation"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.shoplocation}
                    placeholder="Shop Location"
                />
                {formik.touched.shoplocation && formik.errors.shoplocation ? (
                    <div className='danger'>{formik.errors.shoplocation}</div>
                ) : null}

                <input
                    id="contact"
                    name="contact"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contact}
                    placeholder="Contact"
                />
                {formik.touched.shoplocation && formik.errors.shoplocation ? (
                    <div className='danger'>{formik.errors.shoplocation}</div>
                ) : null}
            
                {/* <button style={{margin: 20}} type="submit">Submit</button> */}
                <input
                    type="submit"
                    className="d-block w-100 border-0 submit text-white"
                    value="Create Account"
                    />
            </form>
            </FormContainer>
        </PageWrapper>
        <Footer />
    </>
  )
}

export default VendorDetails

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    
    /* height: 100%; */
    min-width: 1280px;
    /* border: 1px solid red; */
`
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: auto;
    /* border: 1px solid green; */
    margin: 100px 100px;
    padding: 30px 50px 30px 50px;
    border-radius: 8px;
    /* box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`