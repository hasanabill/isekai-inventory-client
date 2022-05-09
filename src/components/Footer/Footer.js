import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear();

    return (
        <div className='bg-dark text-white m-0 py-5'>
            <h2 className='text-center'>Isekai Inventory</h2>
            <div className='d-flex justify-content-center py-4'>
                <SocialIcon className='mx-2' target='_blank' url='https://www.facebook.com/mahmudulhasananabil'></SocialIcon>
                <SocialIcon className='mx-2' target='_blank' url='https://www.instagram.com/hasanabil_/'></SocialIcon>
                <SocialIcon className='mx-2' target='_blank' url='https://www.linkedin.com/in/mahmudulhasananabil/'></SocialIcon>
                <SocialIcon className='mx-2' target='_blank' url='https://twitter.com/hasanabil_'></SocialIcon>
            </div>
            <p className='text-center'>copyright © {year}</p>
        </div>
    );
};

export default Footer;