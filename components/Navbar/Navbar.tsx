"use client"
import React, { useState } from 'react';
import styles from './navbar.module.scss'
import Image from 'next/image';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';

const Navbar = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const closeModal = () => {
        setShowLoginModal(false);
        setShowSignUpModal(false)
    }
    return (
        <>
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
                    <div onClick={() => setShowLoginModal(true)}>Log in</div>
                    <button onClick={() => setShowSignUpModal(true)} className='btn primary small-btn'>Sign up</button>
                </div>
            </div>
            {showLoginModal && (
                <Login closeModal={closeModal} />
            )}
            {showSignUpModal && (
                <SignUp closeModal={closeModal} />
            )}
        </>
    )
}

export default Navbar