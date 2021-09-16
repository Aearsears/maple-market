import React, {useState} from 'react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Head from 'next/head';
import Router from 'next/router';
import 'tailwindcss/tailwind.css';

const LoginForm = () => {
    const[signinSuccess, setSigninSuccess] = useState(true);
    const[errorMess, setErrorMess] = useState('');

    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required')
    });
    const formik = useFormik({
        initialValues: {
            email: 'johnsmith@gmail.com',
            password: 'password'
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values, null, 2),
                credentials: 'include'
            };
            fetch('/api/login', requestOptions)
                .then(async (response) => {
                    const sta = response.status;
                    console.log(sta);
                    if (sta === 200) {
                        Router.push('/');
                        return;
                    }
                    else if(sta===401){
                        const err = await response.text();
                        setErrorMess(err);
                        setSigninSuccess(false);
                        return;
                    }
                    else {
                        return Promise.reject(sta);
                    }
                })
                .catch((error) => {
                    console.error('There was an error!', error);
                });
        }
    });

    return (
        <div className="h-screen">
            <Head>
                <title>Maple Market</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
                <meta name="description" content="Prices for Maplestory"></meta>
                <meta name="keywords" content="Maplestory, GMS, EMS"></meta>
                <meta charset="UTF-8"></meta>
            </Head>
            <Header />
            <Navbar />
            <h1 className="text-center py-2 bg-Artichoke">
                {' '}
                Welcome to MapleMarket!{' '}
            </h1>
            <div>
                <Typography variant="h1">Login</Typography>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                        }
                        helperText={
                            formik.touched.password && formik.errors.password
                        }
                    />
                    <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </div>
            {
                !signinSuccess ? <div> {errorMess} </div> : null
            }
            <Footer />
        </div>
    );
};

export default LoginForm;
