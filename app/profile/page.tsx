/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import styles from './page.module.scss';
import { useSelector } from 'react-redux';

const page = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { username, email } = useSelector((state: any) => state.auth)

  const getTabsData = (value: string, tabNumber: number) => {
    if (value === 'Activity') {
      setActiveTab(1)
    }
    else {
      setActiveTab(tabNumber)
    }
  }
  return (
    <div>
      <Image src="/profile-header.svg"
        width={0}
        height={0}
        style={{ width: '100%', height: '100%' }}
        alt="profile header image"
      />
      <div className='app_container mb-10'>
        <div className={styles.profile_info_container}>
          <div className={styles.profile_name}>
            <div className={styles.profile_image}>
              <Image src={"/profile-image.svg"} alt="profile image" width={130} height={130} />
            </div>
            <div className={styles.name}>
              <h3>{username}</h3>
              <h4>{email}</h4>
            </div>
          </div>
          <div className={styles.profile_btn}>
            <button className={styles.contact_button}>
              <span><Image src='/mail.svg' width={20} height={20} alt="contact " /></span>
              Contact
            </button>
            <button className={styles.share_button}>
              <span><Image src='/share.svg' width={20} height={20} alt="contact " /></span>
              Share
            </button>
            <div className={styles.ellipses}>
              <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00016 2.83332C8.4604 2.83332 8.8335 2.46023 8.8335 1.99999C8.8335 1.53975 8.4604 1.16666 8.00016 1.16666C7.53993 1.16666 7.16683 1.53975 7.16683 1.99999C7.16683 2.46023 7.53993 2.83332 8.00016 2.83332Z" stroke="#344054" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.8335 2.83332C14.2937 2.83332 14.6668 2.46023 14.6668 1.99999C14.6668 1.53975 14.2937 1.16666 13.8335 1.16666C13.3733 1.16666 13.0002 1.53975 13.0002 1.99999C13.0002 2.46023 13.3733 2.83332 13.8335 2.83332Z" stroke="#344054" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.16683 2.83332C2.62707 2.83332 3.00016 2.46023 3.00016 1.99999C3.00016 1.53975 2.62707 1.16666 2.16683 1.16666C1.70659 1.16666 1.3335 1.53975 1.3335 1.99999C1.3335 2.46023 1.70659 2.83332 2.16683 2.83332Z" stroke="#344054" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        <div className={`${styles.about}`}>
          <h4>About me</h4>
          <div>
            <div className={`${styles.about_info} space-y-4`}>
              <p>I&apos;m a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development. I&apos;m always striving to grow and learn something new and I don&apos;t take myself too seriously.</p>
              <p>I&apos;m passionate about helping startups grow, improve their customer experience, and to raise venture capital through good design.</p>
              
              <div className={styles.social_icons}>
                <Image src='/twitter.svg' alt="twitter" width={24} height={24} />
                <Image src='/linkedin.svg' alt="linkedin" width={24} height={24} />
                <Image src='/facebook.svg' alt="facebook" width={24} height={24} />
                <Image src='/github.svg' alt="github" width={24} height={24} />
                <Image src='/finger.svg' alt="social" width={24} height={10} />
                <Image src='/dribble.svg' alt="dribble" width={24} height={24} />
              </div>
            </div>
            <div className={styles.awards}>
              <div className={styles.info}>
                <h4>$14</h4>
                <h5>Earned</h5>
              </div>
              <div className={styles.info}>
                <h4>6</h4>
                <h5>Submission</h5>
              </div>
              <div className={styles.info}>
                <h4>2</h4>
                <h5>Won</h5>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.proof}`}>
          <h4>Proof</h4>
          <div className='flex flex-col'>
          <div className={styles.proof_projects}>
            <div className={styles.tabs_container}>
              <div className={styles.tabs}>
                <div className={styles.tabs_content}>
                  <p onClick={() => getTabsData("Activity", 1)} className={activeTab === 1 ? `${styles.chosenTab}` : "ml-[10px]"}>Activity Feed</p>
                  <p onClick={() => getTabsData("personal", 2)} className={activeTab === 2 ? `${styles.chosenTab}` : "mr-[10px]"}>Personal Project</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.project_body_container}>
            <div className={styles.project_body}>
              <div className='flex justify-between'>
                <p className={styles.submitted}>Hannah Pedro{" "}<span>submitted to a bounty</span></p>
                <p className={styles.submitted}>1{" "}<span>Day</span></p>
              </div>
              <Image src="/project1.svg" alt="project" className="w-fit" width={0} height={328} />
              <div className={styles.project_bottom}>
                <div>
                  <Image src="/company-logo.svg" alt="" width={24} height={24} />
                </div>
                <p>Talent Acquisition Specialist - Web3</p>
                <p className={styles.view}>View Submission</p>
                <div>
                  <span>
                    <Image src="/arrow-up-right.svg" alt="view" width={20} height={20} />
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.project_body}>
              <div className='flex justify-between'>
                <p className={styles.submitted}>Hannah Pedro{" "}<span>won a bounty</span></p>
                <p className={styles.submitted}>1{" "}<span>Day</span></p>
              </div>
              <Image src="/project2.svg" alt="project" width={439} height={328} />
              <div className={styles.project_bottom}>
                <div>
                  <Image src="/company-logo.svg" alt="company-logo" width={24} height={24} />
                </div>
                <p>Talent Acquisition Specialist - Web3</p>
                <p className={styles.view}>View Submission</p>
                <div>
                  <span>
                    <Image src="/arrow-up-right.svg" alt="view" width={20} height={20} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default page