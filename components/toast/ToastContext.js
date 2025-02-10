// 1. ToastContext.js
"use client"
import React, { createContext, useContext, useState } from "react";
import styles from "./toast.module.scss";
import Image from "next/image";
import gsap from "gsap";

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = (variant, message) => {
    setToast({ variant, message });
    gsap.to("." + styles.container, {
      duration: 0,
      display: "block",
    });
    gsap.to("." + styles.container, {
      delay: 0.01,
      duration: 0.51,
      transform: "translateX(0)",
    });
    gsap.fromTo(
      "." + styles.progress_bar,
      { width: "0%" },
      {
        delay: 0.55,
        duration: 5,
        width: "100%",
        onComplete: () => setTimeout(() => hideToast(null), 5200),
      }
    );
  };

  const hideToast = () => {
    gsap.to("." + styles.container, {
      delay: 0,
      duration: 0.5,
      transform: "translateX(110%)",
    });

    gsap.to("." + styles.container, {
      delay: 0.51,
      duration: 0,
      display: "block",
    });

    gsap.to("." + styles.progress_bar, {
      delay: 0.51,
      duration: 0,
      width: "100%",
    });

    setTimeout(() => setToast(null), 1100);
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.top_left}>
            <div>
              <Image
                src={`/toast/${toast?.variant}.svg`}
                width={24}
                height={24}
                alt=""
              />
            </div>
            <div className={styles.message}>{toast?.message}</div>
          </div>
          <div>
            <svg
              onClick={hideToast}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13 13L3 3"
                stroke="#425466"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 3L3 13"
                stroke="#425466"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div
          className={styles.progress_bar + " " + styles[toast?.variant]}
        ></div>
      </div>
    </ToastContext.Provider>
  );
};
