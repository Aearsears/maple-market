import React from 'react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

const SignUpForm = () => {
    const validationSchema = yup.object({
        username: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
        name: yup
            .string('Enter your display name')
            .min(1, 'display name should be at least one character')
            .required('display name is required')
    });
    const formik = useFormik({
        initialValues: {
            username: 'johnsmith@gmail.com',
            password: 'password',
            name: 'wackywizard3'
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values, null, 2)
            };
            fetch(
                'https://maple-market-db.herokuapp.com/signup',
                requestOptions
            )
                .then(async (response) => {
                    const data = await response.json();

                    // check for error response
                    if (!response.ok) {
                        // get error message from body or default to response status
                        const error = (data && data.message) || response.status;
                        return Promise.reject(error);
                    }
                    return data;
                })
                .catch((error) => {
                    console.error('There was an error!', error);
                    console.error('There was an error!', error.stack);
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
                <Typography variant="h1">Sign up</Typography>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="username"
                        name="username"
                        label="Username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.username &&
                            Boolean(formik.errors.username)
                        }
                        helperText={
                            formik.touched.username && formik.errors.username
                        }
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
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Display name"
                        type="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={
                            formik.touched.displayName &&
                            formik.errors.displayName
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
            <Footer />
        </div>
    );
};

export default SignUpForm;
