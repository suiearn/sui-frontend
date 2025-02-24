'use client'
import React from 'react';
import styles from './projects.module.scss'
import Image from 'next/image';
import { projects } from '@/app/utils/data';
// import { getBountys } from '@/lib/api/collection/bounty';
import { useRouter } from 'next/navigation';

const Projects = () => {
    const router = useRouter()

    //  const fetchData = async () => {
    //         try {
    //           const response = await getBountys();
    
    //         } catch (error) {
    //           console.error("Error fetching data:", error);
    //         }
    //       };
    
    //       useEffect(() => {
    //         fetchData(); 
    //       }, []);

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
                                    <h2>Deep Dive Into Sui Network</h2>
                                    <h3>by Sui earn</h3>
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
                                    <p>Due in 20 days</p>
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
                                <button className='btn primary small-btn' onClick={() => router.push('/bounty/67b77246719356dc60e76295')}>Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.project_description}>
                    <h3>About the bounty</h3>
                    <p>Create an insightful Twitter thread (at least 7 tweets) explaining the Sui Network. Cover its unique consensus mechanism, scalability, use cases, and why it&apos;s 
                        a game-changer in Web3. Use simple, engaging language and visuals if possible.</p>
                </div>
            </div>
        </div>
    )
}

export default Projects