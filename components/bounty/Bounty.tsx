import React from 'react'
import styles from './bounty.module.scss'
import Image from 'next/image'
import PrizeCard from './Card'

const Bounty = () => {
  return (
    <div className={styles.bounty}>
       <Image height={230} width={1440} src="/suiimage.svg" alt=""/>

       <div className={styles.bounty__header}>
            <Image height={100} width={100} src="/avesui.svg" alt=""/>

            <h3>Talent Acquisition Specialist - Web3</h3>
            <div className={styles.bounty__header__msg}>
                <p>by Gelato Network</p>
                <p>Due in 5h</p>
                <p>Submissions open</p>
                <p>Global</p>
                <p>10 Comments</p>
            </div>

            <div className={styles.bounty__header__btn}>
                <button>Submit Now</button>
                <h4>
                   67 Submissions
                </h4>
            </div>
       </div>

       <div className={styles.bounty__main}>
          <div className={styles.bounty__main__left}>
            <div> 
                <h5>About Talent Acquisition Specialist - Web3</h5>
                <p>Talent Acquisition Specialist - Web3 is a spot leverage DEX that allows you to long, short, swap, and earn on your favorite tokens, including long-tail assets such as meme coins.
                    We recently launched a 30-day trading competition called Solana Games. As part of this competition, traders can compete for either the most volume or the highest PnL through trading certain Solana pairs on the Wasabi DEX.
                    Currently, two tracks are live: Highest volume and Highest Cumulative PnL.  </p>
            </div>

            <div style={{marginTop: '49px'}}> 
                <h5>Track: Cumulative PnL</h5>
                <p>For the whales and big movers, this category is all about who’s got the size to dominate the market. Won by achieving the highest net profit over the competition period for the coin pairs mentioned here.
                Compete Now: https://app.wasabi.xyz/solanagames</p>
            </div>

            <div style={{marginTop: '49px'}}> 
                <h5>Prize Pool 💰</h5>
                <p>For the whales and big movers, this category is all about who’s got the size to dominate the market. Won by achieving the highest net profit over the competition period for the coin pairs mentioned here.
                Compete Now: https://app.wasabi.xyz/solanagames</p>
            </div>


            <div style={{marginTop: '49px'}}> 
                <h5>Eligibility & Requirements: </h5>
                <p>For the whales and big movers, this category is all about who’s got the size to dominate the market. Won by achieving the highest net profit over the competition period for the coin pairs mentioned here.
                Compete Now: https://app.wasabi.xyz/solanagames</p>
            </div>

            <div style={{marginTop: '49px'}}> 
                <h5>How to Participate</h5>
                <p>For the whales and big movers, this category is all about who’s got the size to dominate the market. Won by achieving the highest net profit over the competition period for the coin pairs mentioned here.
                Compete Now: https://app.wasabi.xyz/solanagames</p>
            </div>  
           </div>

           <div className={styles.bounty__main__right}>
            <PrizeCard />
           </div>
       </div>
    </div>
  )
}

export default Bounty