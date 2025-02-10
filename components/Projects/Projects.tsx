import React from 'react';
import styles from './projects.module.scss'
import Image from 'next/image';
import { projects } from '@/app/utils/data';

const Projects = () => {
    return (
        <div className={styles.project}>
            <div className={styles.left}>
                <div className={styles.project_container}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.project_inner}>
                            <div className={styles.info}>
                                <div className='flex gap-3'>
                                    <Image src='/project_logo.svg' alt='project logo' width={57} height={57} />
                                    <div className={styles.name}>
                                        <h2>{project.projectName}</h2>
                                        <h3>by {project.projectBy}</h3>
                                    </div>
                                </div>
                                <div>
                                    <Image src='/heart-rounded.svg' alt="like icon" width={26} height={26} />
                                </div>
                            </div>
                            <div className={styles.price}>
                                <p>Bounty</p>
                                <div>{project.price}</div>
                            </div>
                            <div className={styles.location}>
                                <div className={styles.due}>
                                    <Image src="/clock.svg" alt="clock" width={15} height={15} />
                                    <p>{project.due}</p>
                                </div>
                                <div className={styles.global}>
                                    <Image src="/location.svg" alt="location" width={15} height={15} />
                                    <p>{project.type}</p>
                                </div>
                                <div className={styles.comment}>
                                    <Image src="/comment.svg" alt="comment" width={15} height={15} />
                                    <p className='flex items-center'>10 Comments
                                        <span><Image src="/success-circle.svg" alt="success circle" width={12} height={12} /></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.project_details_container}>
                    <div className={styles.project_details_inner}>
                        <div className={styles.info}>
                            <div className='flex gap-3'>
                                <Image src='/project_logo.svg' alt='project logo' color='white' width={57} height={57} />
                                <div className={styles.name}>
                                    <h2>Talent Acquisition Specialist Web3</h2>
                                    <h3>by Gelato Network</h3>
                                </div>
                            </div>
                            <div>
                                <Image src='/share-icon.svg' alt="like icon" width={14} height={14} />
                            </div>
                        </div>
                        <div className={styles.price}>
                            <p>Bounty</p>
                        </div>
                        <div className={styles.location}>
                            <div className='flex items-center'>
                                <div className={styles.due}>
                                    <Image src="/clock-white.svg" alt="clock" width={15} height={15} />
                                    <p>Due in 5h</p>
                                </div>
                                <div className={styles.global}>
                                    <Image src="/location-white.svg" alt="location" width={15} height={15} />
                                    <p>Global</p>
                                </div>
                                <div className={styles.comment}>
                                    <Image src="/comment-white.svg" alt="comment" width={15} height={15} />
                                    <p className='flex items-center'>10 Comments
                                        <span><Image src="/success-circle.svg" alt="success circle" width={12} height={12} /></span>
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center gap-6'>
                                <div>
                                    <Image src='/heart-rounded-white.svg' alt="like icon" width={26} height={26} />
                                </div>
                                <button className='btn primary small-btn'>Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.project_description}>
                    <h3>About the bounty</h3>
                    <p>Gelato is an enterprise-grade Rollup as a Service Platform that helps you Build scalable, blazing-fast, custom enterprise-grade Rollups with Gelato`&apos;`s powerful Native Web3 Modules. Today, over 50 projects rely on our Rollup Platform processing over 4.5M daily txs & securing over $600M in TVL. We are proud to build with amazing teams such as Kraken’s Ink, Fox News, Reya, Lisk & Open Campus to bring millions of users onchain.</p>
                    <p>Our team is incredibly passionate and dedicated to bridging the gap between what blockchain currently is and what it has the potential to be. We are committed to fostering a work environment that encourages innovation, new ideas, collaboration, research, and in-depth discussions.</p>
                    <p>We are ramping up at Gelato, and are looking for a hungry, enthusiastic Talent Acquisition Specialist who can help us grow.</p>
                </div>
            </div>
        </div>
    )
}

export default Projects