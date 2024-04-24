import React from 'react'

import instantCreditInfoImg from '../images/instantCreditInfo.webp';

const InstantCreditInfo = () => {
  return (
    <div className='instantCreditInfo'>
        <div className='instantCreditInfoLeftBody'>
            <h1 className='instantCreditTextInfo'>We’ve all heard of instant groceries, now say hello to
instant credit.</h1>
        <span className='instantCreditTextInfo'>0% hassle, 100% paperless. Get your Uni Card instantly.</span>
        </div>
        <div className='onePercentCashbackInfoRightBody'>
            <img className='onePercentCashbackInfoImg' src={instantCreditInfoImg} alt='onePercentCashbackInfoImg' />
        </div>
    </div>
  )
}

export default InstantCreditInfo
