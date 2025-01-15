import React from 'react';
import styles from './footer.module.scss'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={`${styles.footer} app_container`}>
            <div className={styles.footer_upper}>
                <div>
                    <div className={styles.logo}>
                        <Image src='/sui-earn-logo.svg' alt="suiearn logo" width={118} height={32} />
                        <p>Discover high paying crypto bounties, projects and grants from the best Solana companies in one place and apply to them using a single profile.</p>
                    </div>
                </div>
                <div className={styles.footer_links}>
                    <div>
                        <h4>opportunities</h4>
                        <p>Bounty</p>
                        <p>Jobs</p>
                        <p className='flex items-center gap-2'>Solutions<span><Image src="/new-badge.svg" alt="new badge" width={42} height={22} /></span></p>
                    </div>
                    <div>
                        <h4>categories</h4>
                        <p>Content</p>
                        <p>Design</p>
                        <p>Development</p>
                        <p>Others</p>
                    </div>
                </div>
                <div className={styles.footer_email}>
                    <h4>Stay up to date</h4>
                    <div className='flex gap-3'>
                        <input type='text' placeholder='Enter your email' />
                        <button className={styles.signin_button}>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className={styles.footer_lower}>
                <div className={styles.copyright}>© 2025 Sui Earn. All rights reserved.</div>
                <div className={styles.terms}>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    )
}

export default Footer