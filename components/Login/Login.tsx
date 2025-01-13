import React from 'react';
import styles from './login.module.scss'
import Image from 'next/image';

const Login = ({closeModal}) => {
    return (
        <div className={styles.login} onClick={closeModal}>
            <div className={styles.login__login_container} onClick={(e) => e.stopPropagation()}>
                <div className='flex justify-center'>
                    <Image src="/sui-single-logo.svg" width={34} height={43} alt="logo" />
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
                    <button className={styles.signin_button}>Sign in</button>
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