
import React from 'react';
import styles from '../Login/login.module.scss'
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form'
import { signUp } from '@/lib/api/collection/auth';
import { useToast } from "@/components/toast/ToastContext";
import { useRouter } from 'next/navigation';

interface dataState{
    firstname: string
    lastname: string
    username: string
    email: string
    password: string
}
interface ModalProps {
    closeModal: () => void;
    setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowSignUpModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp = ({ closeModal, setShowLoginModal, setShowSignUpModal }: ModalProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<dataState>();
    const { showToast } = useToast();
    const router = useRouter()

    const onSignUp: SubmitHandler<dataState> = async (data) => {
        // console.log(data)

        const response = await signUp({
            "firstName": data.firstname,
            "lastName": data.lastname,
            "userName": data.username,
            "email": data.password,
            "password": data.password,
        })

        if (response.status === true) {
            showToast("success", response.message);
            setShowSignUpModal(false)
            router.push('/')
        }
        else {
            showToast("error", response.message);
        }
    }

    return (
        <div className={styles.login} onClick={closeModal}>
            <div className={styles.login__login_container} onClick={(e) => e.stopPropagation()}>
                <div className='flex justify-center relative'>
                    <Image src="/sui-single-logo.svg" width={34} height={43} alt="logo" />
                    <Image src="/close-icon.svg" alt="close" width={10} height={10} className='absolute right-0 top-0' onClick={closeModal} />
                </div>
                <div className={styles.header}>
                    <h3>You are one step away </h3>
                    <h4 onClick={() => { setShowSignUpModal(false); setShowLoginModal(true) }}>Already have an acoount?{" "}<span>Sign in</span></h4>
                </div>
                {/* <div className={styles.google_btn}>
                    <Image src="/google-icon.svg" width={24} height={24} alt="continue with google" />
                    <p>Continue with Google</p>
                </div> */}
                <div className={styles.main}>
                    <form onSubmit={handleSubmit(onSignUp)}>
                        <div>
                            <input
                                type='text'
                                placeholder='Enter your firstname'
                                {...register('firstname', {
                                    required: "Enter firstname"
                                })}
                            />
                            {errors.firstname && (
                                <p className="form-error">{`${errors.firstname.message}`}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type='text'
                                placeholder='Enter your lastname'
                                {...register('lastname', {
                                    required: "Enter lastname"
                                })}
                            />
                            {errors.lastname && (
                                <p className="form-error">{`${errors.lastname.message}`}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type='text'
                                placeholder='Enter your username'
                                {...register('username', {
                                    required: "Enter username"
                                })}
                            />
                            {errors.username && (
                                <p className="form-error">{`${errors.username.message}`}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type='text'
                                className={errors.email ? "form-error" : ""}
                                placeholder="Enter your email"
                                {...register("email", {
                                    required: "Enter a valid email",
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
                                placeholder="Enter a password"
                                {...register("password", {
                                    required: "Choose a password",
                                    minLength: {
                                        value: 8,
                                        message: "Password must contain at least 8 characters",
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
                        </div>
                        {/* <div className={styles.password}>
                            <input type='text' placeholder='••••••••' />
                            <Image className={styles.reveal} src="/reveal-password.svg" alt="reveal/hide password" width={13} height={9} />
                        </div> */}
                        <button className={styles.signin_button} type='submit' >Create account</button>
                    </form>
                    {/* <div className={styles.forgot}>Forgot password?</div> */}

                    <p className={styles.terms}>
                        By using this website, you agree to our <span>Terms of Use{" "}</span>
                        and our <span>Privacy Policy.</span>

                    </p>
                </div>
            </div>
        </div >
    )
}

export default SignUp