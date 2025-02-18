/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react';
import styles from './navbar.module.scss'
import Image from 'next/image';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/lib/redux-store/store';
import { logoutSuccess } from '@/lib/redux-store/auth/authSlice';

const Navbar = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    // useEffect(() => {
    //     setShowDropdown(false)
    // }, [])

    const dispatch = useAppDispatch()
    const { isAuthenticated, username } = useSelector((state: any) => state.auth)
    const router = useRouter()
    const closeModal = () => {
        setShowLoginModal(false);
        setShowSignUpModal(false)
    }
    const logout = () => {
        dispatch(logoutSuccess());
        router.push('/')
    };
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbar__navlinks}>
                    <Link href={'/'}>
                        <div className={styles.logo}>
                            <Image src='/sui-earn-logo.svg' alt="suiearn logo" width={118} height={32} />
                        </div>
                    </Link>
                    <div className={styles.links}>
                        <Link href={"/"}>
                            <p>Home</p>
                        </Link>
                        {/* <Link href={"/bounty"}>
                            <p>Bounties</p>
                        </Link> */}
                        {/* <p>Jobs</p> */}
                        <Link href="https://sui.io/intro-to-sui" target='_blank'>
                            <p>Learn Sui</p>
                        </Link>
                    </div>
                </div>
                <div className={styles.navbar__nav_buttons}>
                    {isAuthenticated ? ("") : (
                        <>
                            <div onClick={() => setShowLoginModal(true)} className='whitespace-nowrap'>Log in</div>
                            <button onClick={() => setShowSignUpModal(true)} className='btn primary small-btn'>Sign up</button>
                        </>
                    )}
                    {isAuthenticated ? (
                        <>
                            <div className='flex gap-2 items-center cursor-pointer' onClick={() => setShowDropdown(!showDropdown)}>
                                <Image src={"/profile-image.svg"} alt="profile image" width={45} height={45} />
                                <p className='text-[14px] font-bold'>{username}</p>
                            </div>
                            {/* <Image src={'/arrow-down.svg'} alt="dropdown" width={40} height={40} /> */}

                            {showDropdown && (
                                <div className={styles.navbar_dropdown}>
                                    <div className='flex flex-col justify-start gap-2 space-y-2' onClick={() => router.push('/profile')}>
                                        {/* <Image src='/user-icon.svg' alt="profile" width={20} height={20} /> */}
                                        <p className={`${styles.show_link} font-semibold flex items-center gap-3`}>
                                        <Image src='/home-icon.svg' alt="profile" width={20} height={20} /> Home
                                        </p>
                                        <p className={`${styles.show_link} font-semibold flex items-center gap-3`}>
                                        <Image src='/bounties-icon.svg' alt="profile" width={20} height={20} /> Bounties
                                        </p>
                                        <p className='font-semibold flex items-center gap-3'>
                                        <Image src='/user-icon.svg' alt="profile" width={20} height={20} /> Profile
                                        </p>
                                    </div>
                                    <button onClick={logout} className='btn bg-red-500 p-2 rounded-sm w-full'>Sign out</button>
                                </div>
                            )}
                        </>
                    ) : ("")}
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