'use client'
import React, { useEffect, useState } from 'react'
import styles from './bounty.module.scss'
import Image from 'next/image'
import PrizeCard from './Card'
// import { getBountyByID } from '@/lib/api/collection/bounty'
import { SubmissionModal } from '../Modal/Submit'
// import { useParams } from 'next/navigation'
import { getBountyByID } from '@/lib/api/collection/bounty'
import Login from '../Login/Login'
import { useSelector } from 'react-redux'

interface response {
    submissions: []
    title: string
}

interface AuthState {
    isAuthenticated: boolean;
}

interface RootState {
    auth: AuthState;
    isAuthenticated: boolean;
}

const Bounty = () => {
    const [showModal, setShowModal] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false);
    const {isAuthenticated} = useSelector((state: {auth: RootState})=> state.auth)
    const [data, setData] = useState<response | null>(null)
    // const params = useParams()

     const fetchData = async () => {
        try {
          const response = await getBountyByID('67b77246719356dc60e76295');
          console.log(response)
          setData(response.data)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      useEffect(() => {
        fetchData(); 
      }, []);

      const closeModal = () => {
        setShowLoginModal(false);
    }


  return (
    <>
    {showLoginModal && (
        <Login
            closeModal={closeModal}
            setShowLoginModal={setShowLoginModal}
        />
    )}
    <div className={styles.bounty}>
        <SubmissionModal isOpen={showModal} onClose={()=>setShowModal(false)} />
       <Image height={230} width={1440} src="/suiimage.svg" alt=""/>

       <div className={styles.bounty__header}>
            <Image height={100} width={100} src="/avesui.svg" alt=""/>

            <h3>{data?.title}</h3>
            <div className={styles.bounty__header__msg}>
                <p>by Sui Earn</p>
                <p>Due in 5h</p>
                <p>Submissions open</p>
                <p>Global</p>
                {/* <p>10 Comments</p> */}
            </div>

            <div className={styles.bounty__header__btn}>
                <button onClick={()=> {
                    if(isAuthenticated){
                        setShowModal(true)
                    }else{
                        setShowLoginModal(true)
                    }
                    }}>Submit Now</button>
                <h4>
                {data?.submissions?.length} Submissions
                </h4>
            </div>
       </div>

       <div className={styles.bounty__main}>
          <div className={styles.bounty__main__left}>
            <div> 
                <h5>About {data?.title}</h5>
                <p>{data?.about} </p>
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
                <p>{data?.eligibility}</p>
            </div>

            <div style={{marginTop: '49px'}}> 
                <h5>How to Participate</h5>
                <p>{data?.procedure}</p>
            </div>  
           </div>

           <div className={styles.bounty__main__right}>
            <PrizeCard data={data} setShowModal={setShowModal} setShowLoginModal={setShowLoginModal} isAuthenticated={isAuthenticated}/>
           </div>
       </div>
    </div>
    </>
  )
}

export default Bounty