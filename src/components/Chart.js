import React from 'react'
import '../styles/chart.css';
import data from '../data.json';

export const Chart = () => {
    const weekdays = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    
    const isToday = (dayName) => {
        const today = new Date().getDay();
        return dayName === weekdays[today];
    }

    const renderChartBar = () => (
        data.map((x, idx) => 
            <div id='hola' key={idx} style={{width: '100%', textAlign: 'center', position: 'relative'}}>
                <div className={`container-chart-bar ${isToday(x.day) ? 'today' : ''}`} style={{height: x.amount*2}}></div>    
                <tooltip className='tooltip-amount-bar-chart'> ${x.amount} </tooltip>
                <span className='container-chart-bar-label'>{x.day}</span>
            </div>
        )
    )

    return (
        <div className='container-chart'>
            <p className='chart-title'> Spending - Last 7 days </p>

            <div className='chart-component-container'>
                {renderChartBar()}
            </div>

            <hr className='chart-divider' />

            <div className='chart-container-information'>
                <div className='chart-total-amount-container'>
                    <span className='chart-total-amount-title'>Total this month</span>
                    <span className='chart-total-amount-price'>$478.33</span>
                </div>
                <div className='chart-total-amount-container'>
                    <span className='chart-total-amount-increase'>+2.4%</span>
                    <span className='chart-total-amount-title'>from last month</span>
                </div>
            </div>
        </div>
    )
}
