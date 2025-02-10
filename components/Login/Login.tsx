/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styles from './login.module.scss'
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { login } from '@/lib/api/collection/auth';
import { useToast } from '../toast/ToastContext';
import { useAppDispatch } from "@/lib/redux-store/store";
import { loginSuccess } from '@/lib/redux-store/auth/authSlice';

const Login = ({ closeModal, setShowLoginModal, setShowSignUpModal }: any) => {
    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const dispatch = useAppDispatch()
    const { showToast } = useToast();

    const onSubmit = async (data:any) => {

        const mainData = {
            "email": data.email,
            "password": data.password
        };

        const response = await login(mainData);
        if (response.status === true) {
            showToast("success", response.data.message);
            console.log(response)
            closeModal()
            dispatch(loginSuccess({
                isAuthenticated: true, //yes
                token: response.data.token, //yes
                userId: response.data.user._id, //yes
                username: response.data.user.userName, //yes
                email: response.data.user.email,
            }))
            // router.push("/profile")
        }
        else {
            showToast("error", response.message)
        }
    };
    return (
        <div className={`relative ${styles.login}`} onClick={closeModal}>
            <div className={styles.login__login_container} onClick={(e) => e.stopPropagation()}>
                <div className='flex justify-center relative'>
                    <Image src="/sui-single-logo.svg" width={34} height={43} alt="logo" />
                    <Image src="/close-icon.svg" alt="close" width={10} height={10} className='absolute right-0 top-0' onClick={closeModal} />
                </div>
                <div className={styles.header}>
                    <h3>You are one step away </h3>
                    <h4 onClick={() => { setShowLoginModal(false); setShowSignUpModal(true) }}>Don’t have an account?{" "}<span>Sign up</span></h4>
                </div>
                {/* <div className={styles.google_btn}>
                    <Image src="/google-icon.svg" width={24} height={24} alt="continue with google" />
                    <p>Continue with Google</p>
                </div> */}
                <div className={styles.main}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input
                                id="business-email"
                                className={errors.email ? "form-error" : ""}
                                placeholder="Enter your email"
                                {...register("email", {
                                    required: "Enter your email",
                                    pattern: {
                                        value:
                                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Enter a valid email",
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className="form-error">{`${errors.email.message}`}</p>
                            )}
                        </div>
                        <div className={styles.password}>
                            <input
                                id="password"
                                className={errors.password ? "form-error" : ""}
                                type="password"
                                placeholder="••••••••••"
                                {...register("password", {
                                    required: "Choose a password",
                                    minLength: {
                                        value: 8,
                                        message:
                                            "Password must contain at least 8 characters",
                                    },
                                    pattern: {
                                        value:
                                            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/,
                                        message:
                                            "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
                                    },
                                })}
                            />
                            {errors.password && (
                                <p className="form-error w-[352px]">{`${errors.password.message}`}</p>
                            )}
                            {/* <Image className={styles.reveal} src="/reveal-password.svg" alt="reveal/hide password" width={13} height={9} /> */}
                        </div>
                        <button className={styles.signin_button} type="submit">Sign in</button>
                    </form>
                    {/* <div className={styles.forgot}>Forgot password?</div> */}

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