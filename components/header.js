import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import mushPic from '../public/mushroom.png';
import Router from 'next/router';

class Header extends React.Component {
    onHandle = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        };
        fetch('https://maple-market-db.herokuapp.com/logout', requestOptions)
            .then(async (response) => {
                const data = await response;

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                if (response.status === 200) {
                    Router.push('/');
                } else {
                    throw new Error(await response.text());
                }
            })
            .catch((error) => {
                console.error('There was an error in logout fetch!', error);
            });
    };
    render() {
        return (
            <header className='w-full px-6 bg-Desert-Sand'>
                <div className='container mx-auto md:flex justify-between items-center'>
                    <Link href='/'>
                        <a className='block py-2 w-full text-center md:text-left md:w-auto text-gray-600 no-underline flex justify-center items-center'>
                            Maple Market
                        </a>
                    </Link>
                    <Image
                        src={mushPic}
                        alt='Maplemarket logo'
                        height='32'
                        width='32'
                    />
                    <div className='flex'>
                        <div className='w-full md:w-auto mb-6 md:mb-0 text-center md:text-right'>
                            <Link href='/signup'>
                                <a
                                    href='#'
                                    className='inline-block no-underline bg-Ebony text-white text-sm py-2 px-3'
                                >
                                    Sign Up
                                </a>
                            </Link>
                        </div>
                        <div className='w-full md:w-auto mb-6 md:mb-0 text-center md:text-right'>
                            <Link href='/login'>
                                <a
                                    href='#'
                                    className='inline-block no-underline bg-Ebony text-white text-sm py-2 px-3'
                                >
                                    Login
                                </a>
                            </Link>
                        </div>
                        <div className='w-full md:w-auto mb-6 md:mb-0 text-center md:text-right'>
                            <Link href='/user'>
                                <a
                                    href='#'
                                    className='inline-block no-underline bg-Ebony text-white text-sm py-2 px-3'
                                >
                                    My Account
                                </a>
                            </Link>
                        </div>
                        <div className='w-full md:w-auto mb-6 md:mb-0 text-center md:text-right'>
                            <Button
                                className='inline-block no-underline bg-Ebony text-white text-sm py-2 px-3'
                                onClick={this.onHandle}
                            >
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
