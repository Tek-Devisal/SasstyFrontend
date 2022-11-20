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
            <p style={{fontSize: 30, fontWeight: 'bold'}}>Vendor Details</p>
            <form style={{display: 'flex', flexDirection: 'column', width: "20%", gap: 20}} onSubmit={formik.handleSubmit}>
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
            
                <button style={{margin: 20}} type="submit">Submit</button>
            </form>
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
    margin-top: 100px;
    margin-bottom: 100px;
    /* height: 100%; */
    min-width: 1280px;
    /* border: 1px solid red; */
`
