import React from 'react'

import '../App.css';

const Body = () => {
  return (
    <div className='bodyContainer'>
        <div className='leftBody'>
            <h1>NX Wave. <span className='subHeading'>The next-gen credit card for those who love rewards.</span></h1>
            <span className='benefits'>1% Cashback <span className='star'>*</span>  5x Rewards  <span className='star'>*</span>  Zero Forex Markup</span>
            <input className='inputPhone' inputMode='numeric' placeholder='Enter Phone Number' />
            <div className='termsAndCondition'>
                <input type="checkbox" />
                <label className='termsAndConditionLabel'>You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</label>
            </div>
        </div>
        <div className='rightBody'>
            <img className='debitCard' alt='debitCard' src='https://www.uni.cards/images/nx-wave/nx_wave_hero.png' loading='lazy' />
        </div>
    </div>
  )
}

export default Body
