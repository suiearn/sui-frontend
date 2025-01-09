import React from 'react';
import styles from './navbar.module.scss'
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__navlinks}>
                <div className={styles.logo}>
                    <Image src='/sui-earn-logo.svg' alt="suiearn logo" width={118} height={32} />
                </div>
                <div className={styles.links}>
                    <p>Home</p>
                    <p>Bounties</p>
                    <p>Jobs</p>
                    <p>Learn Sui</p>
                </div>
            </div>
            <div className={styles.navbar__nav_buttons}>
                <div>Log in</div>
                <button className='btn primary small-btn'>Sign up</button>
            </div>
        </div>
    )
}

export default Navbar