import React from 'react'

const CashbackInfo = () => {
  return (
    <>
    <div className='onePercentCashbackInfo'>
        <div className='onePercentCashbackInfoLeftBody'>
            <h1>1% assured cashback on your spends.The more you spend, the more you earn.</h1>
        <   span className='onePercentCashbackTermsAndConditions'>Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions.</span>
        </div>
        <div className='onePercentCashbackInfoRightBody'>
            <img className='onePercentCashbackInfoImg' src='https://www.uni.cards/images/one_percent_cashback.png' alt='onePercentCashbackInfoImg' />
        </div>
    </div>
    <div className='FiveXMoreCashbackValueInfo'>
    <div className='FiveXMoreCashbackValueLeftBody'>
        <img className='onePercentCashbackInfoImg' src='https://www.uni.cards/images/five_x_rewards.png' alt='onePercentCashbackInfoImg' />
    </div>
        <div className='FiveXMoreCashbackValueRightBody'>
            <h1>5x more value than your cashback, only at the Uni Store.</h1>
        </div>
    </div>
    <div className='onePercentCashbackInfo'>
        <div className='onePercentCashbackInfoLeftBody'>
            <h1>Zero Forex Markup.</h1>
        <   span className='onePercentCashbackTermsAndConditions'>Go international, without any fees.</span>
        </div>
        <div className='onePercentCashbackInfoRightBody'>
            <img className='onePercentCashbackInfoImg' src='https://www.uni.cards/images/forex_globe.png' alt='onePercentCashbackInfoImg' />
        </div>
    </div>
    </>
  )
}

export default CashbackInfo
