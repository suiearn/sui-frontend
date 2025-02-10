import React from 'react';
import styles from './header.module.scss'
import Image from 'next/image';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__text}>
        <h1>Discover High-Paying Crypto Bounties and Freelance Jobs</h1>
        <p>Browse 54,315 sui bounties, jobs in web3 at 7,073 projects. Filter the best remote crypto jobs by salary, location, and skills.</p>
        <div className={styles.header__button_cta}>
          <button className='btn primary small-btn'>Become a sponsor</button>
          <Image src="/join.svg" alt="join others" width={233} height={44} />
        </div>
      </div>
      <div>
        <Image src='/header-image.svg' alt="header-image" className='w-full h-full' width={0} height={0} />
      </div>
    </div>
  )
}

export default Header