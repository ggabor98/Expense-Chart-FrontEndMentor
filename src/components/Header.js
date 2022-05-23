import React from 'react'
import data from '../data.json';
import '../styles/header.css';

export const Header = () => {
    const total = data.reduce((previousValue, currentValue) => previousValue + currentValue.amount, 0)

    return (
        <div className='container-header'>
            <div className='container-header-my-balance'>
                <span className='title-header-my-balance'>My balance</span>
                <span className='amount-header-my-balance'>${total}</span>
            </div>

            <div className='circles-header'></div>
        </div>
    )
}
