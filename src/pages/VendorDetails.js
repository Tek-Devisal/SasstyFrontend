import React from 'react'
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from '../components/Footer';

const VendorDetails = () => {

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          shoplocation: '',
          contact: ''
        },
        validationSchema: Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
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
                {/* <label htmlFor="firstName">First Name</label> */}
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    placeholder="First Name"
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                ) : null}
            
                {/* <label htmlFor="lastName">Last Name</label> */}
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    placeholder="Last Name"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
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
                    <div>{formik.errors.email}</div>
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
                    <div>{formik.errors.shoplocation}</div>
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
                    <div>{formik.errors.shoplocation}</div>
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
    height: 450px;
    /* height: 100%; */
    min-width: 1280px;
    /* border: 1px solid red; */
`
