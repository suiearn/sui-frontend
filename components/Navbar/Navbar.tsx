"use client"
import React, { useState } from 'react';
import styles from './navbar.module.scss'
import Image from 'next/image';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import Link from 'next/link';

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
                        <Link href={"/"}>
                            <p>Home</p>
                        </Link>
                        <Link href={"/bounty"}>
                            <p>Bounties</p>
                        </Link>
                        {/* <p>Jobs</p> */}
                        <Link href="https://sui.io/intro-to-sui" target='_blank'>
                            <p>Learn Sui</p>
                        </Link>
                    </div>
                </div>
                <div className={styles.navbar__nav_buttons}>
                    <div onClick={() => setShowLoginModal(true)} className='whitespace-nowrap'>Log in</div>
                    <button onClick={() => setShowSignUpModal(true)} className='btn primary small-btn'>Sign up</button>
                </div>
                {/* <div className={styles.ellipses}>
                    <Image src='/navbar-ellipses.svg' alt="navbar menu" width={40} height={40} />
                </div> */}
            </div>
            {showLoginModal && (
                <Login
                    closeModal={closeModal}
                    setShowSignUpModal={setShowSignUpModal}
                    setShowLoginModal={setShowLoginModal}
                />
            )}
            {showSignUpModal && (
                <SignUp closeModal={closeModal}
                    setShowSignUpModal={setShowSignUpModal}
                    setShowLoginModal={setShowLoginModal}
                />
            )}
        </>
    )
}

export default Navbar