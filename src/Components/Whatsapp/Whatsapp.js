import React from 'react';
import wimg from '../../assets/whatsapp.JPG'
import classes from './Whatsapp.module.css';

const Whatsapp = () => {
    return (
        <div className={classes.whatsapp}>
            <a href="https://wa.me/917438891575" target="_blank">
                <img src={wimg} alt='whatsapp chat bot' />
            </a>

        </div>
    )
};

export default Whatsapp;