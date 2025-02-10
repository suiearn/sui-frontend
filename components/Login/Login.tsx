import React from 'react';
import styles from './login.module.scss'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Login = ({closeModal}) => {
    const router = useRouter()
    return (
        <div className={`relative ${styles.login}`} onClick={closeModal}>
            <div className={styles.login__login_container} onClick={(e) => e.stopPropagation()}>
                <div className='flex justify-center relative'>
                    <Image src="/sui-single-logo.svg" width={34} height={43} alt="logo" />
                    <Image src="/close-icon.svg" alt="close" width={10} height={10} className='absolute right-0 top-0' onClick={closeModal} />
                </div>
                <div className={styles.header}>
                    <h3>You are one step away </h3>
                    <h4>Don’t have an account?{" "}<span>Sign up</span></h4>
                </div>
                <div className={styles.google_btn}>
                    <Image src="/google-icon.svg" width={24} height={24} alt="continue with google" />
                    <p>Continue with Google</p>
                </div>
                <div className={styles.main}>
                    <form>
                        <div>
                            <input type='text' placeholder='Enter your email' />
                        </div>
                        <div className={styles.password}>
                            <input type='text' placeholder='••••••••' />
                            <Image className={styles.reveal} src="/reveal-password.svg" alt="reveal/hide password" width={13} height={9} />
                        </div>
                    </form>
                    <div className={styles.forgot}>Forgot password?</div>
                    <button className={styles.signin_button} onClick={() => router.replace('/profile')}>Sign in</button>
                    <p className={styles.terms}>
                        By using this website, you agree to our <span>Terms of Use{" "}</span>
                        and our <span>Privacy Policy.</span>

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login