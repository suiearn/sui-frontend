'use client'
import React, { useEffect, useState } from 'react'
import styles from './bounty.module.scss'
import Image from 'next/image'
import PrizeCard from './Card'
import { getBountyByID } from '@/lib/api/collection/bounty'
import { SubmissionModal } from '../Modal/Submit'

const Bounty = () => {
    const [showModal, setShowModal] = useState(false)

    //  const fetchData = async () => {
    //     try {
    //       const response = await getBountyByID();

    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   };

    //   useEffect(() => {
    //     fetchData(); 
    //   }, []);





  return (
    <div className={styles.bounty}>
        <SubmissionModal isOpen={showModal} onClose={()=>setShowModal(false)} />
       <Image height={230} width={1440} src="/suiimage.svg" alt=""/>

       <div className={styles.bounty__header}>
            <Image height={100} width={100} src="/avesui.svg" alt=""/>

            <h3>Talent Acquisition Specialist - Web3</h3>
            <div className={styles.bounty__header__msg}>
                <p>by Sui Earn</p>
                <p>Due in 5h</p>
                <p>Submissions open</p>
                <p>Global</p>
                {/* <p>10 Comments</p> */}
            </div>

            <div className={styles.bounty__header__btn}>
                <button onClick={()=> setShowModal(true)}>Submit Now</button>
                <h4>
                   67 Submissions
                </h4>
            </div>
       </div>

       <div className={styles.bounty__main}>
          <div className={styles.bounty__main__left}>
            <div> 
                <h5>About Talent Acquisition Specialist - Web3</h5>
                <p>The Sui Network is redefining blockchain scalability and efficiency. Your task is to create an engaging and well-researched 
                    Twitter thread (at least 7 tweets) explaining what makes Sui unique.  </p>
            </div>

            {/* <div style={{marginTop: '49px'}}> 
                <h5>Track: Cumulative PnL</h5>
                <p>For the whales and big movers, this category is all about who’s got the size to dominate the market. Won by achieving the highest net profit over the competition period for the coin pairs mentioned here.
                Compete Now: https://app.wasabi.xyz/solanagames</p>
            </div> */}

            {/* <div style={{marginTop: '49px'}}> 
                <h5>Prize Pool 💰</h5>
                <p>For the whales and big movers, this category is all about who’s got the size to dominate the market. Won by achieving the highest net profit over the competition period for the coin pairs mentioned here.
                Compete Now: https://app.wasabi.xyz/solanagames</p>
            </div> */}


            <div style={{marginTop: '49px'}}> 
                <h5>Eligibility & Requirements: </h5>
                <p>Your thread must be entirely original and not copied from existing materials. Plagiarism will result in disqualification.</p>
            </div>

            <div style={{marginTop: '49px'}}> 
                <h5>How to Participate</h5>
                <p>Make a Twitter trend by creating an engaging and informative thread about the Sui Network. Your thread should be well-structured, insightful, and easy to understand. Use visuals, key facts, and a strong call to action to drive engagement.
                    Once posted, submit your Twitter thread link as a reply to this bounty. The best submissions will be reviewed and rewarded based on clarity, accuracy, and engagement.
                    Start writing and make it trend! 🔥 #SuiNetwork #Web3 #Crypto</p>
            </div>  
           </div>

           <div className={styles.bounty__main__right}>
            <PrizeCard setShowModal={setShowModal} />
           </div>
       </div>
    </div>
  )
}

export default Bounty